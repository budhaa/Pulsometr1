
/* $(document).ready(function(){
	$('.carousel__inner').slick({
		speed: 1200,
		adaptiveHigth: true,
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
}); */

/* const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
	controls: false,
	nav: false
  });

  document.querySelector('.prev').addEventListener('click', function () {
	slider.goTo('prev');
  });

  document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
  }); */

  $(document).ready(function(){
	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:10,
		nav:false,
		items:1
		
	});
  });

  document.querySelector('.next').addEventListener('click', function () {
	slider.goTo('next');
});