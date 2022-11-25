
$(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
/* 		adaptiveHigth: true, */
		prevArrow: '<button type="button" class="slick-prev"><img src="icons/arrows_back.png"></button>',
		nextArrow: '<button type="button" class="slick-next"><img src="icons/arrows_next.png"></button>',
		responsive: [
			{
				breakpoint: 768,
				settings: {
					dots: true,
					arrows: false
				}
			}
		]
	  });
});