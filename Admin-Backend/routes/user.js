const express = require('express');
const router = express.Router();
const { requireSignin, authMiddleware, adminMiddleware } = require('../controllers/auth');
const { read, publicProfile, update, photo } = require('../controllers/user');

//For Settings Page
// router.get('/user/:username/', read);

router.get('/user/:username', publicProfile);
router.put('/user/update', update);
router.get('/user/photo/:username', photo);

module.exports = router;
