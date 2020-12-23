exports.newsFeedCSS = ({shop}) => {
    const backupHeaderImg = "https://www.dorothylane.com/wp-content/uploads/2017/09/cheese.jpg";

    console.log('shop in newsFeedCSS',shop);

    if(shop.shopify_domain.includes('beforestores')){
        return `
                /*! CSS Used from: https://avie-studio.com/wp-content/themes/hello-elementor/style.min.css ; media=all */
@media all{
*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;}
h3{margin-top:.5rem;margin-bottom:1rem;font-family:inherit;font-weight:500;line-height:1.2;color:inherit;}
h3{font-size:1.75rem;}
p{margin-top:0;margin-bottom:.9rem;}
a{background-color:transparent;text-decoration:none;color:#c36;}
a:active,a:hover{color:#336;}
img{border-style:none;height:auto;max-width:100%;}
@media print{
*,:after,:before{background:transparent!important;color:#000!important;-webkit-box-shadow:none!important;box-shadow:none!important;text-shadow:none!important;}
a,a:visited{text-decoration:underline;}
a[href]:after{content:" (" attr(href) ")";}
img{page-break-inside:avoid;}
h3,p{orphans:3;widows:3;}
h3{page-break-after:avoid;}
}
}
/*! CSS Used from: https://avie-studio.com/wp-content/plugins/elementor/assets/css/frontend-legacy.min.css ; media=all */
@media all{
.elementor-column-gap-default>.elementor-row>.elementor-column>.elementor-element-populated{padding:10px;}
@media (max-width:767px){
.elementor-column{width:100%;}
}
}
/*! CSS Used from: https://avie-studio.com/wp-content/plugins/elementor/assets/css/frontend.min.css ; media=all */
@media all{
.elementor *,.elementor :after,.elementor :before{-webkit-box-sizing:border-box;box-sizing:border-box;}
.elementor a{-webkit-box-shadow:none;box-shadow:none;text-decoration:none;}
.elementor img{height:auto;max-width:100%;border:none;-webkit-border-radius:0;border-radius:0;-webkit-box-shadow:none;box-shadow:none;}
.elementor-section{position:relative;}
.elementor-section .elementor-container{display:-webkit-box;display:-ms-flexbox;display:flex;margin-right:auto;margin-left:auto;position:relative;}
@media (max-width:1024px){
.elementor-section .elementor-container{-ms-flex-wrap:wrap;flex-wrap:wrap;}
}
.elementor-section.elementor-section-boxed>.elementor-container{max-width:1140px;}
.elementor-row{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;}
@media (max-width:1024px){
.elementor-row{-ms-flex-wrap:wrap;flex-wrap:wrap;}
}
.elementor-widget-wrap{position:relative;width:100%;-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-line-pack:start;align-content:flex-start;}
.elementor:not(.elementor-bc-flex-widget) .elementor-widget-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;}
.elementor-widget-wrap>.elementor-element{width:100%;}
.elementor-widget{position:relative;}
.elementor-column{min-height:1px;}
.elementor-column,.elementor-column-wrap{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;}
.elementor-column-wrap{width:100%;}
@media (min-width:768px){
.elementor-column.elementor-col-100{width:100%;}
}
@media (max-width:767px){
.elementor-column{width:100%;}
}
.elementor-grid{display:grid;grid-column-gap:var(--grid-column-gap);grid-row-gap:var(--grid-row-gap);}
.elementor-grid .elementor-grid-item{min-width:0;}
.elementor-grid-3 .elementor-grid{grid-template-columns:repeat(3,1fr);}
@media (max-width:1024px){
.elementor-grid-tablet-3 .elementor-grid{grid-template-columns:repeat(3,1fr);}
}
@media (max-width:767px){
.elementor-grid-mobile-1 .elementor-grid{grid-template-columns:repeat(1,1fr);}
}
.elementor-element .elementor-widget-container{-webkit-transition:background .3s,border .3s,-webkit-border-radius .3s,-webkit-box-shadow .3s;transition:background .3s,border .3s,-webkit-border-radius .3s,-webkit-box-shadow .3s;-o-transition:background .3s,border .3s,border-radius .3s,box-shadow .3s;transition:background .3s,border .3s,border-radius .3s,box-shadow .3s;transition:background .3s,border .3s,border-radius .3s,box-shadow .3s,-webkit-border-radius .3s,-webkit-box-shadow .3s;}
.elementor-post__thumbnail__link{-webkit-transition:none;-o-transition:none;transition:none;}
}
/*! CSS Used from: https://avie-studio.com/wp-content/uploads/elementor/css/post-15610.css ; media=all */
@media all{
.elementor-kit-15610 a{color:#FF00F3;}
.elementor-kit-15610 a:hover{color:#FF00F3;}
.elementor-section.elementor-section-boxed > .elementor-container{max-width:1140px;}
@media (max-width:1024px){
.elementor-section.elementor-section-boxed > .elementor-container{max-width:1025px;}
}
@media (max-width:767px){
.elementor-section.elementor-section-boxed > .elementor-container{max-width:768px;}
}
}
/*! CSS Used from: https://avie-studio.com/wp-content/plugins/elementor-pro/assets/css/frontend.min.css ; media=all */
@media all{
.elementor-widget-posts:after{display:none;}
.elementor-posts-container.elementor-posts-masonry{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;}
.elementor-posts-container .elementor-post{padding:0;margin:0;}
.elementor-posts-container .elementor-post__thumbnail{overflow:hidden;}
.elementor-posts-container .elementor-post__thumbnail img{display:block;width:100%;max-height:none;max-width:none;-webkit-transition:-webkit-filter .3s;transition:-webkit-filter .3s;-o-transition:filter .3s;transition:filter .3s;transition:filter .3s,-webkit-filter .3s;}
.elementor-posts-container .elementor-post__thumbnail__link{position:relative;display:block;width:100%;}
.elementor-posts .elementor-post{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-transition-property:background,border,-webkit-box-shadow;transition-property:background,border,-webkit-box-shadow;-o-transition-property:background,border,box-shadow;transition-property:background,border,box-shadow;transition-property:background,border,box-shadow,-webkit-box-shadow;-webkit-transition-duration:.25s;-o-transition-duration:.25s;transition-duration:.25s;}
.elementor-posts .elementor-post__title{font-size:18px;margin:0;}
.elementor-posts .elementor-post__excerpt{margin-bottom:10px;}
.elementor-posts .elementor-post__excerpt p{margin:0;line-height:1.5em;font-size:14px;color:#777;}
.elementor-posts .elementor-post__meta-data{line-height:1.3em;font-size:12px;margin-bottom:13px;color:#adadad;}
.elementor-posts .elementor-post__read-more{font-size:12px;font-weight:700;}
.elementor-posts .elementor-post__thumbnail{position:relative;}
.elementor-posts--align-left .elementor-post{text-align:left;}
.elementor-posts--thumbnail-top .elementor-post{display:block;}
.elementor-posts--thumbnail-top .elementor-post__thumbnail__link{margin-bottom:20px;}
.elementor-posts--thumbnail-top .elementor-post__text{width:100%;}
.elementor-posts--thumbnail-top.elementor-posts--align-left .elementor-post__thumbnail__link{margin-right:auto;}
.elementor-posts .elementor-post__card{overflow:hidden;position:relative;background-color:#fff;width:100%;min-height:100%;border-radius:3px;border:0 solid #818a91;-webkit-transition:all .25s;-o-transition:all .25s;transition:all .25s;}
.elementor-posts .elementor-post__card .elementor-post__thumbnail{position:relative;transform-style:preserve-3d;-webkit-transform-style:preserve-3d;}
.elementor-posts .elementor-post__card .elementor-post__thumbnail img{width:calc(100% + 1px);}
.elementor-posts .elementor-post__card .elementor-post__text{padding:0 30px;margin-bottom:0;margin-top:20px;}
.elementor-posts .elementor-post__card .elementor-post__read-more{margin-bottom:20px;display:inline-block;}
.elementor-posts .elementor-post__card .elementor-post__meta-data{padding:15px 30px;margin-bottom:0;border-top:1px solid #eaeaea;}
.elementor-posts .elementor-post__card .elementor-post__meta-data span+span:before{margin:0 5px;}
.elementor-posts .elementor-post__card .elementor-post__title{font-size:21px;}
.elementor-posts .elementor-post__card .elementor-post__excerpt{line-height:1.7;}
.elementor-posts .elementor-post__card .elementor-post__excerpt,.elementor-posts .elementor-post__card .elementor-post__title{margin-bottom:25px;}
.elementor-posts .elementor-post__card .elementor-post__badge,.elementor-posts .elementor-post__card .elementor-post__read-more{text-transform:uppercase;}
.elementor-posts .elementor-post__badge{position:absolute;top:0;background:#818a91;color:#fff;font-size:12px;padding:.6em 1.2em;line-height:1;font-weight:400;margin:20px;border-radius:999px;}
.elementor-posts .elementor-post__avatar{position:relative;padding:0 30px;width:100%;top:-25px;height:0;pointer-events:none;}
.elementor-posts .elementor-post__avatar img{border-radius:50%;width:60px;pointer-events:all;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);}
.elementor-posts--show-avatar .elementor-post__thumbnail__link{margin-bottom:25px;}
.elementor-posts__hover-gradient .elementor-post__card .elementor-post__thumbnail__link:after{display:block;content:"";background-image:-webkit-gradient(linear,left bottom,left top,from(rgba(0,0,0,.35)),color-stop(75%,transparent));background-image:-webkit-linear-gradient(bottom,rgba(0,0,0,.35),transparent 75%);background-image:-o-linear-gradient(bottom,rgba(0,0,0,.35) 0,transparent 75%);background-image:linear-gradient(0deg,rgba(0,0,0,.35),transparent 75%);background-repeat:no-repeat;height:100%;width:100%;position:absolute;bottom:0;opacity:1;-webkit-transition:all .3s ease-out;-o-transition:all .3s ease-out;transition:all .3s ease-out;}
.elementor-posts__hover-gradient .elementor-post__card:hover .elementor-post__thumbnail__link:after{opacity:.5;}
.elementor-card-shadow-yes .elementor-post__card{-webkit-box-shadow:0 0 10px 0 rgba(0,0,0,.15);box-shadow:0 0 10px 0 rgba(0,0,0,.15);}
.elementor-card-shadow-yes .elementor-post__card:hover{-webkit-box-shadow:0 0 30px 0 rgba(0,0,0,.15);box-shadow:0 0 30px 0 rgba(0,0,0,.15);}
}
/*! CSS Used from: https://avie-studio.com/wp-content/uploads/elementor/css/global.css ; media=all */
@media all{
.elementor-widget-posts .elementor-post__title,.elementor-widget-posts .elementor-post__title a{color:var( --e-global-color-secondary );font-family:var( --e-global-typography-primary-font-family ), Sans-serif;font-weight:var( --e-global-typography-primary-font-weight );}
.elementor-widget-posts .elementor-post__meta-data{font-family:var( --e-global-typography-secondary-font-family ), Sans-serif;font-weight:var( --e-global-typography-secondary-font-weight );}
.elementor-widget-posts .elementor-post__excerpt p{font-family:var( --e-global-typography-text-font-family ), Sans-serif;font-weight:var( --e-global-typography-text-font-weight );}
.elementor-widget-posts .elementor-post__read-more{color:var( --e-global-color-accent );font-family:var( --e-global-typography-accent-font-family ), Sans-serif;font-weight:var( --e-global-typography-accent-font-weight );}
.elementor-widget-posts .elementor-post__card .elementor-post__badge{background-color:var( --e-global-color-accent );font-family:var( --e-global-typography-accent-font-family ), Sans-serif;font-weight:var( --e-global-typography-accent-font-weight );}
}
/*! CSS Used from: https://avie-studio.com/wp-content/uploads/elementor/css/post-41.css ; media=all */
@media all{
.elementor-41 .elementor-element.elementor-element-5f03925{margin-top:2px;margin-bottom:0px;padding:0px 0px 0px 0px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__meta-data span + span:before{content:"•";}
.elementor-41 .elementor-element.elementor-element-885cc0f{--grid-column-gap:35px;--grid-row-gap:35px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__card{background-color:#FFFFFF;border-width:0px;border-radius:0px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__text{margin-top:20px;margin-bottom:11px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__badge{right:0;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__card .elementor-post__badge{font-size:10px;margin:0px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__title,.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__title a{color:#000000;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__title{margin-bottom:10px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__excerpt{margin-bottom:10px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__read-more{font-size:18px;margin-bottom:11px;}
@media (max-width:1024px){
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__title,.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__title a{font-size:18px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__excerpt p{font-size:13px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__read-more{font-size:16px;}
}
@media (max-width:767px){
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__title,.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__title a{font-size:16px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__excerpt p{font-size:10px;}
.elementor-41 .elementor-element.elementor-element-885cc0f .elementor-post__read-more{font-size:13px;}
}
}
/*! CSS Used from: Embedded */
.lazyload{opacity:0;}
.lazyloaded{opacity:1;transition:opacity 400ms;transition-delay:0ms;}

                .codex-editor__redactor { padding-bottom: 120px !important }
                .community-background main { padding-top: 50px !important }
                @media screen and (min-width: 1200px) {
                    .community-background {
                        padding-left: 10%;
                        padding-right: 10%;
                    }
                    .community-header-title {
                        padding-left: 10%;
                        padding-right: 10%;
                    }
                }
                
                .main-content {  background-color: #01131f; }
                .community-background { 
                    background-color: ${shop && shop.backgroundColor ? shop.backgroundColor : '#010e16' };
                    padding-top:0px;
                    color: white !important;
                }
                .community-background h3, p {
                    color: white;
                }

                .l-box { padding:1em; }
                .tag-btn { margin-top: 1em;
                          margin-bottom: 1em;
                          background-color: #26b598 !important;
                          font-color: white !important; 
                          text-align: center !important;
                }
                .tag-btn:hover {
                  background-color: #26b598;
                }
                .tag-btn a {
                    color: white !important;
                }
                .pure-button {
                    background-color: #26b598;
                }
                .community-pad-20 { font-color: white; }


                .community-user-icon { border:4px solid #fff;border-radius:100%;max-width:75px !important;margin-top:-10px; }
                .community-icon { border:4px solid #fff;border-radius:100%;max-width:75px !important;margin-top:-10px; }
                .community-header { background-image: url(${shop && shop.headerImageURL ? shop.headerImageURL : backupHeaderImg}); background-repeat:no-repeat;background-position:center;background-size:cover }
                .community-header-title { background:#01131f; }
                .community-header-title-box { display:flex }
                .community-header-title .community-h2 { 
                    display:inline-block;
                    margin-left:20px;
                    font-size:30px;
                    font-weight:bold;
                    color:white;
                    padding:10px 0; 
                }
                .community-card { 
                    letter-spacing: .5px; 
                    border:1px solid #ccc;
                    border-radius:4px;
                    margin-bottom:20px;
                    background:#01131f 
                }
                .community-card a { 
                    font-color: white; 
                }
                .community-card-header { letter-spacing: .5px; background:${shop && shop.primaryColor ? shop.primaryColor : '#26b598'};color:white;padding:10px;font-weight:bold; }
                .community-card-body { letter-spacing: .4px; padding:30px }
                .community-post-body { letter-spacing: .35px;}
                .community-post-body h2 { color: white; font-weight: bold;}
                .community-post-body button { white-space: normal; }
                .community-card a { white-space: normal; }
                .community-letter-spacing { letter-spacing: .4px; }
                @media only screen 
                and (min-device-width: 600px)
                 { .community-pad-20 { padding:10px 20px 20px 20px } }
                .community-hr { margin:20px 0 }
                .community-hr-minimal { margin:8px 0 }
                .community-full-width { width: 100% }
                .community-instant-post { width:100%;border:1px solid ${shop && shop.backgroundColor ? shop.backgroundColor : '#edeff1'}; background: #f6f7f8;padding:10px }
                .community-instant-post:hover, .community-instant-post:focus { background:#fff }
                .community-author { color:#b9bcbf;font-size:12px;margin-bottom:5px }
                .community-card h3 { font-size:20px;margin-bottom:8px }
                .community-card p { margin-bottom:8px }
                .community-card a { color:#b9bcbf; text-decoration: none;}
                .community-card-comments { font-size:12px;font-weight:bold; }
                .community-pad-left-10 { padding-left:10px }
                .community-bold { font-weight:bold }
                .community-admin-padding { padding:10px 20px 20px 20px }
                .community-button-danger {  background: rgb(202, 60, 60); color: white; border-radius: 4px; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);}
                .community-button-secondary { 
                      margin-top: 1em;
                      margin-bottom: 1em;
                      background: #26b598; 
                      color: white; 
                      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); 
                  }
                .community-checkbox { float:left;margin-right:30px }
                .community-newsfeed-box {width:100%}
                .community-reactions {
                    background-color: #193532
                }
                .community-reactions:hover{ 
                    cursor: pointer; 
                    background-color: #26b598
                }
                .emoji-picker { z-index: 100;}
                .community-admin-btn {color:white;}
                .cover-img { max-width: 100%; }
                #profile-photo img { max-width: 100%; }
                .community-card p,h3,h4,h5,h6,h7 { 
                    font-size: 15px; 
                    color: #b9bcbf; 
                } 
        `
    } else if (shop.shopify_domain.includes('social-king') || shop.shopify_domain.includes('jungle-navigator')) {
        return `
                .codex-editor__redactor { padding-bottom: 120px !important }
                .site-header {background-color: #2b5777 !important;}
                main{ padding-top: 50px !important }
                @media screen and (min-width: 1200px) {
                    .community-background {
                        padding-left: 5%;
                        padding-right: 5%;
                    }
                    .community-header-title {
                        padding-left: 5%;
                        padding-right: 5%;
                    }
                }
                .main-content {  background-color: #01131f }
                .community-background { 
                    background-color: ${shop && shop.backgroundColor ? shop.backgroundColor : '#543434' };
                    padding-top:0px;
                    color: white !important;
                }
                .community-background h3, p {
                    color: white;
                }

                .l-box { padding:1em; }
                .tag-btn { margin-top: 1em;
                          margin-bottom: 1em;
                          background-color: #a48c4c !important;
                          font-color: white !important; 
                          text-align: center !important;
                }
                .tag-btn:hover {
                  background-color: #a48c4c;
                }
                .tag-btn a {
                    color: white !important;
                }
                .pure-button {
                    background-color: #a48c4c;
                }
                .community-pad-20 { font-color: white; }


                .community-user-icon { border:4px solid #fff;border-radius:100%;max-width:75px !important;margin-top:-10px; }
                .community-icon { border:4px solid #fff;border-radius:100%;max-width:75px !important;margin-top:-10px; }
                .community-header { background-image: url(${shop && shop.headerImageURL ? shop.headerImageURL : backupHeaderImg});padding-top:30px;margin-top:-55px;background-repeat:no-repeat;background-position:center;background-size:cover }
                .community-header-title { background:#01131f }
                .community-header-title-box { display:flex }
                .community-header-title .community-h2 { 
                    display:inline-block;
                    margin-left:20px;
                    font-size:30px;
                    font-weight:bold;
                    color:white;
                    padding:10px 0; 
                }
                .community-card { 
                    letter-spacing: .5px; 
                    border:1px solid #ccc;
                    border-radius:4px;
                    margin-bottom:20px;
                    background:#01131f; 
                }
                .community-card a { 
                    font-color: white; 
                }
                .community-card-header { letter-spacing: .5px; background:${shop && shop.primaryColor ? shop.primaryColor : '#26b598'};color:white;padding:10px;font-weight:bold; }
                .community-card-body { letter-spacing: .4px; padding:30px }
                .community-post-body { letter-spacing: .35px;}
                .community-post-body h2 { color: white; font-weight: bold;}
                .community-post-body button { white-space: normal; }
                .community-card a { white-space: normal; }
                .community-letter-spacing { letter-spacing: .4px; }
                @media only screen 
                and (min-device-width: 600px)
                 { .community-pad-20 { padding:10px 20px 20px 20px } }
                .community-hr { margin:20px 0 }
                .community-hr-minimal { margin:8px 0 }
                .community-full-width { width: 100% }
                .community-instant-post { width:100%;border:1px solid ${shop && shop.backgroundColor ? shop.backgroundColor : '#edeff1'}; background: #f6f7f8;padding:10px }
                .community-instant-post:hover, .community-instant-post:focus { background:#fff }
                .community-author { color:#b9bcbf;font-size:12px;margin-bottom:5px }
                .community-card h3 { font-size:20px;margin-bottom:8px }
                .community-card p { margin-bottom:8px }
                .community-card a { color:#b9bcbf; text-decoration: none;}
                .community-card-comments { font-size:12px;font-weight:bold; }
                .community-pad-left-10 { padding-left:10px }
                .community-bold { font-weight:bold }
                .community-admin-padding { padding:10px 20px 20px 20px }
                .community-button-danger {  background: rgb(202, 60, 60); color: white; border-radius: 4px; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);}
                .community-button-secondary { 
                      margin-top: 1em;
                      margin-bottom: 1em;
                      background: #a48c4c; 
                      color: white; 
                      text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); 
                  }
                .community-checkbox { float:left;margin-right:30px }
                .community-newsfeed-box {width:100%}
                .community-reactions {
                    background-color: #8d7244
                }
                .community-reactions:hover{ 
                    cursor: pointer; 
                    background-color: #a48c4c;
                }
                .emoji-picker { z-index: 100;}
                .community-admin-btn {color:white;}
                .cover-img { max-width: 100%; }
                #profile-photo img { max-width: 100%; }
                .community-card p,h3,h4,h5,h6,h7 { 
                    font-size: 15px; 
                    color: #b9bcbf; 
                } 
        `
    }
    else {
        return `
            .codex-editor__redactor { padding-bottom: 120px !important }
            .community-background { 
                background-color: ${shop && shop.backgroundColor ? shop.backgroundColor : '#edeff1'};
                padding-top:20px;
             }
            .l-box { padding:1em; }
            .tag-btn { margin-top: 1em;
                      margin-bottom: 1em;
                      margin-right: 1em;
                      margin-left: 1em;
                      background-color: lightblue; }
            .tag-btn:hover {
              background-color: lightgreen;
            }
            .community-user-icon { border:4px solid #fff;border-radius:100%;max-width:75px !important;margin-top:-10px; }
            .community-icon { border:4px solid #fff;border-radius:100%;max-width:75px !important;margin-top:-10px; }
            .community-header { background-image: url(${shop && shop.headerImageURL ? shop.headerImageURL : backupHeaderImg});padding-top:120px;margin-top:-55px;background-repeat:no-repeat;background-position:center;background-size:cover }
            .community-header-title { background:#fff; }
            .community-header-title-box { display:flex }
            .community-header-title .community-h2 { display:inline-block;margin-left:20px;font-size:30px;font-weight:bold;color:#000;padding:10px 0; }
            .community-card { letter-spacing: .5px; border:1px solid #ccc;border-radius:4px;margin-bottom:20px;background:#fff }
            .community-card-header { letter-spacing: .5px; background:${shop && shop.primaryColor ? shop.primaryColor : 'darkblue'};color:white;padding:10px;font-weight:bold; }
            .community-card-body { letter-spacing: .4px; padding:30px }
            .community-post-body { letter-spacing: .35px;}
            .community-post-body h2 { color: black; font-weight: bold;}
            .community-post-body button { white-space: normal; }
            .community-card a { white-space: normal; }
            .community-letter-spacing { letter-spacing: .4px; }
            @media only screen 
            and (min-device-width: 600px)
             { .community-pad-20 { padding:10px 20px 20px 20px } }
            .community-hr { margin:20px 0 }
            .community-hr-minimal { margin:8px 0 }
            .community-full-width { width: 100% }
            .community-instant-post { width:100%;border:1px solid ${shop && shop.backgroundColor ? shop.backgroundColor : '#edeff1'}; background: #f6f7f8;padding:10px }
            .community-instant-post:hover, .community-instant-post:focus { background:#fff }
            .community-author { color:#969696;font-size:12px;margin-bottom:5px }
            .community-card h3 { font-size:20px;margin-bottom:8px }
            .community-card p { margin-bottom:8px }
            .community-card a { color:#383838; text-decoration: none;}
            .community-card-comments { font-size:12px;font-weight:bold; }
            .community-pad-left-10 { padding-left:10px }
            .community-bold { font-weight:bold }
            .community-admin-padding { padding:10px 20px 20px 20px }
            .community-button-danger {  background: rgb(202, 60, 60); color: white; border-radius: 4px; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);}
            .community-button-secondary { margin-top: 1em;
                  margin-bottom: 1em;
                  margin-right: 1em;
                  margin-left: 1em; background: rgb(66, 184, 221); color: white; border-radius: 4px; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); }
            .community-checkbox { float:left;margin-right:30px }
            .community-newsfeed-box {width:100%}
            .community-reactions:hover{ cursor: pointer; }
            .emoji-picker { z-index: 100;}
            .community-admin-btn {color:white;}
            .cover-img { max-width: 100%; }
            #profile-photo img { max-width: 100%; }
            .community-card p,h3,h4,h5,h6,h7 { font-size: 15px; color: black; } 
    }
    `
    }
};
