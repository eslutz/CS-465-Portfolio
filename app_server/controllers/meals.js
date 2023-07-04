/* GET meals view. */
const meals = (req, res) => {
    pageTitle = process.env.npm_package_description + ' | Meals';
    console.log(process.env);
    res.render('meals', { title: pageTitle });
};

module.exports = {
    meals
};
