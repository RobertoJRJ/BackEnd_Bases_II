//Requerimientos de un archivo js llamdo app.js donde tenemos otras configuraciones
var app = require('./app');
var debug = require('debug')('sgabackend:server');
var http = require('http');

//Establece el puerto
app.set('port', process.env.PORT || '3001');

//Variable de conexion
var server = http.createServer(app);

server.listen(app.get('port'));
server.on('error', onError);
server.on('listening', onListening);

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    // manejo de errores con mensajes
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' no posee los privilegios necesarios');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' esta listo para usar');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {

    debug('Listening on ' + app.get('port'));
    console.log("Listening on port " + app.get('port'));
}