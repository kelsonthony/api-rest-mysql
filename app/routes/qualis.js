module.exports = function(application) {

    application.get('/qualis', function(req, res) {
        application.app.controllers.qualis.qualis(application, req, res);
    });

    application.get('/issn', function(req, res) {
        application.app.controllers.qualis.issn(application, req, res);
    });

    // application.get('/issn', function(req, res) {
    //     application.app.controllers.qualis.issn(application, req, res);
    // });
    
};