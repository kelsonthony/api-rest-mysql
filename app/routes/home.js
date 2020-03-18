module.exports = function (application) {
    application.get('/', function (req, res) {
        application.app.controllers.home.index(application, req, res);
    });

    // application.get('/issn', function (req, res) {
    //     application.app.controllers.home.issn(application, req, res);
    // });
    
};
