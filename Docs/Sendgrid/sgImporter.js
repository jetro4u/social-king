const Importer = require('@sendgrid/contact-importer');
const sg = require('@sendgrid/client');
sg.setApiKey('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');
const importer = new Importer(sg);

importer.push({ email: 'alephmarketingpros@gmail.com' });
importer.on('success', (result, batch) => {
   console.log('success');
});
importer.on('drain', () => {
   console.log('drained');
});