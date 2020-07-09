exports.header = ({shop, tag}) => {
    return `
		<header class="community-header">
            <div class="community-header-title">
                <div class="page-width community-header-title-box">
                    <img src="https://styles.redditmedia.com/t5_2qiuc/styles/communityIcon_s6mblzvh8t051.png?width=256&s=851a80f05e1194ee216a999370fe45bdfd2b5010" class="community-icon" />
                    <div class="community-h2">${tag ? "Posts Tagged '"+ tag.name+"'" : 'Home Improvement Community'}</div>
                </div>
            </div>
        </header>
		`
};