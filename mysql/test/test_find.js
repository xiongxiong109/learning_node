var con=require('../mysql');

con.connect();
var selectSql='SELECT * FROM `test_table` WHERE `name` like "%熊%"';
con.query(selectSql,function(err,res){
	if(err)throw err;
	console.log(res);
});
con.end();