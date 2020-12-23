var express = require('express');
// 使用路由
var router = express.Router();
var models = require('../models')

/* GET home page. */
// req： 请求 res,： 响应 next： 下一个中间件
router.get('/', function(req, res, next) {
  // render, 渲染index模板 ，对应view/index.ejs,  具体内容：{ title: 'Express' }
  res.render('index', { title: 'ITfun' });
});


module.exports = router;
