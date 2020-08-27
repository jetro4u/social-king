var http = require("https");

// Paid Key Test 2



var options = {
  "method": "POST",
  "hostname": "api.sendgrid.com",
  "port": null,
  "path": "/v3/contactdb/recipients",
  "headers": {
    "authorization": "Bearer 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",
    "content-type": "application/json"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(JSON.stringify([ { email: 'example@example.com',
    first_name: '',
    last_name: 'User',
    age: 25 },
  { email: 'example2@example.com',
    first_name: 'Example',
    last_name: 'User',
    age: 25 } ]));
req.end();