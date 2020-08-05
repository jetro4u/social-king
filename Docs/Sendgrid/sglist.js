var sg = require('sendgrid')('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');

var request = sg.emptyRequest({
    method: 'GET',
    path: '/v3/scopes',
    body: {}
  });

sg.API(request, function(error, response) {
    console.log(response.statusCode)
    console.log(response.body)
    console.log(response.headers)
});

