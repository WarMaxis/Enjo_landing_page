
$(window).load(function() { // makes sure the whole site is loaded

	"use strict";



//------------------------------------------------------------------------
//						PRELOADER SCRIPT
//------------------------------------------------------------------------   
    $('#preloader').delay(400).fadeOut('slow'); // will fade out the white DIV that covers the website.
    $('#preloader .inner').fadeOut(); // will first fade out the loading animation


//------------------------------------------------------------------------
//						WOW ANIMATION SETTINGS
//------------------------------------------------------------------------ 	
	var wow = new WOW({
    	offset:100,        // distance to the element when triggering the animation (default is 0)
    	mobile:false       // trigger animations on mobile devices (default is true)
  	});
	wow.init();


	
//------------------------------------------------------------------------
//						STELLAR (PARALLAX) SETTINGS
//------------------------------------------------------------------------ 	
if(!(navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|IEMobile/i))) {
	$.stellar({
		horizontalScrolling: false,
		positionProperty: 'transform'
	});
}



//------------------------------------------------------------------------
//						NAVBAR SLIDE SCRIPT
//------------------------------------------------------------------------
//	$(window).scroll(function () {
//        if ($(window).scrollTop() > $("nav").height()) {
//            $("nav.navbar-slide").addClass("show-menu");
//        } else {
//            $("nav.navbar-slide").removeClass("show-menu");
//			$(".navbar-slide .navMenuCollapse").collapse({toggle: false});
//			$(".navbar-slide .navMenuCollapse").collapse("hide");
//			$(".navbar-slide .navbar-toggle").addClass("collapsed");
//        }
//    });

})




$(document).ready(function(){
	
	"use strict";


	
//------------------------------------------------------------------------
//						ANCHOR SMOOTHSCROLL SETTINGS
//------------------------------------------------------------------------
	$('a.goto, .navbar .nav a').smoothScroll({speed: 1200});
	



//------------------------------------------------------------------------
//						FULL HEIGHT SECTION SCRIPT
//------------------------------------------------------------------------
	$("#minimal-intro").css("min-height",$( window ).height());
	$( window ).resize(function() {
		$("#minimal-intro").css("min-height",$( window ).height());
	})


//------------------------------------------------------------------------
//						INTRO SUPERSLIDER SETTINGS
//------------------------------------------------------------------------
	$("#slides").superslides({
		play: 3000, //Milliseconds before progressing to next slide automatically. Use a falsey value to disable.
		animation: "fade", //slide or fade. This matches animations defined by fx engine.
		pagination: false,
		inherit_height_from:".intro-block",
		inherit_width_from:".intro-block"
	});

});