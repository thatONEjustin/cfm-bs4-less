<!--- base scripts --->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script>
    window.jQuery || document.write('<script src="../assets/js/vendor/jquery.min.js"><\/script>')
</script>
<script src="js/bootstrap.min.js"></script>

<!--- plug ins --->
<script type="text/javascript" src="assets/plugins/slick.min.js"></script>

<!--- nav stuffs / hover only works on 992 up --->
<script src="assets/push-menu/menu.min.js" type="text/javascript"></script>

<!--- custom functions --->
<script src="./js/helpers.js" type="text/javascript"></script>

<script>
// mobile menu push from right
var pushRight = new Menu({
    wrapper: '#site'
    , type: 'push-right'
    , menuOpenerClass: '.c-button'
    , maskId: '#mask'
});

var pushRightBtn = document.querySelector('#c-button--push-right');

pushRightBtn.addEventListener('click', function (e) {
    e.preventDefault;
    pushRight.open();
});	    

    
if(mobileCheck()) {
    
    // nav hover - act as click
    $('.dropdown').hover(function(){ 
      $('.dropdown-toggle', this).trigger('click'); 
    });

    // nav dropdown mega menu
    jQuery(document).on('click', '.mega-dropdown', function(e) {
      e.stopPropagation()
    });
    
} else {
    //alert('desktop');
}
    
$(window).resize(function() {
  
    if(mobileCheck()) {
        
        // nav hover - act as click
        $('.dropdown').hover(function(){ 
          $('.dropdown-toggle', this).trigger('click'); 
        });

        // nav dropdown mega menu
        jQuery(document).on('click', '.mega-dropdown', function(e) {
          e.stopPropagation()
        });
        
    } 
    
});    

$(document).ready(function() {
    
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            $("nav").addClass("smaller");
        } else {
            $("nav").removeClass("smaller");
        }
    });

    // slick slider
    $('.gallery-slider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [{
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 3
            }
        }, {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '40px',
                slidesToShow: 1
            }
        }]
    }); 
    
});

</script>

<cfif #site.seo.useSchema# is 1>
<cfoutput>
<script type="application/ld+json">
{
  "@context" : "http://schema.org",
  "@type" : "Organization",
  "name" : "#site.seo.companyName#",
  "url" : "#CGI.SERVER_NAME#",
  "sameAs" : [
    <cfif #Trim(site.seo.facebookURL)# is not ''>
    "#site.seo.facebookURL#",
    </cfif>

    <cfif #Trim(site.seo.linkedInURL)# is not ''>
    "#site.seo.linkedInURL#",
    </cfif>

    <cfif #Trim(site.seo.linkedInURL)# is not ''>
    "#site.seo.googlePlusURL#"
    </cfif>
  ]
}
</script> 
</cfoutput>
</cfif>
