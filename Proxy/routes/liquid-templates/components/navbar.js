const proxyRoute = process.env.PROXY_ROUTE;
const {formatQuotes} = require('../../helpers/formatQuotes');
const {translations} = require('../../helpers/translations')

exports.navbar = ({shop, tags, user, adminArea}) => {

    const showAllTags = () => {
        return tags.map((t, i) => `
            <a href="${proxyRoute}/tags/${t.slug}" key=${i} >
                    <button class="tag-btn pure-button pure-button-primary community-full-width">
                        ${t.name}
                    </button>
            </a>
        `).join('');
    };

    const showBlogNav = () => {
        let baseURL = shop ? (shop.shopify_domain+proxyRoute) :'social-king-app.myshopify.com'+proxyRoute

        return `<div class="pure-u-md-1-3 pure-u-sm-1"> 
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-header">${`${translations['About'][shop ? shop._doc.language : 'English']} ${shop ? shop._doc.communityName : 'Our Community'}`}</div>
                    <div class="community-card-body">${shop ? shop._doc.aboutCommunity : 'A Space to Bond'}
                    <hr class="community-hr" />

                      {% if customer.email %} 
                            <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/create-new-post'><button class="tag-btn pure-button pure-button-primary community-full-width">${translations['CreatePost'][shop ? shop.language : 'English']}</button></a>
                            <br><br>
                            <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/settings'><button class="tag-btn pure-button pure-button-primary community-full-width">${translations['Settings'][shop ? shop.language : 'English']}</button></a>
                        {% else %}
                             <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/settings'><button class="tag-btn pure-button pure-button-primary community-full-width">${translations['SignUp'][shop ? shop.language : 'English']}</button></a>
                            <br><br>
                            <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/create-new-post'><button class="tag-btn pure-button pure-button-primary community-full-width">${translations['CreatePost'][shop ? shop.language : 'English']}</button></a>
                        {% endif %}    

                    </div>
                </div>
                <div class="community-card">
                    <div class="community-card-header">${translations['ChooseAChannel'][shop ? shop.language : 'English']}</div>
                    <div class="community-card-body">
                        ${showAllTags()}
                    </div>
                </div>
            </div>
        </div>`
    }

    const showUserNav = () => {
        return `<div class="pure-u-md-1-3 pure-u-sm-1">
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-header">${`${translations['About'][shop ? shop._doc.language : 'English']} ${user.name}`}</div>
                    <img width='100%' src='${user.cover_photo && user.cover_photo!='undefined' ? user.cover_photo : 'https://socialking.app/proxy/images/uploads/social-king-app.myshopify.com-1603702989629.jpeg'}'
                           alt="Profile Picture" class="img-responsive img-rounded">
                    <div class="community-card-body">
                    ${user.about ? '<b>'+translations['GeneralBio'][shop ? shop._doc.language : 'English'] +':</b> '+ user.about : ''}
                    <hr class="community-hr" />
                    <b>${translations['StoreFavorites'][shop ? shop._doc.language : 'English']}: </b>${user.storeFavorites}
                    </div>
                </div>
                <div class="community-card">
                    <div class="community-card-header">${`${translations['About'][shop ? shop._doc.language : 'English']} ${shop._doc.communityName}`}</div>
                    <div class="community-card-body">${shop._doc.aboutCommunity}
                    <hr class="community-hr" />
                        {% if customer.email %} 
                            <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/create-new-post'><button class="tag-btn pure-button pure-button-primary community-full-width">${translations['CreatePost'][shop ? shop.language : 'English']}</button></a>
                            <br><br>
                            <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/settings'><button class="tag-btn pure-button pure-button-primary community-full-width">${translations['Settings'][shop ? shop.language : 'English']}</button></a>
                        {% else %}
                             <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/settings'><button class="tag-btn pure-button pure-button-primary community-full-width">${translations['SignUp'][shop ? shop.language : 'English']}</button></a>
                            <br><br>
                            <a href='https://${shop.shopify_domain+proxyRoute}/user/profile?email={{ customer.email }}&name={{ customer.name }}&hash={{ customer.email | append: "somecrazyhash" | md5 }}#/create-new-post'><button class="tag-btn pure-button pure-button-primary community-full-width">${translations['CreatePost'][shop ? shop.language : 'English']}</button></a>
                        {% endif %}     
                    </div>
                </div>
            </div>
        </div>`
    }

    const showUserAdminNav = () => {
        return `
        <div id="community-navbar" class="pure-u-md-1-3 pure-u-sm-1">
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-header">${`${translations['Welcome'][shop ? shop.language : 'English']} ${formatQuotes(user.name)}`}</div>
                    <div id="the-community-options" class="community-card-body">
                   
                          <a ng-click='clickedNewPostTab()' ui-sref="create-new-post">
                            <button class="tag-btn pure-button pure-button-primary community-full-width">
                                ${translations['CreateNewPost'][shop ? shop.language : 'English']}
                            </button>
                          </a>
                            </br>
                            <a ng-click='clickedManagePostsTab()' ui-sref="manage-posts">
                                <button class="tag-btn pure-button pure-button-primary community-full-width">
                                    ${translations['ManagePosts'][shop ? shop.language : 'English']}
                                </button>
                            </a>
                            </br>
                            <a ng-click='clickedSettingsTab()' ui-sref="settings">
                                <button class="tag-btn pure-button pure-button-primary community-full-width">
                                    ${translations['Settings'][shop ? shop.language : 'English']}
                                </button>
                            </a>
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
        if(!shop.shopify_domain.includes('beforestores')){
          return showBlogNav()
        } else {
          return ''
        }
    }
};