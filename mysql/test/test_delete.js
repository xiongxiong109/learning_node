var con=require('../mysql');
process.stdout.write('please input the id of the row you wanna delete:\n');
process.stdin.resume();
process.stdin.on('data',function(chunk){
	var id=parseInt(chunk);
	var deleteSql='DELETE from `test_table` WHERE `id`='+id;
	con.connect();
	con.query(deleteSql,function(err,res){
		if(err)throw err;
		if(res.affectedRows){
			console.log('you have successfully deleted a row from the table');
		}else{
			console.log('sorry,but we didn\'t find the row with the id you input');
		}
		process.stdin.end();
	});
	con.end();
});
