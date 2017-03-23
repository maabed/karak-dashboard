module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    sass: {
      dist: {
        files: {
          'assets/css/lessConverted.css': 'assets/scss/imports.scss'
        }
      }
    },
    less: {
      development: {
        options: {
          paths: ['assets/less']
        },
        files: {
          'assets/css/lessConverted.css': 'assets/less/imports.less'
        }
      }
    },
    watch:{
      less:{
        files:['assets/less/**/*.less'],
        tasks:['less']
      },
    }
  });
};