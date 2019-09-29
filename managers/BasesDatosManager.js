var sql = require('mssql');
var connectionSQL = require('../config/connectionSQL');

exports.Login = async (req) => {
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