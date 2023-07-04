/* GET rooms view. */
const rooms = (req, res) => {
    pageTitle = process.env.npm_package_description + ' | Rooms';
    console.log(process.env);
    res.render('rooms', { title: pageTitle });
};

module.exports = {
    rooms
};
