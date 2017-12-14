$(document).ready(function(){

    $('.anicon').click(function() {
        $(this).removeClass('preload');
        if ($(this).children().hasClass('navStack7')) {
            $(this).children().toggleClass('active');
        } else {
            var kids = $(this).children().children();
            $(kids).toggleClass('active');
        }
    });

//JS-0 **Default**

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
