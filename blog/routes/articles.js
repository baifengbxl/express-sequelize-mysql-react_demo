var express = require('express');
// 使用路由
var router = express.Router();
// 导入模块
var models = require('../models')
// 模糊搜索
var Op = models.Sequelize.Op


// 查找数据, 按照查询字符串来使用， where 设定查询条件
// router.get('/',  async function(req, res, next) {
//   // 搜索条件
//   var where ={}
//   // 模糊查询标题
//   var title = req.query.title
//   if(title){
//     where.title = {
//       // % 表示关键词前后可以连接其他的文字
//       [Op.like]: '%' + title + '%'
//     }
//   }

//   var articles = await models.Article.findAll({
//     order: [["id", "DESC" ]],
//     // 加入搜索条件
//     where: where
//   })
//   res.json({articles: articles})
//   // res.render('index', { articles:articles});
//   console.log(articles)
// });

// 插入数据
// 发送post 请求,往数据库里面插入数据
router.post('/', async function (req, res, next) {
  // 动态的插入数据：
  // res.json({"你发送的内容是：": req.body})
  var articles = await models.Article.create(req.body)
  res.json({articles: articles})


  // 插入死数据
  // var articles = await models.Article.create({
  //   title: "小黑",
  //   context: "小黑很帅"
  // })

  // res.json({articles: articles})
})


// 查找数据
// req： 请求 res,： 响应 next： 下一个中间件
router.get('/',  async function(req, res, next) {
  // render, 渲染index模板 ，对应view/index.ejs,  具体内容：{ title: 'Express' }
  // res.render('index', { title: 'ITfunnnn' });

  // 让响应是一个json文件
  // res.json({hello: "world "})

  // 导出数据库的内容, 一个模型对应一张表
  // models.Article.findAll().then(articles => {
  //   res.json({articles: articles})
  // })

  // 2 使用async函数，并设置排序规则,查找数据库的内容
  var articles = await models.Article.findAll({
    order: [["id", "ASC" ]]
  })
  res.json(articles)
  
  // 模板渲染
  //  res.render('article', { 
	//           title: 'express测试',
	//           data:articles 
  //  });
  // console.log(articles)
});





// 按照主键id查找文章
// router.get('/:id', async function (req, res, next){
//   var articles = await models.Article.findByPk(req.params.id)
//   res.json({articles: articles})
// })


// 修改数据
// router.put('/:id', async function (req, res, next){
//   var articles = await models.Article.findByPk(req.params.id)
//   articles.update(req.body)
//   res.json({articles: articles})
// })



// 删除数据
// router.delete('/:id', async function(req, res, next){
//   var article = await models.Article.findByPk(req.params.id)
//   article.destroy()
//   res.json({msg: 'delete success !!'})
// })


module.exports = router;