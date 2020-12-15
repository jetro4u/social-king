exports.newsFeedCSS = ({shop}) => {
    const backupHeaderImg = "https://www.dorothylane.com/wp-content/uploads/2017/09/cheese.jpg";

    console.log('shop in newsFeedCSS',shop);

    if(shop.shopify_domain.includes('beforestores')){
        return `
                main{ padding-top: 50px !important }
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
                .community-header { background-image: url(${shop && shop.headerImageURL ? shop.headerImageURL : backupHeaderImg});padding-top:120px;margin-top:-55px;background-repeat:no-repeat;background-position:center;background-size:cover }
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
                main{ padding-top: 50px !important }
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
                .community-header { background-image: url(${shop && shop.headerImageURL ? shop.headerImageURL : backupHeaderImg});padding-top:120px;margin-top:-55px;background-repeat:no-repeat;background-position:center;background-size:cover }
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
