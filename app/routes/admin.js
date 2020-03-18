module.exports = function(application){
    
    application.get('/formulario_inclusao_issn', function(req, res) {
        application.app.controllers.admin.formulario_inclusao_issn(application, req, res);
    });

    application.post('/qualis/salvar', function(req, res) {
        application.app.controllers.admin.qualis_salvar(application, req, res);
    });

    
};