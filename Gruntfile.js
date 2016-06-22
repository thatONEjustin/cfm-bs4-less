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
        
        copy: {
            basic: {
                expand: true,
                cwd: 'build',
                src: ['**', '!*.less', '!**/*.less', '!*.old.*'],
                dest: 'dist/'
            },
            
            cfm: {
                expand: true,
                cwd: 'build',
                src: ['**.cfm', '*.*.cfm', '!**.less', '!**/*.less' , '!*.old.*'],
                dest: 'dist/'
            }
        }, 
        
        less: {
            main: {
                files: {
                    'dist/styles.css': 'build/styles.less',
                    'dist/responsive.css': 'build/responsive.less'
                }
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
        },
        
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
        }
    });
        

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
    
}