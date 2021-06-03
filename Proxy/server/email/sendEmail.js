const { newPost } = require('./templates/newEmail')
const { newComment } = require('./templates/newComment')
const { commentedOnYourPost } = require('./templates/commentedOnYourPost')
const { alsoCommented } = require('./templates/commentedOnYourPost')

exports.sendEmail = (str) => {
  const emailData = {
    to: shop && shop._doc && shop._doc.extraShopifyData && shop._doc.extraShopifyData[0] && shop._doc.extraShopifyData[0].email ? shop._doc.extraShopifyData[0].email : 'kramer1346@gmail.com',
    from: 'help@socialking.app',
    subject: `Review A New Community Post!`,
    text: `Hey ${storeAdminName}, \n Looks like a new post has been submitted via your Community Network`,
    html: `
        <h4>Hey ${storeAdminName},</h4>
        <p>A New Customer Post has been Submitted and is <a href='https://${blog.shopifyDomain}/admin/apps/${appSlug}/manage/manage-posts'>pending review here</a></p>
        <hr />
    `
  };

  console.log('emailData in Sendgrid Email Notification Function', emailData);

  sgMail.send(emailData).then(sent => {
      console.log('email alert sent to ', req.query.shop)
  })
}