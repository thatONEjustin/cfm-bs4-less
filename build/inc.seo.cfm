<cfif Trim(customPageURL) is ''>
    <cfset pageURL = #CGI.SERVER_NAME# & #CGI.PATH_INFO# />
<cfelse>
    <cfset pageURL = customPageURL />
</cfif>
    
<cfif Trim(customPageType) is ''>
    <cfset pageType = 'website' />
<cfelse>
    <cfset pageType = customPageType />
</cfif>

<cfoutput>
        
<!-- Update your html tag to include the itemscope and itemtype attributes. -->
<!--- not using this yet, need insight from keith 
<html itemscope itemtype="http://schema.org/Article">--->

<title>#pageTitle#</title>
    
<meta name="description" content="#pageDesc#" />
    

<!-- Schema.org markup for Google+ -->
<meta itemprop="name" content="#pageTitle#">
<meta itemprop="description" content="#pageDesc#">
    
<cfif Trim(pagePreviewImage) is not ''>   
<meta itemprop="image" content="#pagePreviewImage#">
</cfif>

<!-- Twitter Card data -->    
<meta name="twitter:card" content="summary_large_image">
    
<cfif Trim(sitePublisherHandle) is not ''>
<meta name="twitter:site" content="#sitePublisherHandle#">
</cfif>
    
<meta name="twitter:title" content="#pageTitle#">
<meta name="twitter:description" content="#pageDesc#">

<cfif Trim(sitePublisherHandle) is not ''>
<meta name="twitter:creator" content="#sitePublisherHandle#">
</cfif>

<cfif Trim(pagePreviewImage) is not ''>    
<!-- Twitter summary card with large image must be at least 280x150px -->
<meta name="twitter:image:src" content="#pagePreviewImage#">
</cfif>

<!-- Open Graph data -->
<meta property="og:title" content="#pageTitle#" />
<meta property="og:type" content="#pageType#" />
<meta property="og:url" content="#pageURL#" />
    

<cfif Trim(pagePreviewImage) is not ''>    
<meta property="og:image" content="#pagePreviewImage#" />
</cfif>
    
<meta property="og:description" content="#pageDesc#" />    
<cfif Trim(site.seo.companyName) is not ''>
<meta property="og:site_name" content="#site.seo.companyName#" />
</cfif>
<!--- not using this yet, need insight from keith 
<meta property="article:published_time" content="2013-09-17T05:59:00+01:00" />
<meta property="article:modified_time" content="2013-09-16T19:08:47+01:00" />
<meta property="article:section" content="Article Section" />
<meta property="article:tag" content="Article Tag" />
<meta property="fb:admins" content="Facebook numberic ID" />
--->
    