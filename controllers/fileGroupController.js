var express = require('express');
var router = express.Router();
var fileGroupManager = require('../managers/fileGroupManager');


    router.get('/createFileGroup', function(req, res, next){
        try{
            fileGroupManager.CreateFileGroup(req.query).then(
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

    router.get('/consultFileGroup', function(req, res, next){
        try{
            fileGroupManager.CreateFileGroup(req.query).then(
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