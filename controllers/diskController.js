var express = require('express');
var router = express.Router();
var diskManager = require('../managers/diskManager');


    router.get('/createDisk', function(req, res, next){
        try{
            diskManager.Login(req.query).then(
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

    router.get('/consultDisk', function(req, res, next){
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