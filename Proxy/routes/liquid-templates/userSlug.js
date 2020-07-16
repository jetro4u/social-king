const { header } = require('./components/header');
const { newsFeed } = require('./components/newsFeed');
const { navbar } = require('./components/navbar');
const { newsFeedCSS } = require('./css/newsFeedCSS');
const proxyRoute = process.env.PROXY_ROUTE;

exports.userSlug = ({user, blogs, shop}) => {

    const showUserBlogs = () => {
        return blogs.map((blog, i) => `           
            <div class="mt-4 mb-4" key={i}>
                <a href="${proxyRoute}/blog/${blog.slug}">
                    <span class="lead">${blog.title}</a>
                </a>
            </div>
        `).join('');
    };

    return `
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
        <style type="text/css">
            ${newsFeedCSS({shop})}
        </style>
        ${header({user, shop})}
        <div class="community-background">
            <main class="page-width">
                <div class="pure-g">
                    ${newsFeed({shop, blogs})}
                    ${navbar({shop, user})}
                </div>
            </main>
        </div>
    
        <script>
            console.log('injected script from server ran');
        </script>`
};