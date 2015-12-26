var express=require('express');
var mongoose=require('mongoose');
var Blog=require('../models/blog');
var router=express.Router();

//登录页
router.get('/login',function(req,res){
	//先判断cookie,如果cookie中有了name,就直接登录
	if(req.cookies.name){
		res.redirect('/admin/write');
	}
	else{
		res.render('admin/login',{'title':'login'});
	}
});

router.post('/loginCheck',function(req,res){
	//否则再走登录流程
	var admin={
		name:'熊熊',
		pwd:'123456'
	}
	if(req.body.username==admin.name && req.body.password==admin.pwd){
		if(req.body.save=='on'){//开启记录
			res.cookie('name',req.body.username,{maxAge:5*24*60*60*1000});
		}
		else{
			res.cookie('name',req.body.username,{maxAge:60*1000});
		}
		//登录成功进入写文章页面
		res.redirect('/admin/write');
	}
	else{
		res.redirect('/admin/login');
	}
});
// 文章录入页
router.get('/write',function(req,res){
	if(req.cookies.name){//如果已经登录
		res.render('admin/write',{'title':'写博客'});
	}
	else{//否则回到列表页
		res.redirect('/blog');
	}
});
//文章录入页提交
router.post('/write',function(req,res){
	var json={
		title:req.body.title,
		content:req.body.content
	}
	Blog.create(json,function(err){
		if(!err){
			console.log('blog has been created');
			res.redirect('/blog');
		}
	});
});
module.exports=router;