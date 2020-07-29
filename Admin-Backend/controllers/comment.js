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
        .select('_id postedBy shopifyDomain postSlug hidden userNotified createdAt updatedAt')
        .exec((err, comment) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler(err)
                });
            }
            console.log('mongo response to toggling a given comment', comment);
            
            comment.hidden = !comment.hidden;
            comment.save(function(err, updatedComment) {
                if (err) {
                    return res.json({
                        error: errorHandler(err)
                    });
                }
                if(comment.userNotified!=true){
                    let name = comment.postedBy.name ? comment.postedBy.name.split(' ')[0] : 'you';
                    const emailData = {
                        to: comment.postedBy.email,
                        from: 'help@socialking.app',
                        subject: `Your comment has been approved`,
                        text: `Hey ${name}, \n Congrats, your comment has been approved`,
                        html: `
                            <h4>Hey ${name},</h4>
                            <p>Congrats, your comment has been approved and is <a href='https://${comment.shopifyDomain}/community/connect/blog/${comment.postSlug}'>available here</a></p>
                            <hr />
                        `
                    };

                    sgMail.send(emailData).then(sent => {
                        console.log('email alert sent to ', comment.postedBy.email)
                        comment.userNotified = true;
                        comment.save(function(err, userNotifiedComment) {
                            if (err) {
                                console.log('error updating db that the user has been notified via email');
                            }
                        })
                    })
                }

                res.json({
                    message: 'Blog toggled successfully'
                });
            });

        });
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
            .select('_id shopifyDomain postSlug body postedBy hidden createdAt updatedAt')
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
