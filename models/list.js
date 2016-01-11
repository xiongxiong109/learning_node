var mongoose=require('mongoose');
var ListSchema=require('./schema/listSchema');

var List=mongoose.model('List',ListSchema);

module.exports=List;