module.exports = function(grunt) {
  require("load-grunt-tasks")(grunt);
  require("time-grunt")(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // dependencie manager
    bower: {
      install: {
        options: {
          targetDir: 'public/libs/vendors',
          // layout: 'byType',
          install: true,
          verbose: true,
          cleanTargetDir: false,
          cleanBowerDir: false,
          bowerOptions: {}
        }
      }
    },

    // check JS syntax code
    jshint: {
      all: ['public/js/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        laxcomma: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        indent: 2,
        devel: true,
        "-W099": true, // allowed mixed tabs and spaces
        globals: {
          window: true,
          document: true,
          location: true,
          define: true,
          // Here places words gloabla that not need tobe defined
          $: true,
          angular: true
        },
        // ignores: ['public/vendor/**/*.js','public/vendors.min.js','public/backbone.app.js','public/js/backbone/templates/**/*.js']
      },
    },

    // clean files/folders
    clean: ['public/*.html'],

    // turn jade templates into html files
    // jade: {
    //   compile: {
    //     options: {
    //       client: false,
    //       pretty: true
    //     },
    //     files: [ {
    //       cwd: "public/templates",
    //       src: "**/*.jade",
    //       dest: "public/",
    //       expand: true,
    //       ext: ".html"
    //     } ]
    //   }
    // },

    // let users define command list when a file changes or its been added
    watch: {
      options: {
        event: ['added', 'changed']
      },
      jade: {
        files: ['public/templates/**/*.jade'],
        tasks: ['newer:jade','jade']
      },
      angular: {
        files: ['public/js/*.js'],
        tasks: ['jshint','jasmine', 'karma']
      }
    }

  });

  //default task
  grunt.registerTask('default', ['clean', 'jade']);


};