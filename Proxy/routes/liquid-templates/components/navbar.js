const proxyRoute = process.env.PROXY_ROUTE;

exports.navbar = ({shop, tags, user}) => {

    const showAllTags = () => {
        return tags.map((t, i) => `
            <a href="${proxyRoute}/tags/${t.slug}" key=${i}>
                <button class="tag-btn pure-button pure-button-primary">${t.name}</a>
            </a>
        `).join('');
    };

    const showBlogNav = () => {
        return `<div class="pure-u-1-3">
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-header">${`About ${shop._doc.communityName}`}</div>
                    <div class="community-card-body">Welcome to the home improvement community page! Share your creations with fellow builders, and get inspired for new projects.
                    <hr class="community-hr" />
                    <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}'><button class="pure-button pure-button-primary community-full-width">CREATE POST</button></a>
                    </div>
                </div>
                <div class="community-card">
                    <div class="community-card-header">Choose a Channel</div>
                    <div class="community-card-body">
                        ${showAllTags()}
                    </div>
                </div>
                <div class="community-card">
                    <div class="community-card-header">Community Rules</div>
                    <div class="community-card-body">
                        <ol>
                            <li><strong>Be respectful</strong><br />Treat others how you'd like to be treated!</li>
                            <hr class="community-hr-minimal" />
                            <li><strong>No ads</strong><br />This is an ad-free zone</li>
                            <hr class="community-hr-minimal" />
                            <li><strong>Keepin it clean</strong><br />Use nice words only :)</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>`
    }

    const showUserNav = () => {
        return `<div class="pure-u-1-3">
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-header">${`About ${user.name}`}</div>
                    <img src='${user.cover_photo && user.cover_photo!='undefined' ? user.cover_photo : 'https://mysteryshopperblog.files.wordpress.com/2014/07/mystery-shopper-image.gif'}'
                           alt="Profile Picture" class="img-responsive img-rounded">
                    <div class="community-card-body">
                    <b>General Bio: </b>${user.about}
                    <hr class="community-hr" />
                    <b>Store Favorites: </b>${user.storeFavorites}
                    </div>
                </div>
                <div class="community-card">
                    <div class="community-card-header">Community Rules</div>
                    <div class="community-card-body">
                        <ol>
                            <li><strong>Be respectful</strong><br />Treat others how you'd like to be treated!</li>
                            <hr class="community-hr-minimal" />
                            <li><strong>No ads</strong><br />This is an ad-free zone</li>
                            <hr class="community-hr-minimal" />
                            <li><strong>Keepin it clean</strong><br />Use nice words only :)</li>
                        </ol>
                    </div>
                </div>
            </div>
        </div>`
    }

    return `
        ${user ? showUserNav() : showBlogNav()}
        `
};