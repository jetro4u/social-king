const proxyRoute = process.env.PROXY_ROUTE;

exports.header = ({shop, tag, user, blog}) => {
    console.log('shop in header', shop);

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