var express = require('express');
var router = express.Router();
var mongo=require('../models/mongodb');
var Blog=require('../models/blog');
/* GET home page. */
router.get('/', function(req, res, next) {
	var json={
		title:'Nodejs',
		link:'/blog'
	}
  res.render('index', json);
});

//文章列表页
router.get('/blog',function(req,res){
	var searchValue=req.query.search;
	if(!searchValue){//默认查询所有数据
		Blog.fetch(function(err,data){
			if(!err){
				res.render('blog',{list:data});
			}
			else{
				res.render('error',{error:error});
			}
		});
	}else{//模糊查询
		Blog.findByTitle(searchValue,function(err,list){
			if(!err){
				res.render('blog',{list:list});
			}
		});
	}
});

//文章详情页
router.get('/blog/:id',function(req,res){
	var _id=req.params.id;
	Blog.findById(_id,function(err,list){
		if(!err){
			res.render('blog_detail',{data:list})
		}
	});
});
module.exports = router;