const express = require('express');
const router = express.Router();
const brandController = require('../app/api/controllers/brand');
const path = require('path');
var multer = require("multer");
var fs = require("fs");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function(req, file, cb) {
      //cb(null, new Date().toISOString() + file.originalname);
      cb(null,file.originalname);
      //cb(null,  file.originalname);
    }
  });
 
  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };
 
  const upload = multer({
    storage: storage,
    limits: {
      fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});
//router.post('/',upload.single('file'), categoryController.create);
router.post('/', upload.single('file'),brandController.create);
router.get('/', brandController.getAll);
//router.get('/:productId', productController.getById);
router.post('/categorywise', brandController.getCategory);
router.get('/category', brandController.getBrands);


module.exports = router;