const express = require('express');
const router = express.Router();
const {
	uploadPostImage, 
	afterUpload,
	uploadImageURL,
	getImage
} = require('../controllers/image');
const { isValidShopifyRequest, requireSignin, adminMiddleware } = require('../controllers/auth');

//admin image upload from blogUpdate Page
router.post('/upload-post-image', adminMiddleware, uploadPostImage, afterUpload);
router.post('/upload-image-url', uploadImageURL);
router.get('/images/uploads/:file', getImage);

module.exports = router;
