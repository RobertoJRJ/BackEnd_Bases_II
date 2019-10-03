var sql = require('mssql');

exports.CreateFileGroup = async (req) => {
    try {
        let config = {
            user: req.User,
            password: req.Password,
            server: req.Server,
            database: req.BaseDatos,
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

exports.ShowFileGroup = async (req) => {
    try {
        let config = {
            user: req.User,
            password: req.Password,
            server: req.Server,
            database: req.BaseDatos,
            port: req.port
        };
        let pool = await  execution(config);
        let result = await pool.request().query("select mf.growth, mf.name, mf.max_size from sys.master_files mf where mf.database_id = "+req.id);            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err);
        sql.close();
        return "Error en " + err;
    }

    
}