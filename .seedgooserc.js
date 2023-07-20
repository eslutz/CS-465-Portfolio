// .seedgooserc.js
module.exports = {
    modelBaseDirectory: 'app_server/database/models',
    models: [ '*.js' ],
    data: 'app_server/data',
    db: 'mongodb://localhost:27017/travlr'
};
