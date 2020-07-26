const { errorHandler } = require('../helpers/dbErrorHandler');

const multer = require('multer');
const path = require('path');
const slugify = require('slugify');

const proxyRoute = process.env.PROXY_ROUTE;

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    req.imageURL = slugify(req.shop.shopify_domain) + `-${Date.now()}` + path.extname(file.originalname);
    return cb(null,req.imageURL);
  }
});

const upload = multer({storage: storage, dest: path.join(__dirname,'../../public/uploads/')}).any();

exports.uploadPostImage = (req, res, next) => {
  console.log('upload route hit');
  console.log('req.shop',req.shop);
  upload(req, res, (err) => {
    if(err){
      res.send({
        msg: err
      });
    } else {
      console.log('uploaded succesfully')
      next();
      }
    });
}

exports.afterUpload = (req, res) => {
    let API_Endpoint = process.env.NODE_ENV == 'production' ? process.env.API_PRODUCTION : process.env.API_DEVELOPMENT;

    res.send({"success" : 1,
     "file": {
        "url" : `${API_Endpoint}/images/uploads/${req.imageURL}`            
      }
    });
}


exports.uploadImageURL = (req, res) => {
  res.setHeader('content-type', 'text/javascript')
  res.send({"success" : 1,
     "file": {
        "url" : req.body.url            
      }
  });    
}

exports.getImage = (req, res) => {
  console.log('image request',req.query);
  let fileExtension = req.params.file.split('.').pop();
  res.set('Content-Type', imageHeaders[fileExtension]).sendFile(path.join(__dirname, `../public/uploads/${req.params.file}`));
}

const imageHeaders = {
  apng: 'image/apng',
  bmp:  'image/bmp',
  gif: 'image/gif',
  ico: 'image/x-icon',
  cur:  'image/x-icon',
  jpg: 'image/jpeg',
  jpeg: 'image/jpeg',
  jfif: 'image/jpeg',
  pjpeg: 'image/jpeg',
  pjp:  'image/jpeg',
  png:  'image/png',
  svg:  'image/svg+xml',
  tif: 'image/tiff',
  tiff: 'image/tiff',
  webp: 'image/webp'  
}