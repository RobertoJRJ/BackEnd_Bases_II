var sql = require('mssql');
var connectionSQL = require('../config/connectionSQL');

exports.Login = async (req) => {
    try {
        let config = {
            user: req.User,
            password: req.Password,
            server: req.Server,
            database: 'master',
            port: req.port
        };
        let pool = await sql.connect(config);
        let result = await pool.request()
            .output('Resultado', sql.Bit)
            .execute('CONECTADO');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err);
        sql.close();
        return "Error en " + err;
    }
}

exports.Prueba = async (req) => {
    try {
        let pool = await sql.connect(connectionSQL);
        let result = await pool.request().query("select mf.growth, mf.name, mf.max_size from sys.master_files mf where mf.database_id = 8");
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err);
        sql.close();
        return "Error en " + err;
    }
}