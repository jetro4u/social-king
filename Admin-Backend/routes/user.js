const express = require('express');
const router = express.Router();
const { requireSignin, authMiddleware, adminMiddleware } = require('../controllers/auth');
const { settingsPage, read, publicProfile, update, 
	updateModeration, photo } = require('../controllers/user');

//For Settings Page
// router.get('/user/:username/', read);

router.get('/user/:username', settingsPage);
router.get('/user/photo/:username', photo);

router.put('/user/:username/update', update);
router.put('/user/:username/update-moderation', updateModeration);

module.exports = router;
