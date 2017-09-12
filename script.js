$(document).ready(function() {

	var windowHeight = $(window).height();
	var windowScrollPosTop = $(window).scrollTop();
	var windowScrollPosBottom = windowHeight + windowScrollPosTop;

	$.fn.revealOnScroll = function(){

		return this.each(function(){

			var objectOffset = $(this).offset();
			var objectOffsetTop = objectOffset.top;
				// $(".status").html(objectOffsetTop);

			if(!$(this).hasClass("hidden")){
				$(this).css("opacity",0).addClass("hidden");	
			}

			if(!$(this).hasClass("animaiton-complite")){

				if (windowScrollPosBottom > objectOffsetTop) {

				$(this).animate({"opacity":1},3000)
				.addClass("animaiton-complite");

				}
			}
		});

	} //end of function



	// Position 
	$(window).scroll(function(){

		windowHeight = $(window).height();
		windowScrollPosTop = $(window).scrollTop();
		windowScrollPosBottom = windowHeight + windowScrollPosTop;
		
		$(".sidebar").revealOnScroll();
		$(".example-photo").revealOnScroll();
		$("ul li").revealOnScroll();
	});
	

});
