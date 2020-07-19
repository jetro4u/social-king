const proxyRoute = process.env.PROXY_ROUTE;
const backupShopIcon = "https://www.bongiorno.eu/assets/img/facebook/bongiorno.jpg";

exports.newsFeed = ({shop, blogs}) => {
    const showLoadedBlogs = () => {
        return blogs.map((blog, i) => `
                <div class="pure-u-1">
                    <div class="l-box community-card">
                        <a href="${proxyRoute}/user/${blog.postedBy.username}">
                            <img src="${blog.postedBy && blog.postedBy.cover_photo ? blog.postedBy.cover_photo : backupShopIcon}" class="community-user-icon" />
                            <div class="community-author">Posted by ${blog.postedBy.name}</div>
                         </a>
                        <h3><a href="${proxyRoute}/blog/${blog.slug}">${blog.title}</a></h3>
                        ${blog.coverMedia ? "<img src='"+blog.coverMedia+"'/>" : '<br/>'}
                        <p>${blog.excerpt}</p>
                        <div class="community-card-comments">3 comments</div>
                        <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?slug=${blog.slug}&email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/add-comment'>
                            <input type="text" class="community-instant-post" placeholder="Add Comment" />
                        </a>
                     </div>
                </div>
            `).join('');
    };

    return `
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
        `
};


