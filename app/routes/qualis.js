module.exports = function(application) {

    application.get('/qualis', function(req, res) {
        application.app.controllers.qualis.qualis(application, req, res);
    });

    application.get('/id_qualis', function(req, res) {
        application.app.controllers.qualis.id_qualis(application, req, res);
    });

    application.get('/issn', function(req, res) {
        application.app.controllers.qualis.issn(application, req, res);
    });
    
};