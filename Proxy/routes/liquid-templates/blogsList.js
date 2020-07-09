const { header } = require('./components/header');
const { navbar } = require('./components/navbar');
const { newsFeedCSS } = require('./css/newsFeedCSS');

exports.blogsList = ({ shop, blogs, categories, tags, size }) => {
    const proxyRoute = process.env.PROXY_ROUTE;
    
    const showLoadedBlogs = () => {
        return blogs.map((blog, i) => `
                <div class="pure-u-1">
                    <div class="l-box community-card">
                        <div class="community-author">Posted by ${blog.postedBy.username}</div>
                        <h3><a href="${proxyRoute}/blog/${blog.slug}">${blog.title}</a></h3>
                        Image Goes Here
                        <p>${blog.mdesc}</p>
                        <div class="community-card-comments">3 comments</div>
                     </div>
                </div>
            `).join('');
    };

    return `
        <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
        <style type="text/css">
            ${newsFeedCSS(shop)}
        </style>
        ${header({shop})}
        <div class="community-background">
            <main class="page-width">
                <div class="pure-g">
                    <div class="pure-u-2-3">
                        <div class="community-pad-20">
                            <div class="community-card">
                                <div class="community-card-body">
                                    <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}'>
                                        <input type="text" class="community-instant-post" placeholder="Create Post" />
                                    </a>
                                
                                </div>
                            </div>
                            <div class="pure-g">${showLoadedBlogs()}</div>
                        </div>
                    </div>
                    ${navbar({shop, tags})}
                </div>
            </main>
        </div>
        <script>
            console.log('injected script from server ran');
        </script>
        `
};