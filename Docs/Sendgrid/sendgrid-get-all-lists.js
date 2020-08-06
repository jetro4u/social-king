const SENDGRID_API_KEY = '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';
const request = require("request");

var options = { method: 'GET',
	url: 'https://api.sendgrid.com/v3/contactdb/lists',
	headers: { authorization: `Bearer ${SENDGRID_API_KEY}` }
};

request(options, function (response) {
	console.log(response);
});

     