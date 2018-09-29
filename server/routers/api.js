/**
 * @file 前端路由
 * @date 2018-09-17
 */
var express = require('express');
var cookies = require('cookies');
var router = express.Router();
var User = require('../models/Users');
var responseData = {
    code: 0,
    message: ''
};
// 用户注册
router.post('/user/register', function (req, res, next) {
    var username = req.body.username,
        password = req.body.password,
        repassword = req.body.repassword;
    console.log(username, password);
    if (!username || username === 'undefined') {
        responseData.code = 1;
        responseData.message = '用户名不能为空';
        res.json(responseData);
        return next();
    }
    if (!password || password === 'undefined') {
        responseData.code = 2;
        responseData.message = '密码不能为空';
        res.json(responseData);
        return next();
    }
    if (password !== repassword) {
        responseData.code = 3;
        responseData.message = '两次输入的密码不一致';
        res.json(responseData);
        return next();
    }
     // 用户名是否被注册，数据库查询
    User.findOne({
        username: username
    }).then(function (result) {
        if (result) {
            responseData.code = 4;
            responseData.message = '用户名已存在';
            res.json(responseData);
            return next();
        }
        var user = new User({
            username: username,
            password: password
        });
        return user.save();
    }).then(function (newUserInfor) {
        responseData.code = 0;
        responseData.message = '注册成功';
        res.json(responseData);
        return next();
    });
});
// 用户登陆
router.post('/user/login', function (req, res, next) {
    // 查询数据库，输入的用户名是否注册，以及用户名对应的密码是否一致
    var username = req.body.username;
    var password = req.body.password;
    console.log(username, password);
    if (username === '' || password === '') {
        responseData.code = 1;
        responseData.message = '用户名或密码不能为空';
        res.json(responseData);
        return;
    }
    User.findOne({
        username: username,
        password: password
    }).then(function (userInfor) {
        if (!userInfor) {
            responseData.code = 2;
            responseData.message = '用户名或者密码错误';
            res.json(responseData);
            return;
        }
        responseData.code = 0;
        responseData.message = '登陆成功';
        res.json(responseData);
        return;
    });
});
router.post('/user/logout', function (req, res, next) {
});
module.exports = router;
