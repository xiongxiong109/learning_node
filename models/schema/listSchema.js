var mongoose=require('mongoose');
//新建列表模型
var ListSchema=mongoose.Schema({
	title:{type:String,default:'熊'}
});

ListSchema.static({
	findByPage:function(obj,cb){
		var pageNumber=obj.page.num || 1;
		var resultPerPage=obj.page.limit || 10;

		var skipFrom=(pageNumber*resultPerPage)-resultPerPage;
		return this
					.find({})
					.sort('time')
					.skip(skipFrom)
					.limit(resultPerPage)
					.exec(cb);
	}
});

module.exports=ListSchema;