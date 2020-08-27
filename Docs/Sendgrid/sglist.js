
// var sg = require('sendgrid')('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');

// var sg = require('sendgrid')('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');

// Paid Key
var sg = require('sendgrid')('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');


var request = sg.emptyRequest({
    method: 'GET',
    path: '/v3/contactdb/lists',
    body: {}
  });

sg.API(request, function(error, response) {
    console.log(response.statusCode)
    console.log(response.body)
});

sgMail
  .send(msg)
  .then(() => {
    // Celebrate
  })
  