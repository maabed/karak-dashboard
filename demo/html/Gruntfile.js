module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks("grunt-jsbeautifier");

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    "jsbeautifier": {
      files: ["assets/js/*.js"],
      options: {
        js: {
          braceStyle: "collapse",
          breakChainedMethods: false,
          e4x: false,
          evalCode: false,
          indentChar: " ",
          indentLevel: 0,
          indentSize: 2,
          indentWithTabs: false,
          jslintHappy: false,
          keepArrayIndentation: false,
          keepFunctionIndentation: false,
          maxPreserveNewlines: 10,
          preserveNewlines: true,
          spaceBeforeConditional: true,
          spaceInParen: false,
          unescapeStrings: false,
          wrapLineLength: 0,
          endWithNewline: true
        }
      }
    },

    sass: {
      dist: {
        files: {
          'assets/css/scss_converted.css': 'assets/scss/imports.scss'
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ['assets/less']
        },
        files: {
          'assets/css/less_converted.css': 'assets/less/imports.less'
        }
      }
    },
    
    watch: {
      less: {
        files: ['assets/less/**/*.less'],
        tasks: ['less']
      },
    }
  });
};