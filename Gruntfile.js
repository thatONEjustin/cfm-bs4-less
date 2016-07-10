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

    function getFilterFunction() {
        return function (filepath) {
            var srcTime = fs.statSync(filepath).mtime.getTime();
            return srcTime > Date.now() - 5000; // don't watch files changed before last 5 seconds
        };
    }

    grunt.initConfig({        
        watch: {
            /*
             *
             * @TODO: The single file processing has a bug with options: { nospawn: true }
             *        If errors are present during compile, all future tasks won't run
             *
             **/            
            /*
            styles: {
                files: ['build/{**}/**.less', '!build/themes/helpers.less'],
                tasks: ['less:single', 'cssmin:single'],
                options: {
                    nospawn: true
                }
            },
            
            //Watch .cfm files in /build/ copy to /dist/ 
            cfm: {
                files: ['<%= copy.single.src %>'],
                tasks: ['copy:single'],
                options: {
                    nospawn: true
                }
            },
            
            img: {
                files: ['build/img/*.{jpg,png,svg,gif}', 'build/img/{**}/*.{jpg,png,svg,gif}', '!build/img/*.old.{jpg,png,svg,gif}', '!build/img/{**}/*.old.{jpg,png,svg,gif}'],
                tasks: ['copy:img']
            }
            */
            
            helpers: {
                files: ['build/themes/helpers.less'],
                tasks: ['less:main', 'cssmin:main'],
                options: {
                    interrupt: true
                }
            }, 
            
            styles: {
                files: ['build/**.less', '!build/themes/helpers.less'],
                tasks: ['less:main', 'cssmin:main'],
                options: {
                    interrupt: true
                }
            }, 
            
            
            themes: {
                files: ['build/themes/**.less', '!build/themes/helpers.less'],
                tasks: ['less:themes', 'cssmin:themes'],
                options: {
                    interrupt: true
                }
            }, 
            
            //Watch the .cfm files in /build/ 
            copyStructure: {
                files: 'build/**.cfm',
                tasks: ['copy:cfm']                
            },
            
            copyIMG: {
                files: 'build/img/**.{jpg,svg,png,gif}',
                tasks: ['copy:img']
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
            
            img: {
                expand: true,
                cwd: 'build/img',
                src: ['**.{jpg,png,svg,gif}', '*.*.{jpg,png,svg,gif}', '!**.cfm', '!**/*.cfm' , '!**.less', '!**/*.less' , '!*.old.*'],
                dest: 'dist/img'
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
            
            themes: {
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
            main: {
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
    grunt.registerTask('bbuild', ['less:main', 'less:themes', 'copy:basic', 'cssmin:main', 'cssmin:themes']);    
        
    /*
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

                
                //Just some helper outputs for line 132 css switch case.                 
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

                    )                
                

                grunt.config(['less', 'single', 'files'], obj);
                grunt.config(['cssmin', 'single', 'src'], result);
                grunt.config(['cssmin', 'single', 'dest'], minify);   
                
            break;

            case 'cfm':   
                var path   = filepath.split('\\');
                
                var result = 'dist/' + path[path.length-1];
                
                grunt.config(['copy', 'single', 'src'], filepath);                 
                grunt.config(['copy', 'single', 'dest'], result);                 
            break;
                
            default:                
                var tmp = filepath.split('.');
                grunt.verbose.write(
                    ' \n' +
                    ' \n action->' + action +                     
                    ' \n target->' + target +                     
                    ' \n filepath->' + filepath + 
                    ' \n'
                );
        }
    });
    */
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