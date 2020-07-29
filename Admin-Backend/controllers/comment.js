const Shop = require('../models/shop');
const Comment = require('../models/comment');
const User = require('../models/user');
const slugify = require('slugify');
const stripHtml = require('string-strip-html');
const _ = require('lodash');
const { errorHandler } = require('../helpers/dbErrorHandler');
const fs = require('fs');

const sgMail = require('@sendgrid/mail'); // SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

exports.remove = (req, res) => {
    const _id = req.params.id.toLowerCase();
    Comment.findOneAndRemove({ _id }).exec((err, data) => {
        if (err) {
            return res.json({
                error: errorHandler(err)
            });
        }
        res.json({
            message: 'Blog deleted successfully'
        });
    });
};


exports.toggle = (req, res) => {
    const id = req.params.id.toLowerCase();

    Comment.findOne({ _id: id })
        .populate('postedBy', '_id name username email')
        .select('_id title slug postedBy hidden createdAt updatedAt')
        .exec((err, data) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            console.log('mongo response to toggling a given comment', data);
            


        });

    // Comment.findOne({ id: id }, function(err, blog) {
    //     blog.hidden = !blog.hidden;
    //     blog.save(function(err, updatedBook) {
    //         if (err) {
    //             return res.json({
    //                 error: errorHandler(err)
    //             });
    //         }
    //         const emailData = {
    //             to: process.env.EMAIL_TO,
    //             from: email,
    //             subject: `Contact form - ${process.env.APP_NAME}`,
    //             text: `Email received from contact from \n Sender name: ${name} \n Sender email: ${email} \n Sender message: ${message}`,
    //             html: `
    //                 <h4>Email received from contact form:</h4>
    //                 <p>Sender name: ${name}</p>
    //                 <p>Sender email: ${email}</p>
    //                 <p>Sender message: ${message}</p>
    //                 <hr />
    //                 <p>${process.env.CLIENT_URL}</p>
    //             `
    //         };

    //         sgMail.send(emailData).then(sent => {
    //             console.log('email alert sent to ', )
    //         });
    //         res.json({
    //             message: 'Blog toggled successfully'
    //         });
    //     });
    // });
}

exports.listByUser = (req, res) => {
    console.log('req.body', req.body);
    let shopName = req.params.username ? req.params.username.toLowerCase() : '';
    console.log('shopName',shopName);
    Shop.findOne({shopify_domain: shopName}).exec((err, shop) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler(err)
            });
        }
        console.log('shop in mongo response', shop);
        let shopId = shop._id;
        Comment.find({ shopPostedAt: shopId })
            .sort({ createdAt: -1 })
            .populate('postedBy', 'name username')
            .select('_id body postedBy hidden createdAt updatedAt')
            .exec((err, data) => {
                if (err) {
                    return res.status(400).json({
                        error: errorHandler(err)
                    });
                }
                console.log('mongo response to fetching the comments of the given store', data);
                res.json(data);
            });
    });
};
