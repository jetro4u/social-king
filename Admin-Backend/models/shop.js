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
	  iconImageURL: String,
	  headerImageURL: String,
	  aboutCommunity: String,
	  communityName: String,
	  primaryColor: String,
	  backgroundColor: String,
	  charge_id:  { 
	  	  type: String, 
	  	  default: '' 
	  }
  },
  { timestamps: true }
);

module.exports = mongoose.model('Shop', Shop);
