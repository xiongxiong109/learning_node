var mongoose=require('mongoose');
var blogSchema=require('./schema/blogSchema');

var Blog=mongoose.model('Blog',blogSchema);

module.exports=Blog;