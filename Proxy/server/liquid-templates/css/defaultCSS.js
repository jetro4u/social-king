exports.defaultCSS = () => {
    const backupHeaderImg = "https://www.dorothylane.com/wp-content/uploads/2017/09/cheese.jpg";

    return `.codex-editor__redactor { padding-bottom: 120px !important }
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
                    background-color: '#010e16';
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


                .community-user-icon { border:0px solid #fff;border-radius:100%;max-width:75px !important;margin-top:-10px; }
                .community-icon { border:4px solid #fff;border-radius:100%;max-width:75px !important;margin-top:-10px; }
                .community-header { background-repeat:no-repeat;background-position:center;background-size:cover }
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
                    margin-bottom:20px;
                    box-shadow: 0 0 10px #06FFCF;
                    background:#01131f;
                    margin: 20px;
                    

                }

               .posts-container{
                display: grid;
               grid-template-columns: repeat(3, 1fr);
               
               grid-template-rows: masonry;
                
                }

               @media only screen and (max-width: 600px)  {
                  .posts-container{
                  display: grid;
               grid-template-columns: repeat(1, 1fr);
               
               grid-template-rows: masonry;
               }}

               .community-card:hover {
                  box-shadow: 0px 0px 15px #06FFCF ;
                 }
                .community-card a {
                    font-color: white;
                }
                .community-card-header { letter-spacing: .5px; background: #26b598;color:white;padding:10px;font-weight:bold; }
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
                .community-instant-post { width:100%;border:1px solid #edeff1; background: #f6f7f8;padding:10px }
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


            `;
};

                