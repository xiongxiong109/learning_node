var mongodb=require('../mongodb');
var mongoose=require('mongoose');
var list=require('../list');
var _=require('underscore');
var db=mongoose.connection;

list.find({},function(err,data){
	if(!err){
		console.log(data);
		db.close();
	}
});