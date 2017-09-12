$(document).ready(function() {
// Position 
	$(window).scroll(function(){

		var windowScrollPosTop = $(window).scrollTop();
		$(".status").html(windowScrollPosTop);
	});
	

});
