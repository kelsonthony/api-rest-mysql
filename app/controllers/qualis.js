module.exports.qualis = function(application, req, res) {
    
    var connection = application.config.connectionDB();
    var qualisModel = new application.app.models.QualisDAO(connection);
    
    qualisModel.getQualisAll(function(error, result) {
        res.render("qualis/qualis", { qualis: result });
    });
};

module.exports.id_qualis = function(application, req, res) {
    
    var connection = application.config.connectionDB();
    var id_qualisModel = new application.app.models.QualisDAO(connection);
    
    var id_qualis = req.query;
    
    console.log('id_qualis in qualis controller req.query', req.query);

    id_qualisModel.getQualis(id_qualis, function (error, result) {
        res.render("qualis/id_qualis", { id_qualis: result });
    });

};


module.exports.issn = async function(application, req, res) {
    
    var connection = application.config.connectionDB();
    var issnModel = new application.app.models.QualisDAO(connection);
    
    var issn = req.query;
    
    console.log('ISSN in qualis controller req.query', req.query);

    await issnModel.getISSNQualis(issn, function (error, result) {
        res.render("qualis/issn", { issn: result });
    });

    // await issnModel.getISSNQualis(issn)
	// .then (function (error, result) {
    //     res.render("qualis/issn", { issn: result });
    // });

};