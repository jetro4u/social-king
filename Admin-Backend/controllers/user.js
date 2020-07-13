const Shop = require('../models/shop');
const User = require('../models/user');
const Blog = require('../models/blog');
const _ = require('lodash');
const formidable = require('formidable');
const fs = require('fs');
const { errorHandler } = require('../helpers/dbErrorHandler');

exports.read = (req, res) => {
    console.log('req.body', req.body);
    let shopName = req.params.username ? req.params.username.toLowerCase() : '';
    console.log('shopName',shopName);
   
    req.profile.hashed_password = undefined;
    return res.json(req.profile);
};

exports.settingsPage = (req, res) => {
    console.log('ran publicProfile func in controller with req.body', req.body);
    let shopName = req.params.username ? req.params.username.toLowerCase() : '';
    console.log('shopName',shopName);
    Shop.findOne({shopify_domain: shopName}).exec((err, shop) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        } else {
            return res.json(shop);
        }
    });
}

exports.update = (req, res) => {
    console.log('ran update func in user controller with req.body', req.body);
    let shopName = req.params.username ? req.params.username.toLowerCase() : '';
    console.log('shopName',shopName);
    let {newSettings} = req.body;

    Shop.findOne({ shopify_domain: shopName }).exec((err, oldShop) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        console.log('oldShop:', oldShop);

        oldShop = _.merge(oldShop, req.body);

        oldShop.save((err, shop) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            } else {
                return res.json(shop);
            }
        });
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
