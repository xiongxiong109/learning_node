var config=require('./config/mysql');
var mysql=require('mysql');
var con=mysql.createConnection(config);

module.exports=con;