<!--- used for testing database and complex CF calls ---> 
<cfparam name="asnettest" default = '0' /> 

<!--- normalizing the variable for template use --->
<cfset site.dev.test              = asnettest />


<!--- switch bit to used advanced SEO options on page template --->
<cfset site.seo.advanced          = 0 />

<!--- switch bit to use advanced SEO JSON schema in the javascript --->
<cfset site.seo.useSchema         = 0 />

<cfset site.seo.companyName       = '' />
<cfset site.seo.facebookURL       = '' />
<cfset site.seo.linkedInURL       = '' />
<cfset site.seo.googlePlusURL     = '' />

<cfset site.seo.url               = '' /> 

<cfset site.analytics.googleUA    = '' />  <!--- UA-XXXXX-X --->