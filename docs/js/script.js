$(document).ready(function(){
	var pull = $(".button-burger");
	var nav = $(".block-nav");
	
	$(pull).on("click", function(){
		$(nav).slideToggle();
	});

	$(window).resize(function(){
		var w = $(window).width();
		if (w > 720 && nav.is(":hidden")){
			nav.removeAttr("style");
		}
	});

	// Fancy-box

	$('[data-fancybox="gallery"]').fancybox({
		loop: true
	});

	// Owl-carousel

  $(".owl-carousel").owlCarousel({
  	loop:true,
    margin:0,
    responsiveClass:true,
    responsive:{
      0:{
        items:1,
        nav:false,
        dots:true
        },
      500:{
        items:2,
        nav:false,
        dots:true
        },
      790:{
        items:3,
        nav:true
        },
      1040:{
        items:4,
        nav:true,
        loop:true
        }
    	}
  });
});