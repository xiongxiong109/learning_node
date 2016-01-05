var express=require('express');
var router=express.Router();

router.get('/bs_select',function(req,res){
	res.render('practice/select',{'value':'犯罪'});
});

module.exports=router;