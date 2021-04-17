const { defaultCSS } = require('./defaultCSS');

exports.newsFeedCSS = ({shop}) => {
    const backupHeaderImg = "https://www.dorothylane.com/wp-content/uploads/2017/09/cheese.jpg";

    if(!shop || !shop.CSSCode){
    	console.log('ran no shop found logic')
    	return defaultCSS()
    } else {
	    return `${shop.CSSCode}
	             .community-background { background-color: ${shop && shop.backgroundColor ? shop.backgroundColor : 'white' }; }
	             .community-header { background-image: url(${shop && shop.headerImageURL ? shop.headerImageURL : backupHeaderImg}); }
	             .community-card-header { background:${shop && shop.primaryColor ? shop.primaryColor : '#26b598'}; }
	             .community-instant-post { border:1px solid ${shop && shop.backgroundColor ? shop.backgroundColor : '#f6f7f8'}; }
	        `;
	}
};
