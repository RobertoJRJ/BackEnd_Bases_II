//dependencias
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//RUTAS
var BasesDatosRouter = require('./controllers/BasesDatosController');
var indexRouter = require('./controllers/indexController');
var loginRouter = require('./controllers/loginController');
var FileGroupRouter = require('./controllers/fileGroupController');


var app = express()

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Middleware
app.use((req, res, next) => {
    //ACCESO A CONEXIONES QUE REUIERAN DE ESTA APLICACION
    res.append('Access-Control-Allow-Origin','*');
    res.append('Access-Control-Allow-Methods','POST, PUT, DELETE, OPTIONS');
    res.append('Access-Control-Allow-Headers','Content-Type');
    next();
});

//Utilizamos el index
app.use('/',indexRouter);
//login
app.use('/login', loginRouter);
//Procedmientos para los file group
app.use('/filegroup', FileGroupRouter);
//Procedmientos para las bases de datos
app.use('/BasesDatos', BasesDatosRouter);

module.exports = app;