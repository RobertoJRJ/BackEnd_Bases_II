var sql = require('mssql');
var connectionSQL = require('../config/connectionSQL');

exports.verBD = async (req) => {
    try {
        let config = {
            user: req.User,
            password: req.Password,
            server: req.Server,
            database: 'master',
            port: req.port
        };
        let pool = await sql.connect(config);
        let result = await pool.request().query("SELECT name, database_id FROM sys.databases");
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err);
        sql.close();
        return "Error en " + err;
    }
}

exports.CrearBD = async (req) => {
    
    try {
        let config = {
            user: req.User,
            password: req.Password,
            server: req.Server,
            database: 'master',
            port: req.port
        };
        let pool = await sql.connect(config);
        let result = await pool.request().query("CREATE DATABASE "+req.Name);
            
        sql.close();
        console.log(req.Name);
        console.log(result);
        return result;

    } catch (err) {
        console.log(err);
        sql.close();
        return "Error en " + err;
    }
}