const SENDGRID_API_KEY = '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';
const request = require("request");

      var options = { method: 'POST',
        url: 'https://api.sendgrid.com/v3/contactdb/lists/{list_id}/recipients',
        headers: { authorization: `Bearer ${SENDGRID_API_KEY}` },
        body: '{"contacts":[{"email": "kramer1346@gmail.com","unique_name":"myName"}]}' };

      request(options, function () {
      });

      