const { header } = require('./components/header');
const { newsFeedCSS } = require('./css/newsFeedCSS');
const {renderBlocks} = require('./components/blog/renderBlocks');
const proxyRoute = process.env.PROXY_ROUTE;
const {translations} = require('../helpers/translations')

exports.blogSlug = ({blog, shop, user, comments}) => {

    if(blog.hidden){
        console.log('this blog is hidden')
    } else{
        console.log('this blog is public')
    }

    const showAllTags = () => {
        if(blog.tags.length>0){
          return blog.tags.map((t, i) => `
                    <a href="${proxyRoute}/tags/${t.slug}" key=${i}>
                        <button class="tag-btn pure-button">${t.name}</button>
                    </a><br />
                `).join('');        
        } else {
           return '' 
        }
    };

    const showComments = () => {
        return comments.map((comment, i) => `
            <div class="community-admin-padding community-card">
                <a href="${proxyRoute}/user/${comment.postedBy.username}">
                    <img src="${comment.postedBy && comment.postedBy.cover_photo ? comment.postedBy.cover_photo : backupShopIcon}" class="community-user-icon" />
                    <div class="community-author">${translations['PostedBy'][shop ? shop.language : 'English']} ${comment.postedBy.name}</div>
                 </a>

                ${renderBlocks(comment)}
            </div>
        `).join('');
    };

    const showSelectedProducts = () => {
        return blog.selectedProducts.map((p, i) => `
            <div class="pure-u-1-4">
                <a href="https://${shop.shopify_domain}/products/${p[0].handle}?utm_source=social-king&utm_medium=${blog.slug}" key=${i} style="height:200px;display:block;text-align:center">
                    <img src="${p[0].images[0].originalSrc}" style="object-fit: cover;height:100%;" />
                </a>
                <div style="text-align:center;margin-top:15px;">
                    <a href="https://${shop.shopify_domain}/products/${p[0].handle}?utm_source=social-king&utm_medium=${blog.slug}" key=${i} style="display:block">
                        ${p[0].title}
                    </a>
                </div>
            </div>
        `).join('');
    };

    return `
        <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
        <style type="text/css">
            ${newsFeedCSS({shop})}
        </style>
        ${header({blog, shop})}    
        <div class="community-background">
            <main class="page-width">
                <div class="community-pad-20 community-post-body pure-g">
                    <div class="details pure-u-md-1-4 pure-u-sm-1"> 
                        <div class="">
                         <div class="community-card community-card-navbar">
                            <div class="pb-5">
                                <h2>${translations['ContributedBy'][shop ? shop.language : 'English']}</h2>
                            </div>
                            <div class="pure-g">
                            ${blog.postedBy.cover_photo ? "<div class='pure-u-1-4'><img width='100%' src='"+blog.postedBy.cover_photo+"'/></div>" : ''}
                                <div class="pure-u-3-4">
                                    <div class="community-pad-left-10">
                                        <a href="${proxyRoute}/user/${blog.postedBy.username}" class='community-bold'>${blog.postedBy.name}</a><br />
                                        ${user.about}
                                        <br/>
                                        <b>${translations['StoreFavorites'][shop ? shop.language : 'English']}: </b>${user.storeFavorites}
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>

                    <div class="pure-u-md-3-4 pure-u-sm-1"> 
                        <div class='community-admin-padding community-card'>
                            ${renderBlocks(blog)}
                       </div>
                        <div class="community-card">
                          ${comments.length>0 ? `<h3>Comments</h3>${showComments()}` : ''} 
                        </div>
                        <div class="community-card">
                            <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?slug=${blog.slug}&email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/add-comment'>
                                <input type="text" class="community-instant-post" placeholder="${translations['AddComment'][shop ? shop.language : 'English']}" />
                            </a>
                        </div>
                    </div>                
                </div>
                    
                ${blog.selectedProducts.length>0 ? `<div class="pure-g">
                        <div class="pure-u-md-5-5 pure-u-sm-1">
                            <div class="community-pad-20">
                                  <h2 class="community-letter-spacing" style='margin-top:30px'>${translations['RelatedProducts'][shop ? shop.language : 'English']}</h2>
                                  ${showSelectedProducts()}
                            </div>
                        </div>
                    </div>` : ''}

                
                    <div class='community-admin-padding community-card'>
                        <div style='margin-top:30px'>
                            <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}&#/settings'><button class="pure-button pure-button-primary community-full-width">${translations['SignUp'][shop ? shop.language : 'English']}</button></a>
                            <br>
                            <br>
                            <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}'><button class="pure-button pure-button-primary community-full-width">${translations['Settings'][shop ? shop.language : 'English']}</button></a>
                        </div>
                        <div class="pb-5">
                            ${blog.tags.length>0? `<h2 style='margin-top:30px'>${translations['RelatedTags'][shop ? shop.language : 'English']}</h2>`:''}
                              ${showAllTags()}
                        </div>
                    </div>
            </main>
        </div>`
};