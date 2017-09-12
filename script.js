$(document).ready(function() {
	
	// Adding the x button
	$(".ui-message").append('<span class="ui-close">X</span>');
	
	// Handling the click event
	$(".ui-close").click(function() {
		$(this).parents(".ui-message").fadeOut();
	});
	
	// Initially hide the answers for the FAQ section
	$(".answer").hide();
	
	// Handling the FAQ question click
	$(".faq h4").click(function() {
		
		$(this).next(".answer").slideToggle();
		
	});
	
	$(".faq h4").addClass("faq-question");
	
	// Dynamically load about content
	$("#about").click(function() {
		$(".about-placeholder").load("about.html .body-text");
		return false;
	});
	
});