module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-includes');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    includes: {
      files: {
        src: ['*.html'], // Source files
        dest: './', // Destination directory
        flatten: true,
        cwd: 'src' // DIRECTORY FOR COMPILED FILES OR CURRENT WORKING DIRECTORY
      }
    },
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: {
          'assets/css/style.css': 'assets/scss/imports.scss',
          'assets/css/style-rtl.css': 'assets/scss/rtl/main.scss'
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ['assets/less']
        },
        files: {
          'assets/css/style.css': 'assets/less/imports.less',
          'assets/css/style-rtl.css': 'assets/less/rtl/main.less'
        }
      }
    },
    watch:{
      less:{
        files:['assets/less/**/*.less'],
        tasks:['less']
      },
      sass:{
        files:['assets/scss/**/*.scss'],
        tasks:['sass']
      },
      includes: {
        files: ['src/**/*.html'],
        tasks: ['includes']
      },
    }
  });

  // Default task(s) to RUN on "GRUNT" COMMAND
  grunt.registerTask('scsstocss', ['includes', 'sass', 'watch']);

  grunt.registerTask('lesstocss', ['includes', 'less', 'watch']);

};
