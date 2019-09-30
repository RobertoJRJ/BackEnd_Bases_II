var sql = require('mssql');

exports.CrearDisk = async (req) => {
    try {
        let config = {
            user: req.User,
            password: req.Password,
            server: req.Server,
            database: req.BaseDatos,
            port: req.port
        };
        let pool = await sql.connect(config);
        let result = await pool.request()
            .output('Resultado', sql.Bit)
            .execute('Crear_Disco');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err);
        sql.close();
        return "Error en " + err;
    }

    
}

exports.ConsultarDisk = async (req) => {
    try {
        let config = {
            user: req.User,
            password: req.Password,
            server: req.Server,
            database: req.BaseDatos,
            port: req.port
        };
        let query = "select mf.growth, mf.name, mf.max_size from" +
                    "sys.master_files mf where mf.database_id" + "8"
        let pool = await  execution(config, query);
        let result = await pool.request()
            .output('Resultado', sql.Bit)
            .execute('Crear_Disco');
            
        sql.close();
        console.log(result);
        return result;

    } catch (err) {
        console.log(err);
        sql.close();
        return "Error en " + err;
    }

    
}