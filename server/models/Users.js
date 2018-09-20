/**
 * @file user的模型类
 * @date 2018-09-17
 */
var mongoose = require('mongoose');
var userSchema = require('../schemas/users');
module.exports = mongoose.model('User', userSchema);
