const express = require('express');
const router = express.Router();
const {
    create,
    list,
    listAllBlogsCategoriesTags,
    read,
    remove,
    toggle,
    update,
    photo,
    listRelated,
    listSearch,
    listByUser
} = require('../controllers/blog');

const { isValidShopifyRequest, requireSignin, adminMiddleware, authMiddleware, canUpdateDeleteBlog } = require('../controllers/auth');

//
//Actually Being Used in Shopify Admin App
//

router.delete('/blog/:domain/:slug', remove);
router.put('/blog/toggle/:domain/:slug', toggle);
router.get('/:username/blogs', listByUser);

//for BlogUpdate Component
router.get('/blog/:domain/:slug', read);
router.put('/blog/:slug', update);


module.exports = router;
