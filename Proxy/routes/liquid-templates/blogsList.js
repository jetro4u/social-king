const { header } = require('./components/header');
const { navbar } = require('./components/navbar');
const { newsFeed } = require('./components/newsFeed');
const { newsFeedCSS } = require('./css/newsFeedCSS');

exports.blogsList = ({ shop, blogs, tags, size }) => {
    const proxyRoute = process.env.PROXY_ROUTE;

    return `

<link rel="stylesheet" id="wp-block-library-css" href="https://avie-studio.com/wp-includes/css/dist/block-library/style.min.css" type="text/css" media="all">
<link rel="stylesheet" id="wc-block-vendors-style-css" href="https://avie-studio.com/wp-content/plugins/woo-gutenberg-products-block/build/vendors-style.css" type="text/css" media="all">
<link rel="stylesheet" id="wc-block-style-css" href="https://avie-studio.com/wp-content/plugins/woo-gutenberg-products-block/build/style.css" type="text/css" media="all">
<link rel="stylesheet" id="woocommerce-layout-css" href="https://avie-studio.com/wp-content/plugins/woocommerce/assets/css/woocommerce-layout.css" type="text/css" media="all">
<link rel="stylesheet" id="woocommerce-smallscreen-css" href="https://avie-studio.com/wp-content/plugins/woocommerce/assets/css/woocommerce-smallscreen.css" type="text/css" media="only screen and (max-width: 768px)">
<link rel="stylesheet" id="woocommerce-general-css" href="https://avie-studio.com/wp-content/plugins/woocommerce/assets/css/woocommerce.css" type="text/css" media="all">
<link rel="stylesheet" id="hello-elementor-css" href="https://avie-studio.com/wp-content/themes/hello-elementor/style.min.css" type="text/css" media="all">
<link rel="stylesheet" id="hello-elementor-theme-style-css" href="https://avie-studio.com/wp-content/themes/hello-elementor/theme.min.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-icons-css" href="https://avie-studio.com/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-animations-css" href="https://avie-studio.com/wp-content/plugins/elementor/assets/lib/animations/animations.min.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-frontend-legacy-css" href="https://avie-studio.com/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-frontend-css" href="https://avie-studio.com/wp-content/plugins/elementor/assets/css/frontend.min.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-15610-css" href="https://avie-studio.com/wp-content/uploads/elementor/css/post-15610.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-pro-css" href="https://avie-studio.com/wp-content/plugins/elementor-pro/assets/css/frontend.min.css" type="text/css" media="all">
<link rel="stylesheet" id="font-awesome-5-all-css" href="https://avie-studio.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/all.min.css" type="text/css" media="all">
<link rel="stylesheet" id="font-awesome-4-shim-css" href="https://avie-studio.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/v4-shims.min.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-global-css" href="https://avie-studio.com/wp-content/uploads/elementor/css/global.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-41-css" href="https://avie-studio.com/wp-content/uploads/elementor/css/post-41.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-15598-css" href="https://avie-studio.com/wp-content/uploads/elementor/css/post-15598.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-15637-css" href="https://avie-studio.com/wp-content/uploads/elementor/css/post-15637.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-15744-css" href="https://avie-studio.com/wp-content/uploads/elementor/css/post-15744.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-post-15306-css" href="https://avie-studio.com/wp-content/uploads/elementor/css/post-15306.css" type="text/css" media="all">
<link rel="stylesheet" id="google-fonts-1-css" href="https://fonts.googleapis.com/css?family=Pragati+Narrow%3A100%2C100italic%2C200%2C200italic%2C300%2C300italic%2C400%2C400italic%2C500%2C500italic%2C600%2C600italic%2C700%2C700italic%2C800%2C800italic%2C900%2C900italic&amp;ver=5.6" type="text/css" media="all">
<link rel="stylesheet" id="elementor-icons-shared-0-css" href="https://avie-studio.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/fontawesome.min.css" type="text/css" media="all">
<link rel="stylesheet" id="elementor-icons-fa-brands-css" href="https://avie-studio.com/wp-content/plugins/elementor/assets/lib/font-awesome/css/brands.min.css" type="text/css" media="all">

        <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/pure-min.css" integrity="sha384-cg6SkqEOCV1NbJoCu11+bm0NvBRc8IYLRGXkmNrqUBfTjmMYwNKPWBTIKyw9mHNJ" crossorigin="anonymous">
        <style type="text/css">
            ${newsFeedCSS({shop})}
        </style>
        ${header({shop})}
        <div class="community-background">
            <main class="page-width">
                <div class="pure-g">
                    ${newsFeed({shop, blogs})}
                    ${navbar({shop, tags})}
                </div>
            </main>
        </div>
        <section class="elementor-section elementor-top-section elementor-element elementor-element-5f03925 elementor-section-boxed elementor-section-height-default elementor-section-height-default" data-id="5f03925" data-element_type="section">
                        <div class="elementor-container elementor-column-gap-default">
                            <div class="elementor-row">
                    <div class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-ac25549" data-id="ac25549" data-element_type="column">
            <div class="elementor-column-wrap elementor-element-populated">
                            <div class="elementor-widget-wrap">
                        <div class="elementor-element elementor-element-885cc0f elementor-grid-tablet-3 elementor-posts--align-left elementor-grid-3 elementor-grid-mobile-1 elementor-posts--thumbnail-top elementor-posts--show-avatar elementor-card-shadow-yes elementor-posts__hover-gradient elementor-widget elementor-widget-posts" data-id="885cc0f" data-element_type="widget" data-settings="{&quot;cards_masonry&quot;:&quot;yes&quot;,&quot;cards_columns_tablet&quot;:&quot;3&quot;,&quot;cards_columns&quot;:&quot;3&quot;,&quot;cards_columns_mobile&quot;:&quot;1&quot;,&quot;cards_row_gap&quot;:{&quot;unit&quot;:&quot;px&quot;,&quot;size&quot;:35,&quot;sizes&quot;:[]}}" data-widget_type="posts.cards">
                <div class="elementor-widget-container">
                    <div class="elementor-posts-container elementor-posts elementor-posts--skin-cards elementor-grid elementor-posts-masonry">
                <article class="elementor-post elementor-grid-item post-15193 post type-post status-publish format-standard has-post-thumbnail hentry category-insider tag-retail tag-sunshine">
            <div class="elementor-post__card">
                <a class="elementor-post__thumbnail__link" href="https://avie-studio.com/sunshine-simplicities/">
            <div class="elementor-post__thumbnail"><img width="300" height="169" alt="" loading="lazy" data-srcset="https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-300x169.jpg 300w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-400x225.jpg 400w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-1024x575.jpg 1024w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-768x432.jpg 768w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet.jpg 1180w" data-src="https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-300x169.jpg" data-sizes="(max-width: 300px) 100vw, 300px" class="attachment-medium size-medium ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-300x169.jpg" sizes="(max-width: 300px) 100vw, 300px" srcset="https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-300x169.jpg 300w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-400x225.jpg 400w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-1024x575.jpg 1024w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-768x432.jpg 768w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet.jpg 1180w"><noscript><img width="300" height="169" src="https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-300x169.jpg" class="attachment-medium size-medium" alt="" loading="lazy" srcset="https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-300x169.jpg 300w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-400x225.jpg 400w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-1024x575.jpg 1024w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet-768x432.jpg 768w, https://avie-studio.com/wp-content/uploads/2020/05/Knutsford-Highstreet.jpg 1180w" sizes="(max-width: 300px) 100vw, 300px" /></noscript></div>
        </a>
                <div class="elementor-post__badge">Insider</div>
                <div class="elementor-post__avatar">
            <img loading="lazy" width="84" height="105" alt="Liam Nathan Byrne" data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg"><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" width="84" height="105" alt="Liam Nathan Byrne" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo" /></noscript>       </div>
                <div class="elementor-post__text">
                <h3 class="elementor-post__title">
            <a href="https://avie-studio.com/sunshine-simplicities/">
                Sunshine &amp; Simplicities         </a>
        </h3>
                <div class="elementor-post__excerpt">
            <p>With a new outlook on life and its beautiful simplicities, it could be the perfect time to put down those phones, laptops, mini-series and go for a walk in the sunshine and visit the local independent boutiques.</p>
        </div>
                    <a class="elementor-post__read-more" href="https://avie-studio.com/sunshine-simplicities/">
                Read More »         </a>
                </div>
                <div class="elementor-post__meta-data">
                    <span class="elementor-post-date">
            28th May 2020       </span>
                <span class="elementor-post-avatar">
            No Comments     </span>
                </div>
                    </div>
        </article>
                <article class="elementor-post elementor-grid-item post-15178 post type-post status-publish format-standard has-post-thumbnail hentry category-insider tag-covid tag-fashion">
            <div class="elementor-post__card">
                <a class="elementor-post__thumbnail__link" href="https://avie-studio.com/avie-covid-and-the-future-of-fashion/">
            <div class="elementor-post__thumbnail"><img width="200" height="300" alt="Aphrodite Dress" loading="lazy" data-srcset="https://avie-studio.com/wp-content/uploads/2020/04/Aphrodite_Dress_2-200x300.jpg 200w, https://avie-studio.com/wp-content/uploads/2020/04/Aphrodite_Dress_2.jpg 400w" data-src="https://avie-studio.com/wp-content/uploads/2020/04/Aphrodite_Dress_2-200x300.jpg" data-sizes="(max-width: 200px) 100vw, 200px" class="attachment-medium size-medium ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2020/04/Aphrodite_Dress_2-200x300.jpg" sizes="(max-width: 200px) 100vw, 200px" srcset="https://avie-studio.com/wp-content/uploads/2020/04/Aphrodite_Dress_2-200x300.jpg 200w, https://avie-studio.com/wp-content/uploads/2020/04/Aphrodite_Dress_2.jpg 400w"><noscript><img width="200" height="300" src="https://avie-studio.com/wp-content/uploads/2020/04/Aphrodite_Dress_2-200x300.jpg" class="attachment-medium size-medium" alt="Aphrodite Dress" loading="lazy" srcset="https://avie-studio.com/wp-content/uploads/2020/04/Aphrodite_Dress_2-200x300.jpg 200w, https://avie-studio.com/wp-content/uploads/2020/04/Aphrodite_Dress_2.jpg 400w" sizes="(max-width: 200px) 100vw, 200px" /></noscript></div>
        </a>
                <div class="elementor-post__badge">Insider</div>
                <div class="elementor-post__avatar">
            <img loading="lazy" width="84" height="126" alt="Sonya Bachra-Byrne" data-src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg"><noscript><img loading="lazy"  width="84" height="126" alt="Sonya Bachra-Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="126" alt="Sonya Bachra-Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy" src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" width="84" height="126" alt="Sonya Bachra-Byrne" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo" /></noscript>      </div>
                <div class="elementor-post__text">
                <h3 class="elementor-post__title">
            <a href="https://avie-studio.com/avie-covid-and-the-future-of-fashion/">
                AVIE, Covid &amp; the Future of Fashion         </a>
        </h3>
                <div class="elementor-post__excerpt">
            <p>As you all know, we believe in ‘Slow Fashion’, focusing on creating stylish pieces, rather than following seasonal fashion trends. Is it possible that the industry could follow suit? </p>
        </div>
                    <a class="elementor-post__read-more" href="https://avie-studio.com/avie-covid-and-the-future-of-fashion/">
                Read More »         </a>
                </div>
                <div class="elementor-post__meta-data">
                    <span class="elementor-post-date">
            13th May 2020       </span>
                <span class="elementor-post-avatar">
            No Comments     </span>
                </div>
                    </div>
        </article>
                <article class="elementor-post elementor-grid-item post-15093 post type-post status-publish format-standard has-post-thumbnail hentry category-spotlight-interview tag-cooper-king tag-support-local-business tag-whiskey">
            <div class="elementor-post__card">
                <a class="elementor-post__thumbnail__link" href="https://avie-studio.com/time-to-think-local/">
            <div class="elementor-post__thumbnail"><img width="240" height="300" alt="Time to Think Local" loading="lazy" data-srcset="https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-240x300.jpg 240w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-400x500.jpg 400w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-819x1024.jpg 819w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-768x960.jpg 768w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1.jpg 1080w" data-src="https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-240x300.jpg" data-sizes="(max-width: 240px) 100vw, 240px" class="attachment-medium size-medium ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-240x300.jpg" sizes="(max-width: 240px) 100vw, 240px" srcset="https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-240x300.jpg 240w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-400x500.jpg 400w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-819x1024.jpg 819w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-768x960.jpg 768w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1.jpg 1080w"><noscript><img width="240" height="300" src="https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-240x300.jpg" class="attachment-medium size-medium" alt="Time to Think Local" loading="lazy" srcset="https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-240x300.jpg 240w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-400x500.jpg 400w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-819x1024.jpg 819w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1-768x960.jpg 768w, https://avie-studio.com/wp-content/uploads/2020/04/Cooper_King_1-1.jpg 1080w" sizes="(max-width: 240px) 100vw, 240px" /></noscript></div>
        </a>
                <div class="elementor-post__badge">Spotlight Interview</div>
                <div class="elementor-post__avatar">
            <img loading="lazy" width="84" height="105" alt="Liam Nathan Byrne" data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg"><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" width="84" height="105" alt="Liam Nathan Byrne" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo" /></noscript>       </div>
                <div class="elementor-post__text">
                <h3 class="elementor-post__title">
            <a href="https://avie-studio.com/time-to-think-local/">
                Time to Think Local         </a>
        </h3>
                <div class="elementor-post__excerpt">
            <p>As we all</p>
        </div>
                    <a class="elementor-post__read-more" href="https://avie-studio.com/time-to-think-local/">
                Read More »         </a>
                </div>
                <div class="elementor-post__meta-data">
                    <span class="elementor-post-date">
            21st April 2020     </span>
                <span class="elementor-post-avatar">
            No Comments     </span>
                </div>
                    </div>
        </article>
                <article class="elementor-post elementor-grid-item post-14911 post type-post status-publish format-standard has-post-thumbnail hentry category-insider tag-91 tag-paris-fashion-week" style="margin-top: -308.396px;">
            <div class="elementor-post__card">
                <a class="elementor-post__thumbnail__link" href="https://avie-studio.com/a-collection-of-creatives/">
            <div class="elementor-post__thumbnail"><img width="240" height="300" alt="A collection of creatives. model in a stunning dress" loading="lazy" data-srcset="https://avie-studio.com/wp-content/uploads/2020/04/Paris-2-1350pxBW.jpg 1333w, https://avie-studio.com/wp-content/uploads/2020/04/Paris-2-1350pxBW-400x500.jpg 400w" data-src="https://avie-studio.com/wp-content/uploads/2020/04/Paris-2-1350pxBW.jpg" data-sizes="(max-width: 240px) 100vw, 240px" class="attachment-medium size-medium ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2020/04/Paris-2-1350pxBW.jpg" sizes="(max-width: 240px) 100vw, 240px" srcset="https://avie-studio.com/wp-content/uploads/2020/04/Paris-2-1350pxBW.jpg 1333w, https://avie-studio.com/wp-content/uploads/2020/04/Paris-2-1350pxBW-400x500.jpg 400w"><noscript><img width="240" height="300" src="https://avie-studio.com/wp-content/uploads/2020/04/Paris-2-1350pxBW.jpg" class="attachment-medium size-medium" alt="A collection of creatives. model in a stunning dress" loading="lazy" srcset="https://avie-studio.com/wp-content/uploads/2020/04/Paris-2-1350pxBW.jpg 1333w, https://avie-studio.com/wp-content/uploads/2020/04/Paris-2-1350pxBW-400x500.jpg 400w" sizes="(max-width: 240px) 100vw, 240px" /></noscript></div>
        </a>
                <div class="elementor-post__badge">Insider</div>
                <div class="elementor-post__avatar">
            <img loading="lazy" width="84" height="105" alt="Liam Nathan Byrne" data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg"><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" width="84" height="105" alt="Liam Nathan Byrne" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo" /></noscript>       </div>
                <div class="elementor-post__text">
                <h3 class="elementor-post__title">
            <a href="https://avie-studio.com/a-collection-of-creatives/">
                A Collection of Creatives           </a>
        </h3>
                <div class="elementor-post__excerpt">
            <p>A collection of creatives, spectacular city &amp; a plethora of events. </p>
        </div>
                    <a class="elementor-post__read-more" href="https://avie-studio.com/a-collection-of-creatives/">
                Read More »         </a>
                </div>
                <div class="elementor-post__meta-data">
                    <span class="elementor-post-date">
            8th April 2020      </span>
                <span class="elementor-post-avatar">
            No Comments     </span>
                </div>
                    </div>
        </article>
                <article class="elementor-post elementor-grid-item post-8150 post type-post status-publish format-standard has-post-thumbnail hentry category-insider" style="margin-top: 0px;">
            <div class="elementor-post__card">
                <a class="elementor-post__thumbnail__link" href="https://avie-studio.com/luxury-slow-fashion-a-lifestyle-not-a-trend/">
            <div class="elementor-post__thumbnail"><img width="300" height="200" alt="AVIE founders Sonya &amp; Liam in a warm cosy bar celebrating an evening away from work and luxury slow fashion" loading="lazy" data-srcset="https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-1024x682.jpg 1024w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam.jpg 1280w" data-src="https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-300x200.jpg" data-sizes="(max-width: 300px) 100vw, 300px" class="attachment-medium size-medium ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-300x200.jpg" sizes="(max-width: 300px) 100vw, 300px" srcset="https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-1024x682.jpg 1024w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam.jpg 1280w"><noscript><img width="300" height="200" src="https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-300x200.jpg" class="attachment-medium size-medium" alt="AVIE founders Sonya &amp; Liam in a warm cosy bar celebrating an evening away from work and luxury slow fashion" loading="lazy" srcset="https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam-1024x682.jpg 1024w, https://avie-studio.com/wp-content/uploads/2019/11/AVIE-Luxury-Slow-Fashion-Sonya-and-Liam.jpg 1280w" sizes="(max-width: 300px) 100vw, 300px" /></noscript></div>
        </a>
                <div class="elementor-post__badge">Insider</div>
                <div class="elementor-post__avatar">
            <img loading="lazy" width="84" height="105" alt="Liam Nathan Byrne" data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg"><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" width="84" height="105" alt="Liam Nathan Byrne" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo" /></noscript>       </div>
                <div class="elementor-post__text">
                <h3 class="elementor-post__title">
            <a href="https://avie-studio.com/luxury-slow-fashion-a-lifestyle-not-a-trend/">
                Luxury Slow Fashion // A Lifestyle, Not a Trend         </a>
        </h3>
                <div class="elementor-post__excerpt">
            <p>There has been an emergence of a new form of fashion, we call it Luxury Slow fashion.<br>
A new way of thinking or an old way of living?</p>
        </div>
                    <a class="elementor-post__read-more" href="https://avie-studio.com/luxury-slow-fashion-a-lifestyle-not-a-trend/">
                Read More »         </a>
                </div>
                <div class="elementor-post__meta-data">
                    <span class="elementor-post-date">
            13th November 2019      </span>
                <span class="elementor-post-avatar">
            No Comments     </span>
                </div>
                    </div>
        </article>
                <article class="elementor-post elementor-grid-item post-6605 post type-post status-publish format-standard has-post-thumbnail hentry category-insider" style="margin-top: -129.083px;">
            <div class="elementor-post__card">
                <a class="elementor-post__thumbnail__link" href="https://avie-studio.com/paris-fashion-week-tranoi/">
            <div class="elementor-post__thumbnail"><img width="300" height="200" alt="Paris Fashion Week Tranoi, main hall with many exhibitors" loading="lazy" data-srcset="https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480.jpg 720w" data-src="https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480-300x200.jpg" data-sizes="(max-width: 300px) 100vw, 300px" class="attachment-medium size-medium ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480-300x200.jpg" sizes="(max-width: 300px) 100vw, 300px" srcset="https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480.jpg 720w"><noscript><img width="300" height="200" src="https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480-300x200.jpg" class="attachment-medium size-medium" alt="Paris Fashion Week Tranoi, main hall with many exhibitors" loading="lazy" srcset="https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/10/Tranoi_Blog_2019_6-480.jpg 720w" sizes="(max-width: 300px) 100vw, 300px" /></noscript></div>
        </a>
                <div class="elementor-post__badge">Insider</div>
                <div class="elementor-post__avatar">
            <img loading="lazy" width="84" height="105" alt="Liam Nathan Byrne" data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg"><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" width="84" height="105" alt="Liam Nathan Byrne" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo" /></noscript>       </div>
                <div class="elementor-post__text">
                <h3 class="elementor-post__title">
            <a href="https://avie-studio.com/paris-fashion-week-tranoi/">
                Paris Fashion Week TRANOI           </a>
        </h3>
                <div class="elementor-post__excerpt">
            <p>Four times a year during Paris Fashion Week, the TRANOI fashion trade show takes place in prestigious venues such as the Carrousel du Louvre</p>
        </div>
                    <a class="elementor-post__read-more" href="https://avie-studio.com/paris-fashion-week-tranoi/">
                Read More »         </a>
                </div>
                <div class="elementor-post__meta-data">
                    <span class="elementor-post-date">
            22nd October 2019       </span>
                <span class="elementor-post-avatar">
            No Comments     </span>
                </div>
                    </div>
        </article>
                <article class="elementor-post elementor-grid-item post-15221 post type-post status-publish format-standard has-post-thumbnail hentry category-insider" style="margin-top: -353.729px;">
            <div class="elementor-post__card">
                <a class="elementor-post__thumbnail__link" href="https://avie-studio.com/drapers-independent-awards/">
            <div class="elementor-post__thumbnail"><img width="300" height="200" alt="" loading="lazy" data-srcset="https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-1024x683.jpg 1024w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720.jpg 1080w" data-src="https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-300x200.jpg" data-sizes="(max-width: 300px) 100vw, 300px" class="attachment-medium size-medium ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-300x200.jpg" sizes="(max-width: 300px) 100vw, 300px" srcset="https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-1024x683.jpg 1024w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720.jpg 1080w"><noscript><img width="300" height="200" src="https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-300x200.jpg" class="attachment-medium size-medium" alt="" loading="lazy" srcset="https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-1024x683.jpg 1024w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2020/06/Drapers-6-720.jpg 1080w" sizes="(max-width: 300px) 100vw, 300px" /></noscript></div>
        </a>
                <div class="elementor-post__badge">Insider</div>
                <div class="elementor-post__avatar">
            <img loading="lazy" width="84" height="126" alt="Sonya Bachra-Byrne" data-src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg"><noscript><img loading="lazy"  width="84" height="126" alt="Sonya Bachra-Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="126" alt="Sonya Bachra-Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy" src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" width="84" height="126" alt="Sonya Bachra-Byrne" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo" /></noscript>      </div>
                <div class="elementor-post__text">
                <h3 class="elementor-post__title">
            <a href="https://avie-studio.com/drapers-independent-awards/">
                Drapers Independent Awards          </a>
        </h3>
                <div class="elementor-post__excerpt">
            <p>We came, we saw, we…..are on table 26?….we’ve no chance!</p>
        </div>
                    <a class="elementor-post__read-more" href="https://avie-studio.com/drapers-independent-awards/">
                Read More »         </a>
                </div>
                <div class="elementor-post__meta-data">
                    <span class="elementor-post-date">
            1st October 2019        </span>
                <span class="elementor-post-avatar">
            No Comments     </span>
                </div>
                    </div>
        </article>
                <article class="elementor-post elementor-grid-item post-5202 post type-post status-publish format-standard has-post-thumbnail hentry category-insider" style="margin-top: 0px;">
            <div class="elementor-post__card">
                <a class="elementor-post__thumbnail__link" href="https://avie-studio.com/scoop-international-aw19/">
            <div class="elementor-post__thumbnail"><img width="300" height="200" alt="AVIE AW19 collection behind the scenes image with all the models, assistants waiting on the streets of York between shots." loading="lazy" data-srcset="https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-1024x683.jpg 1024w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px.jpg 1080w" data-src="https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-300x200.jpg" data-sizes="(max-width: 300px) 100vw, 300px" class="attachment-medium size-medium ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-300x200.jpg" sizes="(max-width: 300px) 100vw, 300px" srcset="https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-1024x683.jpg 1024w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px.jpg 1080w"><noscript><img width="300" height="200" src="https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-300x200.jpg" class="attachment-medium size-medium" alt="AVIE AW19 collection behind the scenes image with all the models, assistants waiting on the streets of York between shots." loading="lazy" srcset="https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px-1024x683.jpg 1024w, https://avie-studio.com/wp-content/uploads/2019/05/AVIE_Photoshoot_BTS_2b_720px.jpg 1080w" sizes="(max-width: 300px) 100vw, 300px" /></noscript></div>
        </a>
                <div class="elementor-post__badge">Insider</div>
                <div class="elementor-post__avatar">
            <img loading="lazy" width="84" height="126" alt="Sonya Bachra-Byrne" data-src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg"><noscript><img loading="lazy"  width="84" height="126" alt="Sonya Bachra-Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="126" alt="Sonya Bachra-Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy" src="https://avie-studio.com/wp-content/uploads/2019/10/Sonya-Headshot-1-thumbnail.jpg" width="84" height="126" alt="Sonya Bachra-Byrne" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo" /></noscript>      </div>
                <div class="elementor-post__text">
                <h3 class="elementor-post__title">
            <a href="https://avie-studio.com/scoop-international-aw19/">
                SCOOP International, McQueen, AW19 &amp; more           </a>
        </h3>
                <div class="elementor-post__excerpt">
            <p>Showcasing our debut collection at the Saatchi Gallery, Chelsea to key industry buyers at the SCOOP International; with Gary James McQueen.</p>
        </div>
                    <a class="elementor-post__read-more" href="https://avie-studio.com/scoop-international-aw19/">
                Read More »         </a>
                </div>
                <div class="elementor-post__meta-data">
                    <span class="elementor-post-date">
            1st May 2019        </span>
                <span class="elementor-post-avatar">
            No Comments     </span>
                </div>
                    </div>
        </article>
                <article class="elementor-post elementor-grid-item post-2453 post type-post status-publish format-standard has-post-thumbnail hentry category-spotlight-interview" style="margin-top: -153.75px;">
            <div class="elementor-post__card">
                <a class="elementor-post__thumbnail__link" href="https://avie-studio.com/women-entrepreneurs/">
            <div class="elementor-post__thumbnail"><img width="300" height="200" alt="Women entrepreneurs Sonya Bachra-Byrne Interviews deborah o'grady wearing the AVIE Biker Jacket 1.0" loading="lazy" data-srcset="https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-1024x683.jpg 1024w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2.jpg 1080w" data-src="https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-300x200.jpg" data-sizes="(max-width: 300px) 100vw, 300px" class="attachment-medium size-medium ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-300x200.jpg" sizes="(max-width: 300px) 100vw, 300px" srcset="https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-1024x683.jpg 1024w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2.jpg 1080w"><noscript><img width="300" height="200" src="https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-300x200.jpg" class="attachment-medium size-medium" alt="Women entrepreneurs Sonya Bachra-Byrne Interviews deborah o&#039;grady wearing the AVIE Biker Jacket 1.0" loading="lazy" srcset="https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-300x200.jpg 300w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-400x267.jpg 400w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-768x512.jpg 768w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2-1024x683.jpg 1024w, https://avie-studio.com/wp-content/uploads/2019/09/AVIEWORLD_Deborah_OGrady_interview_2.jpg 1080w" sizes="(max-width: 300px) 100vw, 300px" /></noscript></div>
        </a>
                <div class="elementor-post__badge">Spotlight Interview</div>
                <div class="elementor-post__avatar">
            <img loading="lazy" width="84" height="105" alt="Liam Nathan Byrne" data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo ls-is-cached lazyloaded" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg"><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy"  width="84" height="105" alt="Liam Nathan Byrne"  data-src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo lazyload" src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==" /><noscript><img loading="lazy" src="https://avie-studio.com/wp-content/uploads/2019/10/Liam-Nathan-Byrne-Headshot-blog-thumbnail.jpg" width="84" height="105" alt="Liam Nathan Byrne" class="avatar avatar-128 wp-user-avatar wp-user-avatar-128 alignnone photo" /></noscript>       </div>
                <div class="elementor-post__text">
                <h3 class="elementor-post__title">
            <a href="https://avie-studio.com/women-entrepreneurs/">
                Women Entrepreneurs         </a>
        </h3>
                <div class="elementor-post__excerpt">
            <p>Sonya Bachra-Byrne, settles down with Deborah O’Grady; delving into our first interview promoting women entrepreneurs.</p>
        </div>
                    <a class="elementor-post__read-more" href="https://avie-studio.com/women-entrepreneurs/">
                Read More »         </a>
                </div>
                <div class="elementor-post__meta-data">
                    <span class="elementor-post-date">
            5th January 2019        </span>
                <span class="elementor-post-avatar">
            No Comments     </span>
                </div>
                    </div>
        </article>
                </div>
                </div>
                </div>
                        </div>
                    </div>
        </div>
                                </div>
                    </div>
        </section>
        `
};