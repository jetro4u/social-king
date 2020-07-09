const proxyRoute = process.env.PROXY_ROUTE;

exports.navbar = ({shop, tags}) => {

    const showAllTags = () => {
        return tags.map((t, i) => `
            <a href="${proxyRoute}/tags/${t.slug}" key=${i}>
                <button class="tag-btn pure-button pure-button-primary">${t.name}</a>
            </a>
        `).join('');
    };

    return `
        <div class="pure-u-1-3">
            <div class="community-pad-20">
                <div class="community-card">
                    <div class="community-card-header">About Community</div>
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
        </div>
        `
};