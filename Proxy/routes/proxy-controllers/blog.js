const edjsHTML = require('editorjs-html');
const edjsParser = edjsHTML();

const Blog = require('../../models/blog');
const Comment = require('../../models/comment');
const Category = require('../../models/category');
const Tag = require('../../models/tag');
const User = require('../../models/user');
const Shop = require('../../models/Shop');

const slugify = require('slugify');
const stripHtml = require('string-strip-html');
const _ = require('lodash');
const { errorHandler } = require('../helpers/dbErrorHandler');
const fs = require('fs');
const { smartTrim } = require('../helpers/blog');

// liquid-templates functions
const { blogsList } = require('../liquid-templates/blogsList');
const { blogSlug } = require('../liquid-templates/blogSlug');

exports.create = (req, res) => {
    res.setHeader('content-type', 'text/javascript')
    let { title, body, categories, tags } = req.body;
    console.log('req.body in blog create function: ',req.body);
    console.log('req.profile in blog create function: ',req.profile);
    console.log('req.query in blog create function: ',req.query);
    console.log('tags in blog create function: ',tags);
  
    title = title.title;

    if (!title) {
        return res.status(400).json({
            error: 'Title is required'
        });
    }

    if (body.blocks === undefined || body.blocks.length == 0) {
        return res.status(400).json({
            error: 'Content is required'
        });
    }

    if (!tags || tags.length === 0) {
        return res.status(400).json({
            error: 'At least one tag is required'
        });
    }

    let blog = new Blog();
    blog.shopifyDomain=req.query.shop;
    blog.title = title;
    blog.body = body;
    let mediaBlock = body.blocks.find(function (block) {
        return block.type=='image'
    });
    blog.coverMedia = mediaBlock ? mediaBlock.data.file.url : ''; 

    blog.slug = slugify(title.replace(/["']/g, "")).toLowerCase();
    blog.mtitle = `${title} | ${process.env.APP_NAME}`;

    let searchForText = element => element.type == 'paragraph';
    let postTeaser = body.blocks.find(searchForText);

    postTeaser = postTeaser ?  postTeaser.data.text 
        : `Check out this post made by a member of our community`

    blog.excerpt = smartTrim(postTeaser, 320, ' ', ' ...');
    blog.mdesc = stripHtml(postTeaser.substring(0, 160));

    blog.postedBy = req.user._id;
    console.log('req.user._id on server when saving blogpost: ',req.user._id);
    
    const html = edjsParser.parse(body);
    console.log('html: ',html);
    blog.html = html.join('');
    // categories and tags
    // let arrayOfCategories = categories && categories.split(',');
    // let arrayOfTags = tags[0];

    blog.save((err, result) => {
        if (err) {
            console.log('error saving post',err)
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        console.log('post saved successfully',result);
        //add shop to blog record
        Shop.findOne({ shopify_domain: req.query.shop}).exec((err, shop) => {
           console.log('shop in function to add Shop reference', shop)
           Blog.findByIdAndUpdate(result._id, { $set: { shopPostedAt: [shop._id] } }, { new: true }).exec(
                (err, result) => {
                    if (err) {
                        console.log('ran error in block when trying to save blog reference to shop')
                        return res.status(400).json({
                            error: errorHandler(err)
                        })
                    }
                    console.log('Shop added to blog record');
                    tags.forEach((tag, index)=>{
                        Blog.findByIdAndUpdate(result._id, { $push: { tags: tag } }, { new: true }).exec(
                            (err, result) => {
                                if (err) {
                                    return res.status(400).json({
                                        error: errorHandler(err)
                                    });
                                } else {
                                    console.log('saved tag:', tag) 
                                }
                            }
                        );
                    })
                    res.send({message: 'Thank you for submitting your new post. A moderator will review your content, and publish it if approved.'});
                }
            );        
        });
    });
};


exports.createComment = (req, res) => {
    res.setHeader('content-type', 'text/javascript')
    let { body } = req.body;
    console.log('req.body in comment create function: ',req.body);
    console.log('req.profile in comment create function: ',req.profile);
    console.log('req.query in comment create function: ',req.query);

    if (body.blocks === undefined || body.blocks.length == 0) {
        return res.status(400).json({
            error: 'Content is required'
        });
    }

    let comment = new Comment();
    comment.shopifyDomain=req.query.shop;
    comment.body = body;
    let mediaBlock = body.blocks.find(function (block) {
        return block.type=='image'
    });
    comment.coverMedia = mediaBlock ? mediaBlock.data.file.url : ''; 

    comment.postSlug = req.query.slug;
    comment.postedBy = req.user._id;
    
    const html = edjsParser.parse(body);
    console.log('html: ',html);
    comment.html = html.join('');
    // categories and tags
    // let arrayOfCategories = categories && categories.split(',');
    // let arrayOfTags = tags[0];

    comment.save((err, result) => {
        if (err) {
            console.log('error saving comment',err)
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        console.log('comment saved successfully',result);
        //add shop to blog record
        Shop.findOne({ shopify_domain: req.query.shop}).exec((err, shop) => {
           console.log('shop in function to add Shop reference', shop)
           Comment.findByIdAndUpdate(result._id, { $set: { shopPostedAt: [shop._id] } }, { new: true }).exec(
                (err, result) => {
                    if (err) {
                        console.log('ran error in block when trying to save comment reference to shop')
                        return res.status(400).json({
                            error: errorHandler(err)
                        })
                    }
                    console.log('Shop added to comment record');
                    res.send({message: 'Thank you for submitting your comment. A moderator will review your content, and publish it if approved.'});
                }
            );        
        });
    });
};

// list, listAllBlogsCategoriesTags, read, remove, update

exports.listForSitemap = (req, res) => {
    console.log('req.query in listForSitemap', req.query);

    Shop.findOne({shopify_domain: req.query.shop}).exec((err, shop) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        
        let shopId = shop._id;
        
        Blog.find({ shopPostedAt: shopId })
        .sort({ createdAt: -1 })
        .select('slug updatedAt')
        .exec((err, blogs) => {
            if (err) {
                return res.json({
                    error: errorHandler(err)
                });
            }
            
            User.find({ 
                   shops: { 
                     $in: [[shopId]] 
                   }
                })
                .select('username updatedAt')
                .exec((err, users) => {
                    if (err) {
                        return res.json({
                            error: errorHandler(err)
                        });
                    }

                    Tag.find({shop: req.query.shop})
                        .select('slug updatedAt')
                        .exec((err, tags) => {
                            if (err) {
                                return res.json({
                                    error: errorHandler(err)
                                });
                            }
                            let data = {};
                            
                            data.tags=tags; 
                            data.users=users;
                            data.blogs=blogs;

                            let latestPost = 0;
                          let latestProfile = 0;
                          let latestTag = 0;


                          let projectsXML = "";
                          let profilesXML = "";
                          let tagsXML = "";
                          let DOMAIN = req.query.shop;


                          data.tags.map(tag => {
                            const tagDate = tag.updatedAt;
                            if (!latestTag || tagDate > latestTag) {
                              latestTag = tagDate;
                            }

                            const tagURL = `${DOMAIN}/community/connect/tags/${tag.slug}`;
                            tagsXML += `
                              <url>
                                <loc>${tagURL}</loc>
                                <lastmod>${tagDate}</lastmod>
                                <priority>0.80</priority>
                              </url>`
                          });

                          data.users.map(user => {
                            const profileDate = user.updatedAt;
                            if (!latestProfile || profileDate > latestProfile) {
                              latestProfile = profileDate;
                            }

                            const profileURL = `${DOMAIN}/profile/${user.username}`;
                            profilesXML += `
                              <url>
                                <loc>${profileURL}</loc>
                                <lastmod>${profileDate}</lastmod>
                                <priority>0.80</priority>
                              </url>`
                          });

                          data.blogs.map(post => {
                            const postDate = post.updatedAt;
                            if (!latestPost || postDate > latestPost) {
                              latestPost = postDate;
                            }

                            const projectURL = `${DOMAIN}/community/connect/blog/${post.slug}`;
                            projectsXML += `
                              <url>
                                <loc>${projectURL}</loc>
                                <lastmod>${postDate}</lastmod>
                                <priority>0.80</priority>
                              </url>`
                          });

                          let theSitemap = `<?xml version="1.0" encoding="UTF-8"?>
                            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
                              <url>
                                <loc>${DOMAIN}/community/connect</loc>
                                <priority>0.90</priority>
                              </url>
                              ${tagsXML}
                              ${profilesXML}
                              ${projectsXML}
                            </urlset>`
                            res.setHeader("Content-Type", "text/xml");
                            res.write(theSitemap);
                            res.end();
                    });
             });        
        });

    });
};


exports.listAllBlogsCategoriesTags = (req, res) => {
    console.log('ran listAllBlogsCategoriesTags function on server with req.query', req.query);
    let limit = req.body.limit ? parseInt(req.body.limit) : 9;
    let skip = req.body.skip ? parseInt(req.body.skip) : 0;

    let blogs;
    let categories;
    let tags;

    //listByUser from Shopify Admin App
    console.log('req.body', req.body);
    let shopName = req.query.shop;
    console.log('shopName',shopName);
    Shop.findOne({shopify_domain: shopName}).exec((err, shop) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        
        let shopId = shop._id;
        Blog.find({ hidden: false, shopPostedAt: shopId })
        .sort({createdAt: -1})
        .populate('tags', '_id name slug')
        .populate('postedBy', '_id name username profile cover_photo')
        .sort({ total_ratings: -1 })
        .skip(skip)
        .limit(limit)
        .select('_id title excerpt cover_photo coverMedia slug product_imgurl product_summary mdesc autoGenerated categories tags postedBy createdAt updatedAt')
        .exec((err, data) => {
            if (err) {
                return res.json({
                    error: errorHandler(err)
                });
            }
            blogs = data; // blogs
                // get all tags
                Tag.find({shop: shopName}).exec((err, t) => {
                    if (err) {
                        return res.json({
                            error: errorHandler(err)
                        });
                    }
                    tags = t;
                    // return all blogs categories tags
                    res.send(blogsList({ shop, blogs, tags, size: blogs.length }));
                });
        });
    });    
};

exports.read = (req, res) => {
    console.log('read function ran in controller')
    const slug = req.params.slug.toLowerCase();
    if(slug=='undefined'){
        console.log('shopify sent an extra server request for some reason');
        return res.send({message: 'all good'});
    }
    
     Shop.findOne({shopify_domain: req.query.shop})
        .select("-accessToken")   
        .exec((err, shop) => {
            if (err) {
                return res.json({
                    error: errorHandler(err)
                });
            }
            Comment.find({postSlug: slug, hidden: false})
            .populate('postedBy', '_id about storeFavorites cover_photo name username trackingID')
            .exec((err, comments) => {
                if (err) {
                    return res.json({
                        error: errorHandler(err)
                    });
                }
                 Blog.findOne({ slug })
                    .populate('shop', '_id headerImageURL iconImageURL')
                    .populate('tags', '_id name slug')
                    .populate('postedBy', '_id about storeFavorites cover_photo name username trackingID')
                    .select('_id title about storeFavorites hidden cover_photo html body selectedProducts product_rating total_ratings autoGenerated slug mtitle mdesc tags postedBy trackingID createdAt updatedAt')
                    .exec((err, blog) => {
                        if (err) {
                            return res.json({
                                error: errorHandler(err)
                            });
                        }
                         User.findOne({ _id: blog.postedBy })
                            .exec((err, user) => {
                                if (err || !user) {
                                    return res.status(400).json({
                                        error: 'User not found'
                                    });
                                }

                            res.send(blogSlug({blog, shop, user, comments}));
                            });
                    });
            })
        });
};

exports.remove = (req, res) => {
    res.setHeader('content-type', 'text/javascript');
    const slug = req.params.slug.toLowerCase();
    Blog.update({slug}, {
        archivedByUser: true
    }, function(err, affected, resp) {
       if (err) {
            return res.json({
                error: errorHandler(err)
            });
        }
       res.json({
            message: 'Post deleted successfully'
        });
    })
};


exports.toggle = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Blog.findOne({ slug: slug }, function(err, blog) {
        blog.hidden = !blog.hidden;
        blog.save(function(err, updatedBook) {
            if (err) {
                return res.json({
                    error: errorHandler(err)
                });
            }
            res.json({
                message: 'Blog toggled successfully'
            });
        });
    });
}


exports.update = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Blog.findOne({ slug }).exec((err, oldBlog) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }

        let form = new formidable.IncomingForm();
        form.keepExtensions = true;

        form.parse(req, (err, fields, files) => {
            if (err) {
                return res.status(400).json({
                    error: 'Image could not upload'
                });
            }

            let slugBeforeMerge = oldBlog.slug;
            oldBlog = _.merge(oldBlog, fields);
            oldBlog.slug = slugBeforeMerge;

            const { body, desc, categories, tags } = fields;

            if (body) {
                oldBlog.excerpt = smartTrim(body, 320, ' ', ' ...');
                oldBlog.desc = stripHtml(body.substring(0, 160));
            }

            if (categories) {
                oldBlog.categories = categories.split(',');
            }

            if (tags) {
                oldBlog.tags = tags.split(',');
            }

            if (files.photo) {
                if (files.photo.size > 1000000) {
                    return res.status(400).json({
                        error: 'Image should be less then 1mb in size'
                    });
                }
                oldBlog.photo.data = fs.readFileSync(files.photo.path);
                oldBlog.photo.contentType = files.photo.type;
            }

            oldBlog.save((err, result) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                // result.photo = undefined;
                res.json(result);
            });
        });
    });
};

exports.photo = (req, res) => {
    const slug = req.params.slug.toLowerCase();
    Blog.findOne({ slug })
        .select('photo')
        .exec((err, blog) => {
            if (err || !blog) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            res.set('Content-Type', blog.photo.contentType);
            return res.send(blog.photo.data);
        });
};

exports.listRelated = (req, res) => {
    console.log(req.body.blog);
    let limit = req.body.limit ? parseInt(req.body.limit) : 9;
    const { _id, tags, search_keyword } = req.body.blog;

    if(search_keyword){
        Blog.find({ _id: { $ne: _id }, hidden: false, search_keyword: search_keyword })
            .limit(limit)
            .populate('postedBy', '_id name username profile')
            .sort({ total_ratings: -1 })
            .select('title slug autoGenerated product_imgurl mdesc postedBy createdAt updatedAt')
            .exec((err, blogs) => {
                if (err) {
                    return res.status(400).json({
                        error: 'Blogs not found'
                    });
                }
                res.json(blogs);
            });
    } else {
        Blog.find({ _id: { $ne: _id }, hidden: false, tags: { $in: tags } })
            .limit(limit)
            .populate('postedBy', '_id name username profile')
            .select('title slug autoGenerated product_imgurl mdesc postedBy createdAt updatedAt')
            .exec((err, blogs) => {
                if (err) {
                    return res.status(400).json({
                        error: 'Blogs not found'
                    });
                }
                res.json(blogs);
            });
    }
};

//
exports.listSearch = (req, res) => {
    console.log(req.query);
    const { search } = req.query;
    let limit = req.body.limit ? parseInt(req.body.limit) : 35;

    if (search) {
        Blog.find(
            {
                $or: [{ title: { $regex: search, $options: 'i' } }, { body: { $regex: search, $options: 'i' } }],
                hidden: false
            },
            (err, blogs) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                res.json(blogs);
            }
        ).limit(limit)
        .sort({ total_ratings: -1 })
        .select('-photo -body');
    }
};

exports.listByUser = (req, res) => {
    console.log('ran list by user function on server');
    res.setHeader('content-type', 'text/javascript');

    User.findOne({ username: req.params.username }).exec((err, user) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        let userId = user._id;
        Blog.find({ postedBy: userId })
            .sort({createdAt: -1})
            .populate('categories', '_id name slug')
            .populate('tags', '_id name slug')
            .populate('postedBy', '_id name username')
            .select('_id title slug postedBy hidden createdAt updatedAt')
            .exec((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                res.json(data);
            });
    });
};
