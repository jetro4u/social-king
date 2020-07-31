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

    const generateSEOHeader = () => {
        let DOMAIN = shop.shopify_domain;
        console.log('generateSEOHeader func ran');
        if(tag){
            let title = tag.name + ' - '+ `{{shop.name}}`;
            let description = `Check out these posts by members of our community`
            console.log('tag condition ran')
            return `<Head>
                <meta property="og:image" content="${shop.iconImageURL}" />
                <meta property="og:image:secure_url" content="${shop.iconImageURL}" />
                <meta property="og:image:type" content="image/jpg" />
                <meta property="fb:app_id" content="${process.env.FB_APP_ID}" />
            </Head>

              {% capture page_title %}
                ${title}
              {% endcapture %}

              {%- capture og_image_tags -%}
               <meta property="og:image" content="${shop.iconImageURL}">
              {%- endcapture -%}

              {%- capture og_image_secure_url_tags -%}
                <meta property="og:image:secure_url" content="${shop.iconImageURL}">
              {%- endcapture -%}

              {% capture page_description %}
                ${description}
              {% endcapture %}

              <meta name="twitter:card" content="summary_large_image">
                <meta name="twitter:title" content="${title}">
                <meta name="twitter:description" content="${description}">`
        } else {
            return '';
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