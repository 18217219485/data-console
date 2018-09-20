/**
 * @file 项目中的接口
 * @date 2018-09-17
 */
var express = require('express');
var router = express.Router();
router.get('/user', function (req, res, next) {
    res.send('api user');
});
module.exports = router;