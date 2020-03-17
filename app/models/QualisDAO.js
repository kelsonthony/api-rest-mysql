function QualisDAO(connection){
    this._connection = connection;
}

QualisDAO.prototype.getQualisAll = function(callback){
    this._connection.query('select * from qualis', callback);
}

QualisDAO.prototype.getQualis = function(id_qualis, callback){
    console.log('id_qualis', id_qualis.id_qualis);
    this._connection.query('select * from qualis where id_qualis = ' + id_qualis.id_qualis, callback);
}

QualisDAO.prototype.saveQualis = function(issn, callback){
    this._connection.query('insert into qualis set ? ', issn, callback)
}

QualisDAO.prototype.get5LastQualis = function(callback){
    this._connection.query('select * from qualis order by id_qualis desc limit 5', callback);
}

//new methods here
QualisDAO.prototype.getISSNQualis = function(callback){
    this._connection.query('select * from qualis order by issn', callback);
}

QualisDAO.prototype.getISSN = function(issn, callback){
    console.log('issn here', issn.issn);
    this._connection.query('select * from qualis where issn = ' + issn.issn, callback);
}

module.exports = function(){
    return QualisDAO;
}