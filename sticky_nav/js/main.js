// When the user scrolls in the window
$(window).on('scroll', function () {
	// Step 1: Google $(window).scrollTop();
	// Find out how far they've scrolled
	var distanceScrolled = $(window).scrollTop();

	console.log('The distance scrolled is: ' + distanceScrolled);

	// If the user has scrolled more than 541 pixels
	if(distanceScrolled >= 540){
		$('.main-nav').addClass('scrolled');
	} else {
		$('.main-nav').removeClass('scrolled');
	}
		// Add a class to .main-nav that sets its position to fixed
	// Else
		// Remove the class from .main-nav
	if(distanceScrolled >= 540){
		$('.label-1').fadeIn(350);
	} else {
		$('.label-1').fadeOut(350);
	}
	if(distanceScrolled >= 640){
		$('.label-2').fadeIn(350);
	} else {
		$('.label-2').fadeOut(350);
	}
	if(distanceScrolled >= 740){
		$('.label-3').fadeIn(350);
	} else {
		$('.label-3').fadeOut(350);
	}
});
