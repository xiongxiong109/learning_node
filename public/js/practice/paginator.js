define('/js/practice/paginator',['bootstrap','paginator'],
function(require,exports,module){
	var oPage=$(".page");
	//分页配置项
	var options={
		currentPage:oPage.data('curpage'),
		totalPages:oPage.data('total'),
		numberOfPages:oPage.data('number'),
		bootstrapMajorVersion:3,
		onPageClicked: function(e,originalEvent,type,page){
			window.location.href=['/practice/paginator?page=',page].join('');
    }
	};
	require.async(['bootstrap','paginator'],function(){
		oPage.bootstrapPaginator(options);
	});
});