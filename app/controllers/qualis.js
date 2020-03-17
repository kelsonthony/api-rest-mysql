module.exports.qualis = function(application, req, res) {
    
    var connection = application.config.connectionDB();
    var qualisModel = new application.app.models.QualisDAO(connection);
    
    qualisModel.getQualisAll(function(error, result) {
        res.render("qualis/qualis", { qualis: result });
    });
};

module.exports.issn = function(application, req, res) {
    
    var connection = application.config.connectionDB();
    var id_qualisModel = new application.app.models.QualisDAO(connection);
    
    var issn = req.query;
    
    console.log('id_qualis req.query', req.query);

    id_qualisModel.getQualis(issn, function (error, result) {
        res.render("qualis/issn", { issn: result });
    });

};

// module.exports.issn = function(application, req, res) {
    
//     var connection = application.config.connectionDB();
//     var issnModel = new application.app.models.QualisDAO(connection);
    
//     var issn = req.query;
    
//     console.log('issn req.query', req.query);

//     issnModel.getISSNQualis(issn, function (error, result) {
//         res.render("qualis/issn", { issn: result });
//     });



// };