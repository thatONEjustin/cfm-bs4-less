# cfm-bs4-less
asnet master

## Main Goals of this template
Create an easy to understand, extensible framework that's backed with a grunt package set of tasks that revolves around a small agile team working on files concurrently. the naming conventions and include conventions take into account modern web development needs and can scale with project size. 

## Getting started
1. Install node.js
2. windows key + r (opens up run dialogue)
3. type "cmd" this will open up the command prompt for windows
4. go to the directory where your project sits. If you're seeing "C:\User\%Usernaem%\ etc then type in:

```shell
    cd /s U:\Path\to\folder
```
_U is our drive letter, replace it with yours_ 

5. run the following commands
```shell

    npm update -g npm

    npm install grunt --save-dev
    npm install grunt-contrib-less --save-dev
    npm install grunt-contrib-cssmin --save-dev
    npm install grunt-contrib-watch --save-dev
    npm install grunt-contrib-copy --save-dev
```