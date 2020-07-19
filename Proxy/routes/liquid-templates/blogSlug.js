const { header } = require('./components/header');
const { newsFeedCSS } = require('./css/newsFeedCSS');
const {renderBlocks} = require('./components/blog/renderBlocks');
const proxyRoute = process.env.PROXY_ROUTE;

exports.blogSlug = ({blog, shop, user, comments}) => {

    if(blog.hidden){
        console.log('this blog is hidden')
    } else{
        console.log('this blog is public')
    }

    const showAllTags = () => {
        return blog.tags.map((t, i) => `
            <a href="${proxyRoute}/tags/${t.slug}" key=${i}>
                <button class="tag-btn pure-button">${t.name}</button>
            </a><br />
        `).join('');
    };

    const showComments = () => {
        return comments.map((comment, i) => `
            <div class="community-pad-20 community-card">
                ${renderBlocks(comment)}
            </div>
        `).join('');
    };

    const showSelectedProducts = () => {
        return blog.selectedProducts.map((p, i) => `
            <div class="pure-u-1-4">
                <div class="community-pad-20">
                <a href="https://${shop.shopify_domain}/products/${p[0].handle}" key=${i} style="height:200px;display:block;text-align:center">
                    <img src="${p[0].images[0].originalSrc}" style="object-fit: cover;height:100%;" />
                </a>
                <div style="text-align:center;margin-top:15px;">
                    <a href="https://${shop.shopify_domain}/products/${p[0].handle}" key=${i} style="height:200px;display:block">
                        ${p[0].title}
                    </a>
                </div>
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
        <div class="pure-g">

            <div class="pure-u-3-4">
                <div class="community-pad-20 community-card">
                    ${renderBlocks(blog)}
               </div>
                ${comments.length>0 ? `<h3>Comments</h3>${showComments()}` : ''}
            </div>

            <div class="details pure-u-1-4">
                <div class="community-pad-20">
                    <div class="pb-5">
                        <h2>Contributed by</h2>
                    </div>
                    <div class="pure-g">
                    ${blog.postedBy.cover_photo ? "<div class='pure-u-1-4'><img src='"+blog.postedBy.cover_photo+"'/></div>" : ''}
                    <div class="pure-u-3-4">
                        <div class="community-pad-left-10">
                            <a href="${proxyRoute}/user/${blog.postedBy.username}" class='community-bold'>${blog.postedBy.name}</a><br />
                            ${user.about}
                            <br/>
                            <b>Store Favorites: </b>${user.storeFavorites}
                        </div>
                    </div>
                    </div>
                    <div class="pb-5">
                        <h2 style='margin-top:30px'>Related Tags</h2>
                        ${showAllTags()}
                    </div>
                </div>
            </div>

        </div>
        ${blog.selectedProducts.length>0 ? `<div class="pure-g">
                <div class="pure-u-5-5">
                    <div class="community-pad-20">
                        <h2>Related products</h2>
                        <div class="pure-g">
                            ${showSelectedProducts()}
                        </div>
                    </div>
                </div>
            </div>` : ''}
        </main>
        </div>`
};