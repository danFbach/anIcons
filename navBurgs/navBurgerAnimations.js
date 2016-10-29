$(document).ready(function(){
	
//JS-0
	$('.navBurger').click(function(){
		$('body').removeClass('preload');
		$('.navBurger span').toggleClass('active');
	});	
	
/*
//JS-1
	$('.navBurger').click(function(){
		$('.navBurger').toggleClass('active');
		$('body').removeClass('preload');
	});
*/
});