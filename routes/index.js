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
	Blog.fetch(function(err,data){
		if(!err){
			res.render('blog',{list:data});
		}
	});
});

module.exports = router;