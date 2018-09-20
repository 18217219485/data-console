/**
 * @file 后端路由
 * @date 2018-09-17
 */
var express = require('express');
var router = express.Router();
router.get('/user', function (req, res, next) {
    res.send('admin user');
});
module.exports = router;