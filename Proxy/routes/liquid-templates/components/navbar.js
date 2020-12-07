const proxyRoute = process.env.PROXY_ROUTE;

exports.navbar = ({shop, tags, user, adminArea}) => {

    const showAllTags = () => {
        return tags.map((t, i) => `
            <a href="${proxyRoute}/tags/${t.slug}" key=${i}
                class="pure-button tag-btn">${t.name}
            </a>
        `).join('');
    };

    const showBlogNav = () => {
        let baseURL = shop ? (shop.shopify_domain+proxyRoute) :'social-king-app.myshopify.com'+proxyRoute

        return `<div class="pure-u-md-1-3 pure-u-sm-1"> 
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-header">${`About ${shop ? shop._doc.communityName : 'Our Community'}`}</div>
                    <div class="community-card-body">${shop ? shop._doc.aboutCommunity : 'A Space to Bond'}
                    <hr class="community-hr" />
                    <a href='https://${baseURL}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}'><button class="pure-button pure-button-primary community-full-width">CREATE POST</button></a>
                    <br/>
                    <br/>
                    <a href='https://${baseURL}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}&#/settings'><button class="pure-button pure-button-primary community-full-width">SETTINGS</button></a>
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
                    <img width='100%' src='${user.cover_photo && user.cover_photo!='undefined' ? user.cover_photo : 'https://mysteryshopperblog.files.wordpress.com/2014/07/mystery-shopper-image.gif'}'
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
                   
                          <a class='pure-button tag-btn' ng-click='clickedNewPostTab()' ui-sref="create-new-post">Create New Post</a>
                            </br>
                            <a class='pure-button tag-btn' ng-click='clickedManagePostsTab()' ui-sref="manage-posts">Manage Posts</a>
                            </br>
                            <a class='pure-button tag-btn' ng-click='clickedSettingsTab()' ui-sref="settings">Settings</a>
                            </br>
                            <a class='pure-button tag-btn' href="${proxyRoute}/blogs">Back To Newsfeed</a>
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