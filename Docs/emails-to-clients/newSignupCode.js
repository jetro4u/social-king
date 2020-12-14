{
  shop {
    name
    description
    id
    contactEmail
    email
    features {
      storefront
    }
    plan {
      displayName
      shopifyPlus
      partnerDevelopment
    }
    customerAccounts
  }
}


var contact_add = ac.api("contact/add", {email});

            contact_add.then(function(result) {
                console.log('succesfully added contact',result);

                var eventdata = {
                    tags: 'installed-scraper-king',
                    email
                };

                ac.api('contact/tag/add', eventdata).then(function(result) {
                    console.log('success', result);
                    return res.json({
                        message: `A confirmation email has been sent to ${email}. You may now login.`
                    });
                }, function(err) {
                    console.log('failure', err);
                });     
            }, function(err) {
                  console.log('failure', err);
            });