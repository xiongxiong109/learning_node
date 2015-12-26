module.exports=function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('./package.json'),
		watch:{
			livereload:{
				files:['./public/**/*','./views/*','./views/**/*'],
				options:{
					livereload:{
						port:9000
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('live',['watch']);
}