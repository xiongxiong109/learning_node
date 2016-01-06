define('/js/practice/paginator',['bootstrap','paginator'],
function(require,exports,module){
	//分页配置项
	var options={
		currentPage:2,
		totalPages:5,
		numberOfPages:5
	};
	require.async(['bootstrap','paginator'],function(){
		$(".page").bootstrapPaginator(options);
	});
});