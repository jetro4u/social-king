const proxyRoute = process.env.PROXY_ROUTE;

exports.navbar = ({shop, tags, user, adminArea}) => {

    const showAllTags = () => {
        return tags.map((t, i) => `
            <a href="${proxyRoute}/tags/${t.slug}" key=${i}
                class="tag-btn pure-button pure-button-primary">${t.name}
            </a>
        `).join('');
    };

    const showBlogNav = () => {
        return `<div class="pure-u-md-1-3 pure-u-sm-1"> 
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-header">${`About ${shop._doc.communityName}`}</div>
                    <div class="community-card-body">${shop._doc.aboutCommunity}
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
        return `<div class="pure-u-md-1-3 pure-u-sm-1">
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-header">${`About ${user.name}`}</div>
                    <img src='${user.cover_photo && user.cover_photo!='undefined' ? user.cover_photo : 'https://mysteryshopperblog.files.wordpress.com/2014/07/mystery-shopper-image.gif'}'
                           alt="Profile Picture" class="img-responsive img-rounded">
                    <div class="community-card-body">
                    ${user.about ? '<b>General Bio: </b>'+ user.about : ''}
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

    const showUserAdminNav = () => {
        return `
        <div class="pure-u-md-1-3 pure-u-sm-1">
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-header">${`Welcome ${user.name}`}</div>
                    <div class="community-card-body">
                   
                          <a class='tag-btn pure-button pure-button-primary' ui-sref="create-new-post">Create New Post</a>
                            </br>
                            <a class='tag-btn pure-button pure-button-primary' ui-sref="manage-posts">Manage Posts</a>
                            </br>
                            <a class='tag-btn pure-button pure-button-primary' ng-click='clickedSettingsTab()' ui-sref="settings">Settings</a>
                            </br>
                            <a class='tag-btn pure-button pure-button-primary' href="${proxyRoute}/blogs">Browse Tribe Chatter</a>
                   
                     <hr class="community-hr" />
                    
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

    if(adminArea){
        return showUserAdminNav();
    } else if(user){
        return showUserNav()
    } else {
        return showBlogNav()
    }
};