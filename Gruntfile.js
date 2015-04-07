module.exports = function(grunt) {

  require("load-grunt-tasks")(grunt);
  
  grunt.initConfig({
    autoprefixer: {
      options: {
        browsers: ["last 2 versions", "ie 10"]
      },
      style: {
        src: "build/css/style.css"
      }
    },
    clean: {
      build: ["build"]
    },
    copy: {
      build: {
        files: [{
          expand: true,
          cwd: "source",
          src: [
            "img/**",
            "js/**",
            "fonts/**",
            "css/**",
            "index.html"
          ],
          dest: "build"
        }]
      }
    },
    less: {
      style: {
        files: {
          "./build/css/style.css": ["./source/less/style.less"]
        }
      }
    },
    imagemin: {
      images: {
        options: {
          optimizationLevel: 3
        },
        files: [{
          expand: true,
          src: ["build/img/**/*.{png, jpg, gif, svg}"]
        }]
      }
    },
    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      style: {
        files: ["./less/**/*.less"],
        tasks: ["less"]
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            "./css/*.css", 
            "./*.html",
            "./js/*.js"
          ]
        },
        options: {
          watchTask: true,
          server: "./"
        }
      }
    },
    cmq: {
      style: {
        files: {
          "build/css/style.css": ["build/css/style.css"]
        }
      }
    },
    cssmin: {
      style: {
        options: {
          keepSpecialComments: 0,
          report: "gzip"
        },
        files: {
          "build/css/style.min.css": ["build/css/style.css"]
        }
      }
    },
    concat: {
      dist: {
        src: ['js/*.js'],
        dest: 'js/all.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'build/js/all.min.js': ['source/js/all.js']
        }
      }
    }
  });
 
  grunt.registerTask("default", ["browserSync", "watch"]);
  grunt.registerTask("build", ["clean","copy", "less", "autoprefixer", "cmq", "cssmin"] )
};
