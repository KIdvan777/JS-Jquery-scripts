$(document).ready(function() {


	// create revealOnScroll method
	jQuery.fn.revealOnScroll = function(direction, speed) {

		var windowHeight = $(window).height();
		var windowScrollPosTop = $(window).scrollTop();
		var windowScrollPosBottom = windowHeight + windowScrollPosTop;

		return this.each(function() {
			
			var objectOffset = jQuery(this).offset();
			var objectOffsetTop = objectOffset.top;
			
			// only hide and offset elements once
			if (!jQuery(this).hasClass("hidden")) {
				
				// if argument is "right"
				if (direction == "right") {
					jQuery(this).css({
						"opacity"	: 0,
						"right"		: "700px",
						"position"	: "relative"
					});
				// if argument is "left"
				} else {
					jQuery(this).css({
						"opacity"	: 0,
						"right"		: "-700px",
						"position"	: "relative"
					});
					
				} // end if argument is right/left check
				
				jQuery(this).addClass("hidden");	
			} // end only hide and offset elements once logic
			
			// only reveal the element once
			if (!jQuery(this).hasClass("animation-complete")) {
				
				// if the page has been scrolled far enough to reveal the element
				if (windowScrollPosBottom > objectOffsetTop) {

					jQuery(this).animate({"opacity" : 1, "right" : 0}, speed)
					.addClass("animation-complete");
				} // end if the page has scrolled enough check

			} // end only reveal the element once
			
		});
	} // end revealOnScroll function

	 //end of function


	// Position 
	$(window).scroll(function(){

		// windowHeight = $(window).height();
		// windowScrollPosTop = $(window).scrollTop();
		// windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		$(".sidebar").revealOnScroll("right", 2000);
		$(".example-photo").revealOnScroll("left",2000);
		$("ul li").revealOnScroll("left", 2000);
	});
	

});

