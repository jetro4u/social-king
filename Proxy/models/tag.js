const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema;

const tagSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true
        },
        slug: {
            type: String,
        },
        shop: { 
            type: String,
        }
    },
    { timestamps: true }
);

tagSchema.index({ slug: 1, shop: 1}, { unique: true });

module.exports = mongoose.model('Tag', tagSchema);