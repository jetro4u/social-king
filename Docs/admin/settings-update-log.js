 let data        = req.body.iconImg;
    let base64Data  =   data.replace(/^data:image\/png;base64,/, "");
    base64Data  +=  base64Data.replace('+', ' ');
    

    fs.writeFile(path.join(__dirname,'/f-file.jpg'), base64Data, {encoding: 'base64'}, function (err) {
        console.log(err); // writes out file without error, but it's not a valid image
    });


    // let image = Buffer.from(req.body.iconImg, 'base64');
    fs.writeFile(path.join(__dirname,'/g-file.jpg'), req.body.iconImg, {encoding: 'base64'}, function(err, result) {
     if(err) {
        console.log('error', err);
    } else {
        console.log('file saved successfully: ', result);
    }
   })

-------------------
 var base64Data = req.body.iconImg ? req.body.iconImg.replace(/^data:image\/png;base64,/, "") : false;


fs.writeFile(path.join(__dirname, "../../public/uploads/a.png"), base64Data, 'base64', function(err) {
          console.log(err);
        }); 

The URL that is loaded when loading an image into the BlogUpdate Component:
'https://jungle-navigator.myshopify.com/community/connect/images/uploads/Leesh-Kay-1594298895534.jpg'

Is the same as:
'https://amazonfashion.app/proxy/images/uploads/Leesh-Kay-1594298895534.jpg'



shopName jungle-navigator.myshopify.com
req.body.files {}
null
oldShop: {
  isActive: false,
  _id: 5f02a46de63ad235e47754c8,
  shopify_domain: 'jungle-navigator.myshopify.com',
  createdAt: 2020-07-06T04:11:25.617Z,
  updatedAt: 2020-07-13T13:15:33.774Z,
  __v: 0,
  nonce: 'GUKHYrfQx6qf9Y8nqPzhlk01azeV4CG4SFyKILszDHApmOocrrekM6tAst4OuG',
  backgroundColor: '99999999',
  communityName: "Bongiorno's Kitchen",
  primaryColor: '88888888888'
}
PUT /api/user/jungle-navigator.myshopify.com/update 200 142.384 ms - 356
ran publicProfile func in controller with req.body {}
shopName jungle-navigator.myshopify.com
GET /api/user/jungle-navigator.myshopify.com 304 90.990 ms - -
OPTIONS /api/user/jungle-navigator.myshopify.com/update 204 0.444 ms - 0
ran update func in user controller with req.body {
  files: [ {} ],
  iconImg: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/7QCcUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAIAcAigAYkZCTUQwMTAwMGFjMTAzMDAwMDJjMWMwMDAwOGU0YjAwMDA3ZDUyMDAwMDU3NTkwMDAwZDJhYjAwMDBjYmY3MDAwMDhhZmQwMDAwMTUwNjAxMDA3YzBlMDEwMDcyN2MwMTAwHAJnABRtSjB3dTJURHJrWVl3NEhPOURRbv/iAhxJQ0NfUFJPRklMRQABAQAAAgxsY21zAhAAAG1udHJSR0IgWFlaIAfcAAEAGQADACkAOWFjc3BBUFBMAAAAA