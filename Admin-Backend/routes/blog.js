const express = require('express');
const router = express.Router();
const {
    create,
    list,
    listForSitemap,
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

router.get('/urls-for-sitemap', listForSitemap);

//
//Actually Being Used in Shopify Admin App
//

router.delete('/blog/:slug', remove);
router.put('/blog/toggle/:slug', toggle);
router.get('/:username/blogs', listByUser);

//for BlogUpdate Component
router.get('/blog/:slug', read);
router.put('/blog/:slug', update);

module.exports = router;
