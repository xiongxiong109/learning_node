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
	},
	//实现mongoose根据名称的模糊查询,mongoose里面是根据正则匹配进行模糊查询的
	findByTitle:function(title,cb){
		var regTitle=new RegExp(title,'gim');
		return this.find({title:regTitle}).exec(cb);
	},
	//特别要注意mongoose的find与findOne差别,find返回的是一个数组,而findOne返回的则是单个json对象
	findById:function(_id,cb){
		return this.findOne({_id:_id}).exec(cb);
	}
});
module.exports=blogSchema;