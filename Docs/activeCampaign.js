var contact_add = ac.api("contact/add", {email});
contact_add.then(function(result) {
    console.log('succesfully added contact',result);

    var eventdata = {
        tags: 'installed-social-king',
        email
    };

    ac.api('contact/tag/add', eventdata).then(function(result) {
        console.log('success', result);
    }, function(err) {
        console.log('failure', err);
    });     
}, function(err) {
    console.log('failure', err);
});
