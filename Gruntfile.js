/*
 * cfm-bs4-less
 * http://github.com/thatONEjustin/
 * http://justin.tinytanky.net
 *
 * Copyright (c) 2016 Justin Paelmo
 * Licensed under the MIT license.
 */

'use strict';


module.exports = function (grunt) {

    grunt.initConfig({        
        watch: {
            //Watch the .less files in /build/
            styles: {
                files: ['build/**/**.less', '!build/themes/helpers.less'],
                tasks: ['less:single', 'cssmin:single'],
                options: {
                    nospawn: true
                }
            },
            
            //Watch .cfm files in /build/ copy to /dist/ 
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
            
            single: {
                src: ['path/to/source.css'], 
                dest: 'path/to/dest',
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
                

        switch(target) {
            case 'styles':
            case 'themes':                 
                var path     = filepath.split('\\');
                var filename = getFileName(path) + '.css';
                
                var result   = writeFilePath(path, 'dist', '\\') + filename;
                var obj      = {};
                    obj[result] = filepath;   
                
                var minify   = writeFilePath(path, 'dist', '/') + getFileName(path) + '.min.css';


                /* Just some helper outputs for line 132 css switch case.                 
                    grunt.verbose.write(

                        ' \n action->' + action +                     
                        ' \n target->' + target +                     
                        ' \n filepath->' + filepath + 

                        ' \n path->' + path + 
                        ' \n filename->' + filename + 
                        ' \n source->' + source + 
                        ' \n result->' + result + 
                        ' \n minify->' + minify + 
                        ' \n obj.keys->' + Object.keys(obj) + 
                        '\n'

                    );
                **/

                grunt.config(['less', 'single', 'files'], obj);
                grunt.config(['cssmin', 'single', 'src'], result);
                grunt.config(['cssmin', 'single', 'dest'], minify);   
                
            break;

            case 'copy':                
                grunt.config(['copy', 'single', 'src'], filepath); 
            break;
                
            default:                
                var tmp = filepath.split('.');
                grunt.verbose.write('tmp->' + tmp);
        }
    });
}

/*
 * writeFilePath(path = file[1,2,3...], target = dist, slash = for file structure)
 * used to write path of file changed
 *
 **/
function writeFilePath(path, target, slash) {    
    var tmp  = '';         
    for(var a=1; a<path.length-1;a++) {
        tmp += path[a] + slash;
    }                

    return (target + slash) + tmp;
}

/*
 * getFileName(path = file[1,2,3...]) 
 * used to get file name
 *
 **/
function getFileName(path) {
    for(var i=0;i<path.length;i++) {
        var tmp = path[i];
            tmp = tmp.split('.');
    }    
    return tmp[0];
}