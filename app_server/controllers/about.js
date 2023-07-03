/* GET about view. */
const about = (req, res) => {
    pageTitle = process.env.npm_package_description + ' | About';
    console.log(process.env);
    res.render('about', { title: pageTitle });
};

module.exports = {
    about
};
