var express = require('express');
var router = express.Router();
var loginManager = require('../managers/BasesDatosManager');

    router.get('/verBasesDatos', function(req, res, next){
        try{
            loginManager.Login(req.query).then(
                (data) => {
                    let response = {
                        content: data.recordset,
                        success: data.output,
                        code: 200
                    };
                    res.send(JSON.stringify(response));
                }
            );
        }
        catch (err) {
            let response = {
                content: err,
                code: 500
            };
            res.send(JSON.stringify(response));
        }
        
    })
    
    module.exports = router;