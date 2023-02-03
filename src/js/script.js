
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

	const owl = $('.owl-carousel'); //здесь мы помещаем в переменную owl собственно свою карусель.

	$('.next').click(function() { // тут написанной найди элемент с классом .next и выполни такую функцию
    owl.trigger('next.owl.carousel', [500]); // для переменной owl выполни функцию trigger и параметром "далее" и задержкой 500млс
	});

	$('.prev').click(function() { // тут тоже самое, только для кнопки назад
    owl.trigger('prev.owl.carousel', [500]);
	});

	$('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
		$(this)
		  .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
		  .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
	});

	function toggleSlide(item){
		$(item).each(function(i) {
		$(this).on('click', function(e) {
			e.preventDefault();
			$('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
			$('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
			})
		});
	};

	toggleSlide('.catalog-item__link')
	toggleSlide('.catalog-item__back')

	// Modal

	$('[data-modal=consultation]').on('click', function() {
		$('.overlay, #consultation').fadeIn('slow');
	});
	$('.modal__close').on('click', function() {
		$('.overlay, #consultation, #thanks, #order').fadeOut('slow');
	});
	$('.button_mini').each(function(i) {
		$(this).on('click', function() {
			$('#order .modal__descr').text($('.catalog-item__subtitele').eq(i).text());
			$('.overlay, #order').fadeIn('slow');
		})
	});

	function valideForms(form){
		$(form).validate({
				rules: {
					name: {
						required: true,
						minlength: 2
					},
					phone: "required",
					email: {
						required: true,
						email: true
					}
				},
				messages: {
					name: {
						required: "Пожалуйста введите свое имя",
						minlength: jQuery.validator.format("Введите не меньше {0} символов!")
					},
					phone: "Пожалуйста введите свой номер телефона",
					email: {
					required: "Пожалуйста введите свою электронную почту",
					email: "Неверный формат электронной почты"
					}
				}
		});
	};

	valideForms('#consultation-form');
	valideForms('#consultation form');
	valideForms('#order form');
});

