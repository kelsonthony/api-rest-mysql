module.exports.index = function(application, req, res){
    
    var connection = application.config.connectionDB();
    var qualisModel = new application.app.models.QualisDAO(connection);

    //console.log(connection);

    qualisModel.get5LastQualis(function(error, result){
        //console.log(result);
        res.render("home/index", { qualis: result });
    });

};