//加载express框架
var express = require('express');
//创建express的路由功能
var router = express.Router();
var mysql = require('mysql');
var dbconfig = require('./db');
var moment = require('moment-timezone');
var xss = require('xss');

// 访问mysql  定义pool池
var connection = mysql.createPool(dbconfig);

// 后台路由页面
router.get('/getnews', function(req, res, next) {
    connection.query('SELECT * FROM news order by id desc', function(err, rows) {
        for (i = 0; i < rows.length; i++) {
            //对新闻标题的特殊字符转义
            rows[i]['newstitle']=xss(rows[i]['newstitle']);
            //新闻时间设为国内时间
            rows[i]['newstime'] = moment.tz(rows[i]['newstime'], "Asia/Shanghai").format();
        }
        res.json(rows);
    });
});

//修改模态框取值之后，点击确认更新
router.post('/update', function(req, res) {
    var newsid = req.body.id,
        newstype = req.body.newstype,
        newstitle = req.body.newstitle,
        newsimg = req.body.newsimg,
        newstime = req.body.newstime,
        newssrc = req.body.newssrc;
    connection.query('UPDATE news SET newstitle= ?,newstype= ?,newsimg= ?,newstime= ?,newssrc= ? WHERE  id = ? ', [newstitle, newstype, newsimg, newstime, newssrc, newsid],
        function(err, rows) {
            console.log(rows.changedRows);
            if (err) throw err;
            res.json({ "code": "success" }) //传送JSON响应
        });
});

//修改模态框取值
router.get('/curnews', function(req, res) {
    var newsid = req.query.newsid;
    connection.query('SELECT * FROM news WHERE id = ?', [newsid], function(err, rows) {
        for (i = 0; i < rows.length; i++) {
            rows[i]['newstitle']=xss(rows[i]['newstitle']);
            rows[i]['newstime'] = moment.tz(rows[i]['newstime'], "Asia/Shanghai").format();
        };
        res.json(rows);
    });

});

//删除新闻
router.post('/delete', function(req, res) {
    var newsid = req.body.newsid;
    connection.query('DELETE FROM news WHERE news.id =?', [newsid], function(err, result) {
        console.log(result.affectedRows);
        if (err) throw err;
        res.json({ "code": "success" }) //传送JSON响应
    });
});

//添加新闻
router.post('/insert', function(req, res) {
    var newstype = xss(req.body.newstype),
        newstitle = xss(req.body.newstitle),
        newsimg = xss(req.body.newsimg),
        newstime = xss(req.body.newstime),
        newssrc = xss(req.body.newssrc);
    connection.query('INSERT INTO news (newstitle,newstype,newsimg,newstime,newssrc) VALUES (?,?,?,?,?)', [newstitle, newstype, newsimg, newstime, newssrc], function(err, result) {
        if (err) throw err;
        if (!err) {
            console.log(result.insertId);
            res.json({ "code": "success" }) //传送JSON响应
        }
    });
});

module.exports = router;
