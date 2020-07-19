const Shop = require('../../models/Shop');
const User = require('../../models/user');
const Blog = require('../../models/blog');
const _ = require('lodash');
const formidable = require('formidable');
const fs = require('fs');
const { errorHandler } = require('../helpers/dbErrorHandler');

// liquid-templates functions
// public profile
const { userSlug } = require('../liquid-templates/userSlug');

//logged-in user admin area
const { userAdmin } = require('../liquid-templates/userAdmin');

exports.read = (req, res) => {
    Shop.findOne({shopify_domain: req.query.shop})
    .select("-accessToken")   
    .exec((err, shop) => {
        if (err) {
            return res.json({
                error: errorHandler(err)
            });
        }

        Blog.find({ postedBy: req.profile._id, shopifyDomain: req.query.shop })
            .sort({createdAt: -1})
            .populate('categories', '_id name slug')
            .populate('tags', '_id name slug')
            .populate('postedBy', '_id name username')
            .select('_id title slug postedBy hidden createdAt updatedAt')
            .exec((err, blogs) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                req.profile.hashed_password = undefined;
                Blog.find({ slug: req.query.slug })
                    .exec((err, blog) => {
                        if (err) {
                            return res.status(400).json({
                                error: errorHandler(err)
                            });
                        }
                    return res.send(userAdmin({blog, blogs, user: req.profile, tags: req.tags, shop}));
                });
            });
    })
};

exports.userSettings = (req, res) => {
    res.setHeader('content-type', 'text/javascript')
    req.profile.hashed_password = undefined;
    return res.send(req.profile);
};

exports.publicProfile = (req, res) => {
    console.log('publicProfile function ran');
    let username = req.params.username;
    let user;
    let blogs;

    Shop.findOne({shopify_domain: req.query.shop})
    .select("-accessToken")   
    .exec((err, shop) => {
        if (err) {
            return res.json({
                error: errorHandler(err)
            });
        }

        User.findOne({ username })
        .exec((err, userFromDB) => {
            if (err || !userFromDB) {
                return res.status(400).json({
                    error: 'User not found'
                });
            }
            user = userFromDB;

            let userId = user._id;  
            Blog.find({ postedBy: userId, shopPostedAt: shop._id })
                .populate('tags', '_id name slug')
                .populate('postedBy', '_id name cover_photo username popUser')
                .limit(1000)
                .select('_id coverMedia title slug excerpt categories tags postedBy createdAt updatedAt')
                .exec((err, data) => {
                    if (err) {
                        return res.status(400).json({
                            error: errorHandler(err)
                        });
                    }
                    user.photo = undefined;
                    user.popuser = true;
                    user.hashed_password = undefined;
                    res.send(userSlug({
                        shop,
                        user,
                        blogs: data
                    }))
                });
        });
    });
};

exports.update = (req, res) => {
    res.setHeader('content-type', 'text/javascript');
    console.log('hit update route with req.query: ', req.query)
    console.log('hit update route with req.body: ', req.body)
    
    let user = Object.assign(req.profile, req.body);

    user.save((err, result) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        user.hashed_password = undefined;
        user.salt = undefined;
        user.photo = undefined;
        res.json(user);
    });
};

exports.photo = (req, res) => {
    const username = req.params.username;
    User.findOne({ username }).exec((err, user) => {
        if (err || !user) {
            return res.status(400).json({
                error: 'User not found'
            });
        }
        if (user.photo.data) {
            res.set('Content-Type', user.photo.contentType);
            return res.send(user.photo.data);
        }
    });
};
