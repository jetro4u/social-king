const sgMail = require('@sendgrid/mail'); // SENDGRID_API_KEY
sgMail.setApiKey(process.env.SENDGRID_API_KEY);


let name = blog.postedBy.name ? blog.postedBy.name.split(' ')[0] : 'you';
const emailData = {
    to: blog.postedBy.email,
    from: 'help@socialking.app',
    subject: `Your post has been approved`,
    text: `Hey ${name}, \n Congrats, your post has been approved`,
    html: `
        <h4>Hey ${name},</h4>
        <p>Congrats, your post has been approved and is <a href='https://${blog.shopifyDomain}/community/connect/blog/${blog.slug}'>available here</a></p>
        <hr />
    `
};

sgMail.send(emailData).then(sent => {
    console.log('email alert sent to ', blog.postedBy.email)
    blog.userNotified = true;
    blog.save(function(err, userNotifiedComment) {
        if (err) {
            console.log('error updating db that the user has been notified via email');
        }
    })
})