var mongodb=require('../mongodb');
var mongoose=require('mongoose');
var ListModel=require('../list');
var _=require('underscore');
var db=mongoose.connection;

// 清空数据库
ListModel.remove({},function(err){
	if(!err){
		console.log('remove succeed');
		db.close();
	}
})