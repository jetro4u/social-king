const mongoose = require('mongoose');

const Shop = mongoose.Schema({
	  shopId: Number,
	  shopify_domain: { type: String, 
	  	  unique: true,
          index: true },
	  name: String,
	  domain: String,
	  supportEmail: String,
	  nonce: String,
	  accessToken: String,
	  isActive: { type: Boolean, default: false },
	  // tribe-squared fields
	  shopUrl: String,
	  shopifyToken: String,
	  shopifyScope: String,
	  headerImageURL: { 
            type: String, 
            default: 'https://socialking.app/proxy/images/uploads/community-dev-store.myshopify.com-1597050539511.jpeg' 
        },
	  iconImageURL: { 
            type: String, 
            default: 'https://socialking.app/proxy/images/uploads/community-dev-store.myshopify.com-1597050539510.png' 
        },
	  aboutCommunity: String,
	  communityName: String,
	  primaryColor: String,
	  backgroundColor: String,
	  charge_id:  { 
	  	  type: String, 
	  	  default: '' 
	  },
	  recurring_application_charge: {
  	      type: Array
	  }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Shop', Shop);
