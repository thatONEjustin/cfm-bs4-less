# cfm-bs4-less
asnet master

## Main Goals of this template
create an easy to understand, extensible framework that's backed with a grunt package set of tasks that revolves around a small agile team working on files concurrently. the naming conventions and include conventions take into account modern web development needs and can scale with project size. 

## File conventions
### inc.*
Basic building blocks of a site. Each file contains essentially building blocks

_example:_
```shell
    <cfinclude template="./inc.styles.cfm" /> 
```
_outputs_ 
```shell
    <!-- PLUGINS -->
    <link rel="stylesheet" type="text/css" href="assets/plugins/slick.css"/>
```

### widget.*
Use this for includes used on multiple pages that are not forms 

_example:_
```shell
    <div class="sidebar">
        <cfinclude template="./widget.latest-news.cfm" /> 
    </div>
```
_outputs_ 
```shell
    <div class="sidebar">
        <div class="as-widget">
            <ul>
                <li ../>  <!-- list items here dynamically -->
            </ul>
        </div>
    </div>
```

### form.*
Use this to separate forms from page code. this will help with multiple instances of google recaptcha.

_example:_
```shell
    <div class="sidebar">
        <cfinclude template="./form.sidebar.cfm" /> 
    </div>
```
_outputs_ 
```shell
    <div class="sidebar">
        <div class="as-widget">
            <form>
                ...
            </form>
        </div>
    </div>
```
