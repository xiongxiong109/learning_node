// nodejs操作mysql综合示例(利用async组织代码);
/*
用户输入任意name,先查询数据库,
如果数据库中已有name相关的row,则提示有,
如果查到字段内容完全相同,则提示查到完全相同的结果,并删除该结果,
如果只查到部分相同的结果,则提示只有模糊查询结果,并更新该模糊查询的结果
如果木有,则提示木有,并插入
*/
// var con=require('../mysql');
var con=require('../mysql');
var async=require('async');

process.stdin.resume();
process.stdout.write('Please input any name you wanna query:\n');

process.stdin.on('data',function(chunk){
	var name=chunk.toString().replace(/\n|\r/g,'');
	runQuery(name);
	process.stdin.end();
});

function runQuery(name){
	con.connect();
	var querySql='SELECT * FROM `test_table` WHERE `name`="'+name+'"';
	var likeLyQuerySql='SELECT * FROM `test_table` WHERE `name` like "%'+name+'%" ';
	var insertSql='INSERT INTO `test_table`(name) VALUES("'+name+'")';
	var deleteSql='DELETE FROM `test_table` WHERE `name`="'+name+'"';
	var updateSql='UPDATE `test_table` SET `name`="'+name+'" WHERE `name` like "%'+name+'%"';//(like,=)
	con.query(querySql,function(err,res){//精确查询
		if(err)throw err;
		if(!res.length){
			con.query(likeLyQuerySql,function(err,res){//模糊查询
				if(err)throw err;
				if(!res.length){//模糊查询也没有结果,插入
					con.query(insertSql,function(err,res){
						if(err)throw err;
						console.log('no result,we have inserted');
						con.end();
					});
				}else{
					con.query(updateSql,function(err,res){//更新
						if(err)throw err;
						console.log('we got some likely results and updated them to the value you input');
						con.end();
					});
				}
			});
		}else{//删除精确结果
			con.query(deleteSql,function(err,res){
				if(err)throw err;
				console.log('we found the row you wanna get,and removed it from the database, haha');
				con.end();
			});
		}
	});
}
