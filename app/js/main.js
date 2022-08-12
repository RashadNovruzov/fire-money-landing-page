$(document).ready(function(){
	// alert(window.innerWidth);
	$(".burger").on('click',function(){
		$(".header__menu").toggleClass("visible");
		$("body").toggleClass("hidden");
		$(this).toggleClass("rotate");
	})
})