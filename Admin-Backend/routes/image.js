const express = require('express');
const router = express.Router();

const { uploadProfileImage, uploadPostImage, afterUpload, uploadImageURL, getImage, getProfilePhoto } = require('../proxy-controllers/image');

router.post('/upload-profile-photo', uploadProfileImage, afterUpload);
router.get('/get-profile-photo', getProfilePhoto);

router.post('/upload', uploadPostImage, afterUpload);
router.post('/upload-image-url', uploadImageURL);
router.get('/images/uploads/:file', getImage);

module.exports = router; 
