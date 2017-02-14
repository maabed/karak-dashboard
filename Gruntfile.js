module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    less: {
      development: {
        options: {
          paths: ['assets/less/modules']
        },
        files: {
          'assets/result/css/main.css': 'assets/less/**/*.less'
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