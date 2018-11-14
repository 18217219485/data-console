/**
 * @file 应用程序的主文件
 * @date 2018-09-17
 */
var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var Cookies = require('cookies');
var User = require('./models/Users');
// 设置静态文件托管
app.use('/public', express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(function(req, res, next) {
  // 全局都需要这个用户的登陆信息，所有路由都可以访问的全局变量
  req.cookies = new Cookies(req, res);
  req.userInfor = {};
  if (req.cookies.get('userInfor')) {
    try{
      req.userInfor = JSON.parse(req.cookies.get('userInfor'));
      // 查询数据库，获取当前用户的用户类型
      User.findById(req.userInfor._id).then(function(userInfor) {
        req.userInfor.isAdmin = Boolean(userInfor.isAdmin);
        next();
      })
    }catch(e){
      next();
    }
  }
  else {
    next();
  }

})
// 设置路由
app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/client'));

// 监听
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true}, function (err) {
    if (err) {
        console.log('数据库连接失败');
    }
	else {
        app.listen({
          host: '127.0.0.1',
          port: 8080
        });
        console.log('数据库连接成功，访问成功');
    }
});
process.on('unhandledRejection', error => {
  // Will print "unhandledRejection err is not defined"
  console.log('unhandledRejection', error.message);
});
