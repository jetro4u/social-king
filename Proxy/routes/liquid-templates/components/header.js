const proxyRoute = process.env.PROXY_ROUTE;

exports.header = ({shop, tag, user, blog}) => {

	const showTitle = (shop)=>{
        console.log('shop.communityName in showTitle function', shop._doc.communityName);

		if(tag){
    		return "Posts Tagged '"+ tag.name+"'"
    	} else if (user) {
    		return user.name
    	} else if (blog) {
    		return blog.title
    	} else {
    		return shop && shop._doc.communityName ? shop._doc.communityName : 'Community';
    	}
	}

	const backupShopIcon = "https://www.bongiorno.eu/assets/img/facebook/bongiorno.jpg";

    return `
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-PCV3ZBX');</script>
        <!-- End Google Tag Manager -->
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-PCV3ZBX"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->

		<header class="community-header">
            <link rel="stylesheet" href="https://unpkg.com/purecss@2.0.3/build/grids-responsive-min.css">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <div class="community-header-title">
                <div class="page-width community-header-title-box">
                    <a href="${proxyRoute}">
                        <img src="${shop && shop.iconImageURL ? shop.iconImageURL : backupShopIcon}" class="community-icon" />
                    </a>
                    <div class="community-h2">${showTitle(shop)}</div>
                </div>
            </div>
        </header>
		`
};