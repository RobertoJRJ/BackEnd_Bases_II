var sql = require('mssql');
var connectionSQL = require('../config/connectionSQL');

exports.verBD = async (req) => {
    try {
        let config = {
            user: req.User,
            password: req.Password,
            server: req.Server,
            database: req.BaseDatos,
            port: req.port
        };
        let pool = await sql.connect(connectionSQL);
        let result = await pool.request()
            .output('Resultado', sql.Bit)
            .execute('Ver_BasesDatos');
            
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
            server: 'master',
            database: req.BaseDatos,
            port: req.port
        };
        let pool = await sql.connect(connectionSQL);
        let result = await pool.request()
            .input('Nombre', sql.VarChar(50),  req.Nombre)
            .output('Resultado', sql.Bit)
            .execute('Ver_BasesDatos');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err);
        sql.close();
        return "Error en " + err;
    }
}