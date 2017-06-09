module.exports=function(grunt){//set up the module export prameter as a f
 grunt.loadNpmTasks('grunt-contrib-uglify');//need to load the plugin from pjs
 grunt.loadNpmTasks('grunt-contrib-watch');
 grunt.loadNpmTasks('grunt-contrib-compass');

/* app.set('views', path.join(__dirname, 'views'));
 app.set('view engine', 'ejs');*/

 grunt.initConfig({//whenever use g need init it
	uglify: {//this get passed along as object
     my_target: {//these and the format aer in the documentation when serach this plugin on gg
	  files:{//this is an file object 
	  	'public/javascripts/script.js':['_/components/js/*.js']
		//'_/js/script.js':['_/components/js/script.js','_/components/js/other.js']
	  }//files  first is the destination of your finished js and sec is the location of the files 
	  //you want to process. so wenever we get done processing and combining and compressing our 
	  //files, tey re all gonna end up right in_/js/script.js
     //_/js is the original and we want to put it to _/comp when finish process it 
     //"destination":   pass it an array of the files that we want to process into _/comp          
//we r asking this to do is look for a the-/comp script and the ncompress it into _/js
     }//my_target
	},//uglify //sinits a new obj in the same conf 
	//first task uglify sec watch
	compass: {
		dev: {
			options:{
			  config: 'config.rb'
		  }//options
		}//dev
	},//compass
	watch: {
		options:{livereload: true},
		scripts: {//all tasks for js
		  files:['_/components/js/*.js'],
		  tasks: ['uglify']//tell watch what to do when one of the files had some changes
		},//scripts
		sass: {
		   files: ['_/components/sass/*.scss'],
		   tasks: ['compass:dev']//excute compas then dev	
		},//sass
		ejs:{//html
		  files:['views/*.ejs']//*.html
		}//html we don't need to run any tasks after HTML files get updated
    }//watch
  })//initConfig
  grunt.registerTask('default', 'watch');
}//exports
//unglify is part of uglify.js lib allows y to comprass and combine js     
