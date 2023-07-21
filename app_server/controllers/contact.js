const fs = require('fs');
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const contactInfo = JSON.parse(fs.readFileSync('app_server/data/contact.json', 'utf8'));

/* GET contact view. */
const contact = (req, res) => {
    pageTitle = packageJson.description + ' | Contact';
    res.render('contact', { activePage: 'contact', title: pageTitle, contactInfo });
};

module.exports = {
    contact
};
