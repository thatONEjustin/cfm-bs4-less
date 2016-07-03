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
            //styles: {
                //files: ['build/**.less'],
                //tasks: ['less:main', 'cssmin:userCSS']
            //},
            
            styles: {
                files: ['build/**.less'],
                tasks: ['less:single', 'cssmin:userCSS'],
                options: {
                    nospawn: true
                }
            },
            
            themes: {
                files: ['build/themes/**.less'],
                tasks: ['less:theme', 'cssmin:themes'],
                options: {
                    nospawn: false
                }
            },
            
            copy: {
                files: ['<%= copy.single.src %>'],
                tasks: ['copy:single'],
                options: {
                    nospawn: true
                }
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
            }, 
            
            single: {
                src: ['build/**.cfm', '!*.old.*'],
                dest: 'dist/'
            }
        }, 
        
        less: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'build',
                    src: ['*.less', '!**.old.*', '!{boot,var,mix,helpers}*.less'],
                    dest: 'dist',
                    ext: '.css'
                }]   
            },
            
            theme: {
                files: [{
                    expand: true,
                    cwd: 'build/themes',
                    src: ['*.less', '!**.old.*', '!{boot,var,mix,helpers}*.less'],
                    dest: 'dist/themes',
                    ext: '.css'
                }]                
            },
            
            single: {
                files: {
                  'path/to/result.css': 'path/to/source.less'
                }   
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
            },
            
            singleMain: {
                src: ['dist/*.css', 'dist/!**.old.*', '!{boot,var,mix}*.less'],
                dest: 'dist/',
                ext: '.min.css'
            },
            
            singleTheme: {
                src: ['dist/themes/*.css', 'dist/themes/!**.old.*', 'build/themes/!{boot,var,mix}*.less'],
                dest: 'dist/themes/',
                ext: '.min.css'
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
    grunt.registerTask('bbuild', ['less:main', 'less:theme', 'copy:basic', 'cssmin:userCSS', 'cssmin:themes']);    
    
    grunt.event.on('watch', function(action, filepath, target) {
        //grunt.verbose.write('action->' + action + ', for target:' + target + ', filepath: ' + filepath);

        switch(target) {
            case 'themes': 
                //tmp = 'singleTheme';
                //grunt.config(['less', 'single', 'src', filtpath]);
            break;

            case 'styles':
                var tmp = filepath.split('.');
                    tmp = tmp[0] + '.css';
                //grunt.verbose.write('tmp:styles->' + tmp + ' | filepath->' + filepath);
                
                var files = { tmp : filepath }
                
                    grunt.verbose.write('files["tmp"]->' + files['tmp']);
                grunt.config(['less', 'single', 'files'], files);
            break;
                
            case 'copy':                
                grunt.config(['copy', 'single', 'src'], filepath); 
            break;
                
            default:                
                var tmp = filepath.split('.');
                    grunt.verbose.write('tmp->' + tmp);
        }
    });
    /*
    grunt.event.on('watch', function(action, filepath, target) {
        
        grunt.verbose.write('action->' + action + ', for ' + target + ', filepath: ' + filepath);
        var tmp;
        try {
            
            switch(target) {
                case 'themes': 
                    tmp = 'singleTheme';
                break;
                    
                case 'styles':
                    tmp = 'singleMain';
                break;
                    
                default: 
                    tmp = 'single';
            }
            
            grunt.verbose.write('grunt.config([' + target + ', ' + tmp +', "src"], ' + filepath +');');
            
            grunt.config([target, tmp, 'src'], filepath);
            //grunt.config([])
            //grunt.verbose.write('try{} running\n');            
            //grunt.verbose.write('\nfilepath->' + filepath);            
            //grunt.config(['copy', 'single', 'src'], filepath);    
            //grunt.config(['themes', 'single', 'src'], filepath);    
            
        } catch (e) {
            grunt.verbose.error().error(e.message);
            grunt.fail.warn('watch re-config for copy failed');
        }
    });
    */
}
