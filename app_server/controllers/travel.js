/* GET travel view. */
const travel = (req, res) => {
    pageTitle = process.env.npm_package_description + ' | Travel';
    console.log(process.env);
    res.render('travel', { title: pageTitle });
};

module.exports = {
    travel
};
