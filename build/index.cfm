<cfinclude template="./site.config.cfm" />

<cfinclude template="./inc.doctype.cfm" />

<html lang="en">

    <head>

        <cfinclude template="./inc.meta.mobile.cfm" />

        <!--- seo stuff --->

        <cfif site.seo.advanced is 0>

            <meta name="description" content="">
            <meta name="author" content="">

            <!--- only if client has a favicon.ico, this can be commented out --->
            <link rel="icon" href="./favicon.ico">

            <title>Master Template - Bootstrap 4</title>	

        <cfelse>        

            <cfset pageTitle           = 'Site Template' />
            <cfset pageDesc            = 'Master site template description for SEO' />    
            <cfset pagePreviewImage    = '//www.domain.com/images/image.jpg' />

            <!--- ONLY CHANGE THIS IF YOU WANT TO SPECIFY A SPECIFIC OPENGRAPH TYPE, DEFAULTS TO 'WEBSITE' OTHERWISE --->
            <cfset customPageType      = '' />

            <!--- IF EMPTY DOES NOT PRODUCE THE METATAG ASSOCIATED WITH THE TWITTER HANDLE --->
            <cfset sitePublisherHandle = '@thatONEjustin' />
            <!---
            Unsure if necessary, 90% of our clients won't have a separate user as an author of content
            <cfset siteAuthorHandle    = '@advantageservices' />--->

            <!--- 
                  * Use the following if you want to set a custom pageURL for the canonical tags.
                  * Leave blank if you want the URL to be created from the server.
                  * this will display file name if left blank

                    i.e. SEO Friendly URLs, can work with michael to automate this better --->

            <cfset customPageURL = '' />

            <cfinclude template="./inc.seo.cfm" />

        </cfif>
        <!--- / seo stuff --->

        <cfinclude template="./inc.styles.cfm" />    

        <cfinclude template="./inc.analytics.cfm" />

    </head>

    <body>

        <cfinclude template="./inc.nav.cfm" />

            <div class="page">

                <div class="hero">
                    <div class="info">
                        <h1>Main Header</h1>
                        <h3>Tagline Here</h3>
                        <a href="" class="btn btn-round">BUTTON</a>
                    </div>
                </div>

                <div class="content">
                    <section class="blurb1">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-md-8 col-md-offset-2 text-xs-center">
                                    <h2 class="title-lg">Welcome!</h2>
                                    <h3>Aliquam euismod dolor sed eros pulvinar rhoncus. Donec commodo rhoncus felis a lacinia.</h3>
                                    <p>Aliquam euismod dolor sed eros pulvinar rhoncus. Donec commodo rhoncus felis a lacinia. Quisque commodo purus at tortor aliquam, ac pharetra sapien venenatis. Ut vitae mi in turpis malesuada condimentum ac eu nisi. Sed euismod nulla viverra risus porta vehicula. Etiam dignissim leo nulla. Quisque condimentum ex nec facilisis lacinia. Praesent iaculis auctor convallis. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam consequat massa in lacinia iaculis.</p>
                                    <a href="" class="btn btn-ghost">BUTTON</a>
                                </div>
                            </div>
                        </div>
                    </section>
                    <!---<section class="gallery">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="gallery-slider">
                                    <div class="gallery-slider-item">this is a slide</div>
                                    <div class="gallery-slider-item">this is a slide</div>
                                    <div class="gallery-slider-item">this is a slide</div>
                                    <div class="gallery-slider-item">this is a slide</div>
                                    <div class="gallery-slider-item">this is a slide</div>
                                    <div class="gallery-slider-item">this is a slide</div>
                                    <div class="gallery-slider-item">this is a slide</div>
                                    <div class="gallery-slider-item">this is a slide</div>
                                    <div class="gallery-slider-item">this is a slide</div>
                                </div>
                            </div>
                        </div>
                    </section>--->
                    <section class="blurb2">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 text-xs-center">
                                    <h2 class="title-lg">This text is container wide</h2>
                                    <p>Morbi eu mauris quis velit feugiat varius. Aliquam in porta purus. Nunc ut eleifend tortor. Quisque in turpis augue. Quisque dui sapien, feugiat eget ligula in, luctus pretium turpis. Quisque vel nisi tincidunt, sollicitudin lorem sed, luctus purus. Mauris ullamcorper mi mauris, non blandit eros luctus sed. Pellentesque luctus ac mi vitae vehicula. Integer eu placerat lacus, eu laoreet ligula.</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="prices">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 text-xs-center">
                                    <h2 class="title-sm">Prices</h2>
                                    <small>Price Table</small>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-xs-12 col-md-4 text-xs-center price-item">
                                    <div class="price">
                                        <span class="dollar">$</span>20
                                    </div>
                                    <div class="info">
                                        <div class="title-xs">Service One</div>
                                        <p>
                                            Morbi eu mauris quis velit feugiat varius.
                                            <br />
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-4 text-xs-center price-item">
                                    <div class="price">
                                        <span class="dollar">$</span>16
                                    </div>
                                    <div class="info">
                                        <div class="title-xs">Service 2</div>
                                        <p>Aliquam in porta purus.</p>
                                    </div>
                                </div>
                                <div class="col-xs-12 col-md-4 text-xs-center price-item">
                                    <div class="price">
                                        <span class="dollar">$</span>75
                                    </div>
                                    <div class="info">
                                        <div class="title-xs">Service 3</div>
                                        <p>Aliquam in porta purus.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section class="contact">
                        <div class="container">
                            <div class="row">
                                <div class="col-xs-12 col-md-7 form-container">
                                    <form>
                                        <h4 class="text-xs-center">SEND US A MESSAGE</h4>
                                        <div class="form-group">
                                            <label class="sr-only" for="exampleInputEmail3">Email address</label>
                                            <input type="email" class="form-control" id="exampleInputEmail3" placeholder="Enter email">
                                          </div>
                                          <div class="form-group">
                                            <label class="sr-only" for="exampleInputPassword3">Password</label>
                                            <input type="password" class="form-control" id="exampleInputPassword3" placeholder="Password">
                                          </div>
                                          <div class="form-group">
                                            <label class="sr-only" for="exampleInputPassword3">Message:</label>
                                              <textarea type="password" rows="4" class="form-control" placeholder="Dear Tiergarten Pets,"></textarea>
                                          </div>
                                          <div class="form-group text-xs-center">
                                              <button class="btn btn-ghost">SEND MESSAGE</button>
                                          </div>

                                    </form>
                                </div>
                                <div class="col-xs-12 col-md-5 contact-us text-xs-center text-md-left">
                                    <h2 class="title-md">CONTACT US</h2>
                                    <p class="contact-info">
                                        Phone: xxx-xxx-xxxx<br />
                                        Email: info@website.com
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                </div><!--- / content --->
            </div><!--- / page --->

            <cfinclude template="./inc.footer.cfm" />

        </div><!--- / site --->

        <div id="mask" class="mask"></div><!--- / site mask for push menu --->

        <cfinclude template="./inc.javascript.cfm" />
        
        <script>
            $(document).ready(function() {
                //Least favorite way to do this
            });
        </script>

    </body>

</html>