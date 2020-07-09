const { navbar } = require('./navbar');
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
        <header class="community-header">
            <div class="community-header-title">
                <div class="page-width community-header-title-box">
                    <img src="https://styles.redditmedia.com/t5_2qiuc/styles/communityIcon_s6mblzvh8t051.png?width=256&s=851a80f05e1194ee216a999370fe45bdfd2b5010" class="community-icon" />
                    <div class="community-h2">Home Improvement Community</div>
                </div>
            </div>
        </header>
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