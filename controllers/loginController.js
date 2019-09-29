var express = require('express');
var router = express.Router();
var loginManager = require('../managers/loginManager');


    router.get('/login', function(req, res, next){
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

    router.get('/prueba', function(req, res, next){
        try{
            loginManager.Prueba(req.query).then(
                (data) => {
                    let response = {
                        content: data.recordset,
                        success: data.output,
                        code: 200
                    };
                    res.send(JSON.stringify(response));
                    console.log(response)
                }
            );
        }
        catch (err) {
            let response = {
                content: err,
                code: 500
            };
            res.send(JSON.stringify(response));
            console.log(response)
        }
        
    })

    module.exports = router;   