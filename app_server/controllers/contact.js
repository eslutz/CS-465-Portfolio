/* GET contact view. */
const contact = (req, res) => {
    pageTitle = process.env.npm_package_description + ' | Contact';
    console.log(process.env);
    res.render('contact', { title: pageTitle });
};

module.exports = {
    contact
};
