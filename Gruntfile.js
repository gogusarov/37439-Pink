module.exports = function(grunt) {

  grunt.initConfig({
    coffee: {
      options: {
        bare: true
      },
      scripts: {
        expand: true,
        flatten: true,
        cwd: 'coffee/',
        src: ['*.coffee'],
        dest: 'js/',
        ext: '.js'
      }
    },
    less: {
      style: {
        files: {
          'css/style.css': ['./less/style.less']
        }
      }
    },
    watch: {
      options: {
        spawn: false,
        livereload: true
      },
      style: {
        files: ['./less/**/*.less'],
        tasks: ['less']
      }
    },
    browserSync: {
      dev: {
        bsFiles: {
          src : [
            './css/*.css', 
            './*.html' 
          ]
        },
        options: {
          watchTask: true,
          server: './',
          browser: ["google chrome", "firefox"]
        }
      }
    },
    concat: {
      dist: {
        src: ['js/*.js'],
        dest: 'dist/js/all.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/js/all.min.js': ['dist/js/all.js']
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-browser-sync'); 
 
  grunt.registerTask('default', ['browserSync', 'watch'])
};
