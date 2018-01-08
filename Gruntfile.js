module.exports = function(grunt){
  grunt.initConfig({
    pkg : grunt.file.readJSON('package.json'),

    concat : {
      //configure the concat task
      dist: {
        src: [
          'js/modules/*.js',
          'js/main.js'
        ],
        dest: 'js/prod/production.js'
      }
    },

uglify: {
  build : {
    src : 'js/prod/production.js',
    dest: 'js/prod/production.min.js'
  }
},

watch : {
  scripts : {
    files : ['js/main.js', 'js/modules/*.js'],
    tasks : ['concat', 'uglify'],
    options : {
      spawn : false
    }
  }

  /* sass : {
    files : ['sass/main.scss'],
    tasks : ['sass']
  } */
},

/* sass : {
  dist : {
    options : {
      style : 'compressed'
    },

    files : {
      'css/main.css' : 'sass/main.scss'
    }

  }
} I am still fairly new to sass, I would love to use it but for my time sake its going to be easier for me to hard code the css for now, as I am trying to learn everything and the santax but im leaving this here to show I set it up just not 100% comfortable using it yet. It can be a huge time saver once learned and its next on my agenda! */

  });

grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-watch');
//grunt.loadNpmTasks('grunt-contrib-sass');

grunt.registerTask('default', ['concat', 'uglify']); // This runs it
//grunt.registerTask('default', ['concat', 'uglify', 'sass'])
grunt.registerTask('watchFiles', ['watch']);
//grunt.registerTask('watchFiles', ['watch', 'sass']);


};
