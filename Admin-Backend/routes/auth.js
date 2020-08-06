const express = require('express');
const router = express.Router();
const {
    showPaymentPage,
    recordCharge
} = require('../controllers/auth');

router.post('/auth/record-charge', recordCharge);

module.exports = router;
