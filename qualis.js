var http = require('http');

var server = http.createServer( function(req, res) {
    
    var qualisJournal= req.url;
    
    if(qualisJournal == '/issnNumber') {
        res.end("<html><body>Qualis ISSN</body></html>");
    
    } else if (qualisJournal == '/tituloTitle') {
        res.end("<html><body>Qualis Tìtulo</body></html>");
    
    } else if (qualisJournal == '/area_avaliacaoArea') {
        res.end("<html><body>Qualis Area</body></html>");
    
    } else if (qualisJournal == '/estratoIndex') {
        res.end("<html><body>Qualis Estrato</body></html>");
    
    } else {
        res.end("<html><body>Portal de Qualis</body></html>");
    }

    

});

server.listen(4000);