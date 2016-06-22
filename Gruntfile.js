/*
 * grunt-contrib-uglify
 * http://gruntjs.com/
 *
 * Copyright (c) 2016 "Cowboy" Ben Alman, contributors
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function (grunt) {

    grunt.initConfig({        
        /*
         * 
         * TODO: Refer to https://github.com/gruntjs/grunt-contrib-watch/issues/65 RE: watching only changed files. We will need to relook at how the task is handled; 
         *
         */ 
        watch: {
            //Watch the .less files in /build/
            styles: {
                files: ['build/**.less'],
                tasks: ['less:main', 'cssmin:userCSS']
            }, 
            
            themes: {
              files: ['build/themes/**.less'],
              tasks: ['less:theme', 'cssmin:themes']
            },
            
            //Watch the .cfm files in /build/ 
            copyStructure: {
                files: 'build/**.cfm',
                tasks: ['copy:cfm']                
            }
        },
        
        copy: {
            basic: {
                expand: true,
                cwd: 'build',
                src: ['**', '!*.less', '!**/*.less', '!*.old.*'],
                dest: 'dist/'
            },
            
            cfm: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['**.cfm', '*.*.cfm', '!**.less', '!**/*.less' , '!*.old.*'],
                    dest: 'dist/'
                }]                
            }
        }, 
        
        less: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['*.less', '!**.old.*', '!{boot,var,mix}*.less'],
                    dest: 'dist',
                    ext: '.css'
                }]   
            },
            
            theme: {
                files: [{
                    expand: true,
                    cwd: 'build/themes',
                    src: ['*.less', '!**.old.*', '!{boot,var,mix}*.less'],
                    dest: 'dist/themes',
                    ext: '.css'
                }]                
            }
        }, 
        
        cssmin: {
            userCSS: {
               expand: true,
               cwd: 'dist',
               src: ['*.css', '!*.min.css'], 
               dest: 'dist',
               ext: '.min.css'
            }, 
            
            themes: {
                expand: true, 
                cwd: 'dist/themes',
                src: ['*.css', '!*.min.css'],
                dest: 'dist/themes',
                ext: '.min.css'
            }
        }
    });        

    /*grunt.event.on('watch', function(action, filepath) {
        grunt.config('less:main', filepath);
        grunt.config('less:theme', filepath);
        grunt.config('cssmin:userCSS', filepath);
        grunt.config('cssmin:themes', filepath);
        grunt.config('copy:cfm', filepath);
    });*/
    
    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Task(s)
    // Default task is to watch the directories.     
    grunt.registerTask('default', ['watch']);    
    
    // bbuild is my basic build script for distribution
    grunt.registerTask('bbuild', ['less', 'copy:basic', 'cssmin']);
        
    grunt.event.on('watch', function(action, filepath, target) {
        grunt.log.writeln('test')
        grunt.log.writeln(target + ': ' + filepath + ' has ' + action);
    });
}
