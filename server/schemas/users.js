/**
 * @file 用户的数据结构
 * @date 2018-09-17
 */
var mongoose = require('mongoose');
// 用户的表结构
module.exports = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: {
      type: Boolean,
      default: false
    }
});
