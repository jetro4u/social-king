const Shop = require('../../models/Shop');
const Tag = require('../../models/tag');
const Blog = require('../../models/blog');
const slugify = require('slugify');
const { errorHandler } = require('../helpers/dbErrorHandler');

// liquid-templates functions
const { tagSlug } = require('../liquid-templates/tagSlug');

exports.create = (req, res) => {
    const { name } = req.body;
    let slug = slugify(name).toLowerCase();

    let tag = new Tag({ name, slug });

    tag.save((err, data) => {
        if (err) {
            console.log(err);
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data); // dont do this res.json({ tag: data });
    });
};

exports.getTags = async (req, res, next) => {
    console.log('ran getTags function in tags controller')
    Tag.find({shop: req.query.shop}).exec((err, data) => {
        if (err) {
            console.log('errer getting tags',err)
        }
        req.tags = data;
        next();
    });
};

exports.list = (req, res) => {
    res.setHeader('content-type', 'text/javascript')
    console.log('req.query in tags list function:', req.query);
    Tag.find({}).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json(data);
    });
};

exports.read = (req, res) => {
    let {slug, limit, skip} = req.body;

    slug = req.params.slug.toLowerCase();
    limit = limit ? parseInt(limit) : 9;
    skip = skip ? parseInt(skip) : 0;

    let blogs;

    Shop.findOne({shopify_domain: req.query.shop})
        .select("-accessToken")   
        .exec((err, shop) => {
            if (err) {
                return res.json({
                    error: errorHandler(err)
                });
            }
            Tag.findOne({ slug }).exec((err, tag) => {
                if (err) {
                    return res.status(400).json({
                        error: 'Tag not found'
                    });
                }
                // res.json(tag);
                Blog.find({ tags: tag })
                    .populate('categories', '_id name slug')
                    .populate('tags', '_id name slug')
                    .populate('postedBy', '_id name username cover_photo')
                    .sort({ createdAt: -1 })
                    .skip(skip)
                    .limit(limit)
                    .select('_id username cover_photo coverMedia title excerpt mdesc slug categories postedBy tags createdAt updatedAt')
                    .exec((err, data) => {
                        if (err) {
                            return res.status(400).json({
                                error: errorHandler(err)
                            });
                        }
                        res.send(tagSlug({ shop, tags: req.tags, tag: tag, blogs: data, size: data.length }));
                    });
            });

        })
};

exports.remove = (req, res) => {
    const slug = req.params.slug.toLowerCase();

    Tag.findOneAndRemove({ slug }).exec((err, data) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Tag deleted successfully'
        });
    });
};
