var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// 使用log4js来保存log日志
var log4js = require('log4js');

// 配置log4
log4js.configure({
  appenders: [
    { type: 'console' }, //控制台输出
    {
      type: 'file', //文件输出
      filename: `logs/access_${new Date().getTime()}.log`, 
      maxLogSize: 1024,
      backups:3,
      category: 'normal' 
    }
  ]
});

var logger = log4js.getLogger('normal');
logger.setLevel('INFO');

/*定义一个新的重定向组,需要在app.js中指定require的js文件,指定的js文件中需要用到express.Router()
并将module.exports=router给暴露出来,然后在app.js中指定app.use('/path',redirectFile);就可以将请求发送到
所指定的文件中处理了。
*/
var routes = require('./routes/index');
var users = require('./routes/users');
var admins=require('./routes/admin');
var practice=require('./routes/practice');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//规定编译出来的html不压缩
app.locals.pretty=true;
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// app.use(logger('dev'));
// 修改log输出
app.use(log4js.connectLogger(logger, {level:log4js.levels.INFO}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/*routes只是一个require过来的js文件,使用app,use('/',routes)方法,可以将path
所对应的请求转向routes所指定的文件。
*/
app.use('/', routes);
app.use('/users', users);
app.use('/admin',admins);
app.use('/practice',practice);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
