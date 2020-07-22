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