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

exports.update = (req, res) => {
    console.log('ran update func in user controller with req.body', req.body);
    let shopName = req.params.username ? req.params.username.toLowerCase() : '';
    console.log('shopName',shopName);
    let {newSettings} = req.body;
    console.log('req.body.files', req.body.files[0]);

    var data = req.body.iconImg;

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

    var imageBuffer = decodeBase64Image(data);
    
    // let image = Buffer.from(req.body.iconImg, 'base64');
    fs.writeFile(path.join(__dirname,'/l-file.jpg'), imageBuffer.data, function(err, result) {
     if(err) {
        console.log('error', err);
    } else {
        console.log('file saved successfully: ', result);
    }
   })

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
