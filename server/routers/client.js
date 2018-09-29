/**
 * @file 前端路由
 * @date 2018-09-17
 */
var express = require('express');
var router = express.Router();
// 用模板的方式，服务端渲染
router.get('/user', function (req, res) {
    res.send('user');
});
module.exports = router;
