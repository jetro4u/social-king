const { navbar } = require('./navbar');
const { newsFeedCSS } = require('./css/newsFeedCSS');

exports.tagSlug = ({ shop, tags, tag, blogs, size}) => {
    const proxyRoute = process.env.PROXY_ROUTE;

    const showLoadedBlogs = () => {
        return blogs.map((blog, i) => `
                <div class="col-md-4 pt-3">
                    <h3><a href="${proxyRoute}/blog/${blog.slug}">${blog.title}</a></h3>
                    Image Goes Here
                    <p>${blog.mdesc}</p>
                </div>
            `).join('');
    };

    return `
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
        <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
        <main>
            <div class="container-fluid">
                <header>
                    <div class="col-md-12 pt-3">
                        <h1 class="display-4 font-weight-bold text-center">
                            ${tag.name}
                        </h1>
                    </div>
                    
                </header>
            </div>
            <div class="row">${showLoadedBlogs()}</div>
        </main>
        ${navbar({shop, tags})}
        <script>
            console.log('injected script from server ran');
        </script>
        <style type="text/css">
            ${newsFeedCSS(shop)}
        </style>
        `
};