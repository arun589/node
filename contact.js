const express = require('express');
const path=require('path');
const router = express.Router();
const rootDir=require('../util/path');


router.get('/contact', (req, res, next) => {
  res.sendFile(path.join(rootDir,'views','contact.html')
  );
})

router.post('/success', (req, res, next) => {
  console.log(req.body);
  res.send('<h1>form succesfully filled');
  
});

module.exports = router;
