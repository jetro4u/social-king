
const emailType = emailBody.type;
const timestamp = parseInt(emailBody.time_sent);
const listId = Settings.listId;
const secondsInDay = 86400;
const timeElapsed = (Date.now() - timestamp) / 1000;

// Confirm email type is opt in and link has been clicked within 1 day
if (emailType == optIn && timeElapsed < secondsInDay) {
  var request = sg.emptyRequest({
    method: 'POST',
    path: '/v3/contactdb/recipients',
    body: customFields
  });

  sg.API(request, function(error, response) {
      console.log(response.statusCode)
      console.log(response.body)
      console.log(response.headers)

      if (listId) {
        var contactID = JSON.parse(response.body.toString()).persisted_recipients[0];     
        var request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/contactdb/lists/' + listId + '/recipients/' + contactID,
          body: customFields
        });
        sg.API(request, function(error, response) {
            console.log(response.statusCode)
            console.log(response.body)
            console.log(response.headers)

            callback();
        });
      } else {
        callback();
      }
    });
  } else {
    callback();
  }