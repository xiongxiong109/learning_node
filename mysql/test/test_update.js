var con=require('../mysql');
var updateSql="UPDATE `test_table` set `name`='hacker' WHERE `name` like '%熊%'";
con.connect();
con.query(updateSql,function(err,res){
	if(err)throw err;
	console.log('Hah, your database has been hacked');
});
con.end();