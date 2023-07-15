const express = require('express');
const path=require('path');
const router = express.Router();
const contact=require('../controller/product');


router.get('/contact', contact.getcontact)

router.post('/success',contact.postcontact);

module.exports = router;
