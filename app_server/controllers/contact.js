const packageJson = require('../../package.json');

/* GET contact view. */
const contact = (req, res) => {
    pageTitle = packageJson.description + ' | Contact';
    console.log(process.env);
    res.render('contact', { title: pageTitle });
};

module.exports = {
    contact
};
