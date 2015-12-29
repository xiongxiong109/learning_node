var con=require('../mysql');
process.stdout.write('pls ipt the name u wanna insert:\n');
process.stdin.resume();
process.stdin.on('data',function(chunk){
	insertValue(chunk);
	process.stdin.end();
});

function insertValue(str){
	str=str.toString().replace(/\n|\r/g,'');
	con.connect();
	var insertSql=['INSERT INTO `test_table`(name) VALUES("',str,'")'].join('');
	con.query(insertSql,function(err,res){
		if(err)throw err;
		console.log(['the value ',str,' has beed inserted,id:',res.insertId].join(''));
	});
	con.end();
}
