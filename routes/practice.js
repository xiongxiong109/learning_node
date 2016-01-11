var express=require('express');
var mongoose=require('mongoose');
var router=express.Router();

router.get('/bs_select',function(req,res){
	res.render('practice/select',{'value':'犯罪'});
});

router.get('/paginator',function(req,res){
	//通过?page=id获取查询参数
	var p=req.query.page || 1;
	var len=0,limit=5;
	var list=require('../models/list');
	list.find({},function(err,total){
		if(err) throw new Error(err);
		len=total.length;
		var maxP=Math.ceil(len/limit);
		p = p>=maxP ? maxP : p;
		
		//查询所有数据到视图中
		var options={
			page:{
				num:p,
				limit:limit
			}
		}
		list.findByPage(options,function(err,data){
			if(err) throw new Error(err);
			res.render('practice/paginator',{
				data:data,
				totalPage:maxP,
				curPage:p,
				number:limit
			});
		});

	})
});
module.exports=router;