var mongoose=require('../mongodb');
var list=require('../list');
var db=mongoose.connection;
var _=require('underscore');

var totalNum=50;
var _after=_.after(totalNum,showSuccess);
function showSuccess(){
	console.log('create success');
	db.close();
}

for(var i=0;i<totalNum;i++){
	list.create({
		title:['标题',i].join('')
	},function(err){
		if(!err){
			_after();
		}
	});
}