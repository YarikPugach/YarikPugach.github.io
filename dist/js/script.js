$(document).ready(function() {

	$('.content__photo-nav li:first').addClass('select');                // Первой вкладке добавляетсякласс select
	$('.content__photo-panels>div').hide().filter(':first').show();      // Скрываются все блоки с описанием вкладок кроме первого
	$('.content__photo-nav a').click(function(){                         // При клике на вкладку
		$('.content__photo-panels>div').hide().filter(this.hash).show();   // - показывается блок с описанием текущей вкладки
		$('.content__photo-nav li').removeClass('select');                 // - удаляется класс 'select' у активной ранее вкладки
		$(this).parent().addClass('select');                    // - добавляется класс 'select' для выбранной вкладки
		return (false);                                         // - прерывается обработка события onClick
	})

	$('.btn-mobile').on('click', function() {
		$('.header__nav').slideToggle('slow');
	});
	$(window).resize(function(){
		if ($(window).width() > 500) {
			$('.header__nav').removeAttr('style');
		}
	});

});