const Shop = require('../models/shop');
const User = require('../models/user');
const Blog = require('../models/blog');
const _ = require('lodash');
const path = require('path');

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

exports.updateModeration = (req,res) => {
    console.log('req.body in updateModeration func',req.body)
    console.log('updateModeration Function ran in controller')
    let {postModeration, commentModeration} = req.body;

    let shopName = req.params.username ? req.params.username.toLowerCase() : '';
    console.log('shopName',shopName);
    Shop.findOne({shopify_domain: shopName}).exec((err, oldShop) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        } else {
            oldShop.postModeration = postModeration;
            oldShop.commentModeration = commentModeration;

            oldShop.save((err, shop) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                } else {
                    return res.json(shop);
                }
            });
        }
    });
}

exports.updateLanguage = (req,res) => {
    console.log('req.body in updateLanguage func',req.body)
    
    let {language} = req.body;
    let shopName = req.params.username ? req.params.username.toLowerCase() : '';
    console.log('shopName',shopName);
    Shop.findOne({shopify_domain: shopName}).exec((err, oldShop) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        } else {
            oldShop.language = language;

            oldShop.save((err, shop) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                } else {
                    return res.json(shop);
                }
            });
        }
    });
}



exports.update = (req, res) => {
    // console.log('ran update func in user controller with req.body', req.body);
    let shopName = req.params.username ? req.params.username.toLowerCase() : '';
    console.log('shopName',shopName);
    let {newSettings, iconImg, headerImg} = req.body;

    if(iconImg){
        let iconImageBuffer = decodeBase64Image(iconImg);
        let iconFileExtension = iconImg.split('data:image/')[1].split(';')[0];
        // let image = Buffer.from(req.body.iconImg, 'base64');
        let iconImageName = shopName + `-${Date.now()}` + `.${iconFileExtension}`;

        fs.writeFile(path.join(__dirname,`../../Proxy/public/uploads/${iconImageName}`), iconImageBuffer.data, function(err, result) {
             if(err) {
                console.log('error', err);
            } else {
                console.log('file saved successfully: ', result);
                let API_Endpoint = process.env.NODE_ENV == 'production' ? `https://socialking.app/proxy` : `https://${shopName}/community/connect`
                Shop.update({ shopify_domain: shopName }, {
                    iconImageURL: `${API_Endpoint}/images/uploads/${iconImageName}`
                }, function(err, affected, resp) {
                   console.log('response to saving iconImg:',resp);
                })
            }
        })
    }

    if(headerImg){
        let headerImageBuffer = decodeBase64Image(headerImg);
        let headerFileExtension = headerImg.split('data:image/')[1].split(';')[0];
        // let image = Buffer.from(req.body.iconImg, 'base64');
        let headerImageName = shopName + `-${Date.now()}` + `.${headerFileExtension}`;

        fs.writeFile(path.join(__dirname,`../../Proxy/public/uploads/${headerImageName}`), headerImageBuffer.data, function(err, result) {
             if(err) {
                console.log('error', err);
            } else {
                console.log('file saved successfully: ', result);
                let API_Endpoint = process.env.NODE_ENV == 'production' ? `https://socialking.app/proxy` : `https://${shopName}/community/connect`
                Shop.update({ shopify_domain: shopName }, {
                    headerImageURL: `${API_Endpoint}/images/uploads/${headerImageName}`
                }, function(err, affected, resp) {
                   console.log('response to saving iconImg:',resp);
                })
            }
        })
    }

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

function decodeBase64Image(dataString) {
    var matches = dataString.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
    response = {};

    if (matches.length !== 3) {
    return new Error('Invalid input string');
    }

    response.type = matches[1];
    response.data = new Buffer(matches[2], 'base64');

    return response;
}

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
