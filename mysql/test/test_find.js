var con=require('../mysql');

con.connect();
var selectSql='SELECT * FROM `test_table`';
con.query(selectSql,function(err,res){
	if(err)throw err;
	console.log(res);
});
con.end();