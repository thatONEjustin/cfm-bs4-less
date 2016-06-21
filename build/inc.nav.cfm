<!--- base navigation - switches to off canvas on mobile --->
<nav id="c-menu--push-right" class="c-menu c-menu--push-right">
    <div class="container">
        <a class="nav-logo hidden-md-down" href="#">
            <img src="http://placehold.it/250x70?text=Logo" />
        </a>

        <button class="c-menu__close hidden-lg-up">Close Menu &rarr;</button>

        <ul class="nav navbar-nav pull-xs-right">
            <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
            </li>
            <!--- simple dropdown --->
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><!--- add this if parent href needs to be clickable [onClick="parent.location='url_here'"] --->
                    Simple Dropdown
                </a>
                <ul class="dropdown-menu" aria-labelledby="Preview">
                    <li><a class="dropdown-item" href="">This is a Link</a></li>
                    <li><a class="dropdown-item" href="">This is a Link</a></li>
                    <li><a class="dropdown-item" href="">This is a Link</a></li>
                    <li><a class="dropdown-item" href="">This is a Link</a></li>
                </ul>
            </li>
            <!--- / simple dropdown --->
            
            <!-- mega dropdown --->
            <li class="nav-item dropdown mega-dropdown">
              <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Mega Menu <span class="glyphicon glyphicon-chevron-down pull-right"></span></a>

              <ul class="dropdown-menu mega-dropdown-menu row">
                <li class="col-xs-12 col-lg-4">
                    <p class="title-xs">THIS IS A COLUMN</p>
                    <ul>
                        <li>This is a link under that column</li>
                        <li>This is a link under that column</li>
                        <li>This is a link under that column</li>
                        <li>This is a link under that column</li>
                        <li>This is a link under that column</li>
                    </ul>  
                </li>
                <li class="col-xs-12 col-lg-4">
                    <p class="title-xs">THIS IS A COLUMN</p>
                    <ul>
                        <li>You can put whatever you want here</li>
                        <li>as long as you keep them</li>
                        <li>in ULs / LIs</li>
                        <li>Avoid using DIVS so</li>
                        <li>it transfers well on mobile</li>
                    </ul>  
                </li>
                <li class="col-xs-12 col-lg-4">
                    <p class="title-xs">THIS IS A COLUMN</p>
                    <ul>
                        <li>This is a link under that column</li>
                        <li>This is a link under that column</li>
                        <li>This is a link under that column</li>
                        <li>This is a link under that column</li>
                        <li>This is a link under that column</li>
                    </ul>  
                </li>
              </ul>

            </li>
            <!--- / mega dropdown --->        
                
        </ul>

    </div>
</nav>

<div class="site" id="site">
    
    <div class="fixed mobile hidden-lg-up">

        <a class="nav-logo" href="./"></a>

        <button id="c-button--push-right" class="c-button menu-toggle">
            <i class="ion-navicon"></i>
        </button>
    </div>
    <!--- / base navigation - switches to off canvas on mobile --->
