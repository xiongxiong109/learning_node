var con=require('../mysql');
//测试mysql的连接
con.connect();
var testSql='SELECT 2+2 AS solution';
con.query(testSql,function(err,rows,fields){
	console.log(rows[0].solution);
});
con.end();