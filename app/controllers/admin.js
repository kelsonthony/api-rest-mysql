module.exports.formulario_inclusao_issn = function(application, req, res){
    res.render("admin/form_add_issn", {validacao : {}, issn : {}});
}

module.exports.qualis_salvar = function(application, req, res){
        //res.render("admin/form_add_issn")
        //res.send('Chegou na página');
        var issn = req.body;
        //res.send(noticias);
        //console.log(noticia)
        //campos obrigatórios no formulário
        req.assert('issn', 'O ISSN é obrigatório').notEmpty();
        req.assert('titulo', 'O Título é obrigatório').notEmpty();
        req.assert('titulo', 'O Resumo deve conter entre 5 e 10 caracteres').len(5, 10);
        req.assert('area_avaliacao', 'A Área de Avaliaçao é obrigatória').notEmpty();
        req.assert('estrato', 'O Estrato é obrigatório').notEmpty();
        
        //req.assert('data_noticia', 'A data é obrigatório').notEmpty().isDate({format: 'DD-MM-YYYY'});
        

        var erros = req.validationErrors();
        //console.log(erros)
        if(erros){
            res.render("admin/form_add_issn", {validacao: erros, issn: issn});
            return;
        }
        
        //recuperar a conexão
        var connection = application.config.connectionDB();
        //recuperar o model
        var qualisModel = new application.app.models.QualisDAO(connection);
        //salvar a issn
        qualisModel.saveQualis(issn, function(error, result){
            res.redirect('/qualis');
        });
}