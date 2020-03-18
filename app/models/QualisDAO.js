function QualisDAO(connection){
    this._connection = connection;
}

QualisDAO.prototype.getQualisAll = function(callback){
    this._connection.query('select * from qualis', callback);
}

QualisDAO.prototype.getQualis = function(id_qualis, callback){
    console.log('getQualis id_qualis in QualisDAO', id_qualis.id_qualis);
    this._connection.query('select * from qualis where id_qualis = ' + id_qualis.id_qualis, callback);
}

QualisDAO.prototype.saveQualis = function(id_qualis, callback){
    this._connection.query('insert into qualis set ? ', id_qualis, callback)
}

QualisDAO.prototype.get5LastQualis = function(callback){
    this._connection.query('select * from qualis order by id_qualis desc limit 5', callback);
}

QualisDAO.prototype.getISSNQualis = function(issn, callback){
    console.log('getISSNQualis ISSN in QualisDAO', issn.issn);
    this._connection.query('select * from qualis order by issn = ' + issn.issn, callback);
}

QualisDAO.prototype.saveISSN = function(issn, callback){
    this._connection.query('insert into qualis set ? ', issn, callback)
}

QualisDAO.prototype.get5LastISSN = function(callback){
    this._connection.query('select * from qualis order by issn desc limit 5', callback);
}

module.exports = function(){
    return QualisDAO;
}