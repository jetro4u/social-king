const express = require('express');
const router = express.Router();
const {
    remove,
    toggle,
    listByUser
} = require('../controllers/comment');

const { isValidShopifyRequest, requireSignin, adminMiddleware, authMiddleware, canUpdateDeleteBlog } = require('../controllers/auth');

//
//Actually Being Used in Shopify Admin App
//

router.delete('/comment/:id', remove);
router.put('/comment/toggle/:id', toggle);
router.get('/:username/comments', listByUser);

//for BlogUpdate Component
// router.get('/blog/:slug', read);
// router.put('/blog/:slug', update);


module.exports = router;
