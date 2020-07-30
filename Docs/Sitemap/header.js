<Head>
            <title>{APP_NAME}</title>
            <meta
                name="description"
                content="Check out our community's Favorite Products - which they actually purchased on Amazon!"
            />
            <link rel="canonical" href={`${DOMAIN}${router.pathname}`} />
            <meta property="og:title" content={`${APP_NAME} - For Fans, By Fans`} />
            <meta
                property="og:description"
                content="Check out what other users purchased, write reviews, comment on other people's posts, and make up to 10% commission when someone purchases an Amazon Product via one of your pages!"
            />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={`${DOMAIN}${router.pathname}`} />
            <meta property="og:site_name" content={`${APP_NAME}`} />

            <meta property="og:image" content={`${DOMAIN}/static/images/large_rocket.jpeg`} />
            <meta property="og:image:secure_url" content={`${DOMAIN}/static/images/large_rocket.jpeg`} />
            <meta property="og:image:type" content="image/jpg" />
            <meta property="fb:app_id" content={`${FB_APP_ID}`} />
        </Head>