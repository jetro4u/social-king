exports.newsFeedCSS = ({shop}) => {
    const backupHeaderImg = "https://www.dorothylane.com/wp-content/uploads/2017/09/cheese.jpg";

    return `
            .community-background { background-color: #edeff1;padding-top:20px; }
            .l-box { padding:1em; }
            .tag-btn { margin-top: 1em;
                      margin-bottom: 1em;
                      margin-right: 1em;
                      margin-left: 1em;
                      background-color: lightblue; }
            .tag-btn:hover {
              background-color: lightgreen;
            }
            .community-user-icon { border:4px solid #fff;border-radius:100%;max-width:75px;margin-top:-10px; }
            .community-icon { border:4px solid #fff;border-radius:100%;max-width:75px;margin-top:-10px; }
            .community-header { background-image: url(${shop && shop.headerImageURL ? shop.headerImageURL : backupHeaderImg});padding-top:120px;margin-top:-55px }
            .community-header-title { background:#fff; }
            .community-header-title-box { display:flex }
            .community-header-title .community-h2 { display:inline-block;margin-left:20px;font-size:30px;font-weight:bold;color:#000;padding:10px 0; }
            .community-card { letter-spacing: .5px; border:1px solid #ccc;border-radius:4px;margin-bottom:20px;background:#fff }
            .community-card-header { letter-spacing: .5px; background:darkblue;color:white;padding:10px;font-weight:bold; }
            .community-card-body { letter-spacing: .4px; padding:10px }
            @media only screen 
            and (min-device-width: 600px)
             { .community-pad-20 { padding:10px 20px 20px 20px } }
            .community-hr { margin:20px 0 }
            .community-hr-minimal { margin:8px 0 }
            .community-full-width { width: 100% }
            .community-instant-post { width:100%;border:1px solid #edeff1; background: #f6f7f8;padding:10px }
            .community-instant-post:hover, .community-instant-post:focus { background:#fff }
            .community-author { color:#969696;font-size:12px;margin-bottom:5px }
            .community-card h3 { font-size:20px;margin-bottom:8px }
            .community-card p { margin-bottom:8px }
            .community-card-comments { font-size:12px;font-weight:bold; }
            .community-pad-left-10 { padding-left:10px }
            .community-bold { font-weight:bold }
            .community-admin-padding { padding:10px 20px 20px 20px }
            .button-danger {  color: white; border-radius: 4px; text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2); background: rgb(202, 60, 60); }
        `
};