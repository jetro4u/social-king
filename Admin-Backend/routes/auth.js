const express = require('express');
const router = express.Router();
const {
    showPaymentPage,
    checkSubscription
} = require('../controllers/auth');

router.post('/auth/check-subscription', checkSubscription);

module.exports = router;
