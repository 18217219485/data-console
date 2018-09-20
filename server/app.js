/**
 * @file 应用程序的主文件
 * @date 2018-09-17
 */
var express = require('express');
var swig = require('swig');
var mongoose = require('mongoose');
var app = express();
// 设置静态文件托管
app.use('/public', express.static(__dirname + '/public'));

// 配置应用模板,定义模板引擎
app.engine('html', swig.renderFile);

// 设置模板文件存放目录
app.set('views', './views');

// 注册所使用的模板引擎，第一个参数必须是view engine
app.set('view engine', 'html');

// 开发过程需要去掉模板的缓存
swig.setDefaults({cache: false});

app.use('/admin', require('./routers/admin'));
app.use('/api', require('./routers/api'));
app.use('/', require('./routers/client'));

// 监听
mongoose.connect('mongodb://localhost/blog', {useNewUrlParser: true}, function (err) {
    if (err) {
        console.log('数据库连接失败');
    }
	else {
        console.log('数据库连接成功');
        app.listen(8081);
    }
});

