var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var dbconfig=require('./db');
/* 在主页获取新闻时的请求 */
router.get('/', function(req, res, next) {
    var newstype = req.query.newstype;
    //创建连接
    var connection = mysql.createConnection(dbconfig);
    connection.connect();
    //查询
    connection.query('SELECT * FROM news WHERE newstype = ?', [newstype], function(err, rows, fields) {
        res.json(rows);
    })


});

module.exports = router;
