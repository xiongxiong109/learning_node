var seajsTimeStamp=new Date().getTime();
seajs.config({

	alias:{
		"jquery":"/lib/jquery/dist/jquery.min",
		"bootstrap":"/lib/bootstrap/dist/js/bootstrap.min",
		"underscore":"/lib/underscore/underscore-min"
	},
	preload:['jquery'],
	debug:true,
	map:[
		[ /^(.*\.(?:css|js|tpl))(.*)$/i, '$1?v='+seajsTimeStamp ]
	],
	charset:'utf-8'
});