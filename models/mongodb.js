// 这里主要是提供mongoose的连接
var config=require('../config/mongo');
var mongoose=require('mongoose');
mongoose.connect(config.host,config.db);

module.exports=mongoose;