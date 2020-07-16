const { header } = require('./components/header');
const { newsFeedCSS } = require('./css/newsFeedCSS');
const proxyRoute = process.env.PROXY_ROUTE;

exports.blogSlug = ({blog, shop}) => {
    console.log('shop in blogslug func: ', shop);

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

    const showBlogContent = (blog) => {
        return `
            <div>${blog.body[0].blocks ? 
               blog.body[0].blocks.map((block, i) => {
                    switch(block.type) {
                        case 'paragraph':
                            return `<br/><p>${block.data.text}</p>`
                            break;
                        case 'image':
                            return `<br/><img src='${block.data.file.url}'/>
                                    <h6>${block.data.caption}</h6>`
                            break;
                        case 'header':
                            return `<br/><br/><h2>${block.data.text}</h2>`
                            break;
                        case 'list':
                            return `<br/><ul class='list-group'>
                                        ${block.data.items.map((item, i) => {
                                            return '<li class="list-group-item">'+item+'</li>'
                                        }).join('')}
                                    </ul>`
                            break;
                        case 'raw':
                            return `${block.data.html}`;
                            break;
                        case 'code':
                            return `<textarea disabled>${block.data.code}</textarea>
                               \n`;
                            break;
                        case 'warning':
                            return `
                                <table class="pure-table">
                                    <thead>
                                        <tr>
                                            <th>${block.data.title}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>${block.data.message}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            `
                            break;
                        case 'quote':
                            return `
                                <table class="pure-table">
                                    <thead>
                                        <tr>
                                            <th>${block.data.text}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>${block.data.caption}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            `
                            break;
                        case 'checklist':
                                return `<form class="pure-form">
                                     ${block.data.items.map((item, i) => {
                                            return '<label for="checkbox-radio-option-one" class="pure-checkbox"><input type="checkbox" id="checkbox-radio-option-one" '+ (item.checked ? 'checked' : '') +' />'+item.text+'</label>'  
                                     }).join('')}
                                </form>`
                            break;
                        case 'table':
                            return `<table style="width:100%">
                                     ${block.data.content.map((row, i) => {
                                           return "<tr>"+
                                             row.map((column, i) => {
                                                return '<th>'+ column + '</th>'
                                             }).join('')
                                              + "</tr>"
                                        }).join('')}
                                        </table>\n`;
                            break;
                        case 'delimiter':
                            return `\n<p>**************** This is a delimiter to separate between sections*************</p>\n`;
                            break;
                        case 'embed':
                            return `<iframe width='100%' 
                                        height='540' 
                                        src='${block.data.embed}' 
                                        frameborder="0" 
                                        allow="accelerometer; 
                                        autoplay; 
                                        encrypted-media; 
                                        gyroscope; 
                                        picture-in-picture" 
                                        allowfullscreen>
                                    </iframe>
                                    <h6>${block.data.caption}</h6>`
                        default:
                            return `<p>${block}</p>`
                        }
               }).join('') 
             : ''}
            </div>
        `
    }

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
                    ${showBlogContent(blog)}
               </div>
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
                            ${blog.postedBy.about}
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
        <div class="pure-g">
            <div class="pure-u-5-5">
                <div class="community-pad-20">
                    <h2>Related products</h2>
                    <div class="pure-g">
                        ${showSelectedProducts()}
                    </div>
                </div>
            </div>
        </div>
        </main>
        </div>
        <script>
            console.log('blog object: ', ${JSON.stringify(blog)});
        </script>`
};