const proxyRoute = process.env.PROXY_ROUTE;

exports.header = ({shop, tag, user, blog}) => {

	const showTitle = (shop)=>{
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

    const SEOMarkup = (title, description, imageURL) => {
        return `<Head>
                <meta property="og:image" content="${imageURL}" />
                <meta property="og:image:secure_url" content="${imageURL}" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="fb:app_id" content="${process.env.FB_APP_ID}" />
            </Head>

              {% capture page_title %}
                ${title}
              {% endcapture %}

              {%- capture og_image_tags -%}
               <meta property="og:image" content="${imageURL}">
              {%- endcapture -%}

              {%- capture og_image_secure_url_tags -%}
                <meta property="og:image:secure_url" content="${imageURL}">
              {%- endcapture -%}

              {% capture page_description %}
                ${description}
              {% endcapture %}

              <meta name="twitter:card" content="summary_large_image">
                <meta name="twitter:title" content="${title}">
                <meta name="twitter:description" content="${description}">`
    }

    const generateSEOHeader = () => {
        let DOMAIN = shop ? shop.shopify_domain : 'social-king-app.myshopify.com';
        console.log('generateSEOHeader func ran');
        if(tag){
            let title = tag.name + ' - '+ `{{shop.name}}`;
            let description = `Check out these posts by members of our community`
            console.log('tag condition ran')
            return SEOMarkup(title, description, shop.iconImageURL)
        } else if (user) {
            let title = user.name + ' - '+ `{{shop.name}}`;
            let description = `Check out these posts by ${user.name} - a valued member of our community`
            let imageURL = user && user.cover_photo!='undefined' ? user.cover_photo : 'https://mysteryshopperblog.files.wordpress.com/2014/07/mystery-shopper-image.gif';
            return SEOMarkup(title, description, imageURL);
        } else if (blog) {
            let title = blog.title;
            let description = blog.mdesc;
            let imageURL = blog.coverMedia ? blog.coverMedia : (user && user.cover_photo!='undefined' ? user.cover_photo : 'https://mysteryshopperblog.files.wordpress.com/2014/07/mystery-shopper-image.gif');
            return SEOMarkup(title, description, imageURL);
        } else {
            let title = (shop && shop._doc.communityName ? shop._doc.communityName : 'Community') + ' - '+ `{{shop.name}}`;
            let description = `Share your thoughts with our community.`
            console.log('tag condition ran')
            let iconImageURL = shop ? shop.iconImageURL : 'https://socialking.app/proxy/images/uploads/social-king-app.myshopify.com-1603702989629.jpeg'
            return SEOMarkup(title, description, iconImageURL)
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

        ${generateSEOHeader()}

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