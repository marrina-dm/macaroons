module.exports = function (grunt) {

    grunt.initConfig({
        delete_sync: {
            dist: {
                cwd: 'dist',
                src: ['**', '**/*.*']
            }
        },
        less: {
            dist: {
                files: {
                    'dist/styles/style.css': 'src/styles/style.less',
                }
            }
        },
        copy: {
            files: {
                cwd: 'src/fonts',
                src: '*.ttf',
                dest: 'dist/fonts',
                expand: true
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/styles/style.min.css': ['dist/styles/style.css']
                }
            }
        },
        clean: ['dist/styles/style.css'],
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['src/styles/*.less'],
                tasks: ['copy', 'less', 'cssmin', 'clean'],
            },
        }
    });

    grunt.loadNpmTasks('grunt-delete-sync');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['delete_sync', 'less', 'copy', 'cssmin', 'clean']);
};