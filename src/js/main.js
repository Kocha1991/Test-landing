$(document).ready(function(){
	$('#burger-menu').click(function(){
		$(this).toggleClass('open');
    $('.nav__phone__collapse').slideToggle();
    $('.bg-block').toggleClass('show');
    $('body').toggleClass('no-scroll');
	});
});