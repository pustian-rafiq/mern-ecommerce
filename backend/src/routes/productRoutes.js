const router = require('express').Router();
const { createProductController } = require('../controllers/productController');
const { adminMiddleware } = require('../middleware/verifyAuthentication');
const verify = require('../middleware/verifyToken');
const multer = require('multer')
const { nanoid } = require('nanoid')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(path.dirname(__dirname), 'uploads' ))
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, nanoid(10)+'-'+file.originalname)
    }
  })

  const upload = multer({storage})

  // For uploading single file use single and for multiple file we use array
router.post('/product/create',verify, upload.array('productPicture') ,adminMiddleware,createProductController);
// router.get('/category/all',getAllCategories);



module.exports = router