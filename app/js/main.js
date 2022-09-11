$(document).ready(function(){
	// alert(window.innerWidth);
	$(".burger").on('click',function(){
		$(".header__menu").toggleClass("visible");
		$("body").toggleClass("hidden");
		$(this).toggleClass("rotate");
	})

	var sum = document.querySelector('#credit__sum');
	var time = document.querySelector('#credit__time');
	var init_sum = new Powerange(sum, { min: 1000, max: 100000, start: 0 });
	var init_time = new Powerange(time,{ min: 3, max: 30, start: 0 });

	
	$(".credit__sum-number").text(sum.value);
	$(".credit__money-get .info__number").text(sum.value+" ₽");
	sum__get = parseInt(sum.value)+5000;
	$(".credit__money-return .info__number").text(sum__get+" ₽");
	sum.onchange=function(){
		$(".credit__sum-number").text(sum.value);
		$(".credit__money-get .info__number").text(sum.value+" ₽");
		sum__get = parseInt(sum.value)+5000;
		$(".credit__money-return .info__number").text(sum__get+" ₽");
	}

	$(".credit__date-number").text(time.value);
	time.onchange=function(){
		$(".credit__date-number").text(time.value);
	}
	
	$(".questions__item").click(function(){
		$(this).toggleClass("open");
		$(this).find(".questions__item-body").slideToggle();
		$(".questions__item").not($(this)).removeClass("open");
		$(".questions__item").not($(this)).find(".questions__item-body").slideUp();
	})

})

