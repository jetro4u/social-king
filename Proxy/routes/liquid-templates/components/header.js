const proxyRoute = process.env.PROXY_ROUTE;

exports.header = ({shop, tag, user, blog}) => {
	const showTitle = ()=>{
		if(tag){
    		return "Posts Tagged '"+ tag.name+"'"
    	} else if (user) {
    		return user.name
    	} else if (blog) {
    		return blog.title
    	} else {
    		return 'Home Improvement Community'
    	}
	}

	const shopIcon = "https://styles.redditmedia.com/t5_2qiuc/styles/communityIcon_s6mblzvh8t051.png?width=256&s=851a80f05e1194ee216a999370fe45bdfd2b5010";

    return `
		<header class="community-header">
            <div class="community-header-title">
                <div class="page-width community-header-title-box">
                    <a href="${proxyRoute}">
                        <img src="${shopIcon}" class="community-icon" />
                    </a>
                    <div class="community-h2">${showTitle()}</div>
                </div>
            </div>
        </header>
		`
};