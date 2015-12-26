// 建立某一个数据模型
var mongoose=require('mongoose');
// 文章数据模型
var blogSchema=mongoose.Schema({
	title:{type:String,default:'无标题'},
	content:{type:String,default:'暂时没有相关内容'},
	createTime:{type:String}
});

blogSchema.static({
	fetch:function(cb){
		return this.find({}).sort('createTime').exec(cb);
	}
});
module.exports=blogSchema;