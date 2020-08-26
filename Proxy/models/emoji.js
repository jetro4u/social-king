const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const emojiSchema = new mongoose.Schema(
    {
        postSlug: {
            type: String,
            index: true
        },
        emoji: { 
            type: String
        },
        hidden: { 
            type: Boolean, 
            default: true 
        },
        postedBy: {
            type: ObjectId,
            ref: 'User'
        },
        shopPostedAt: { 
            type: ObjectId, 
            ref: 'Shop'
        },
        shopifyDomain: { 
            type: String
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model('Emoji', emojiSchema);
