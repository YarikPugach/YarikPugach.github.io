function sayHello() {
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c Made with ❤️ by Rivercode %c http://www.riverco.de/ %c %c 🐳 \n\n', 'border: 1px solid #000;color: #000; background: #fff001; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];
    window.console.log.apply(console, args);
  } else if (window.console) {
    window.console.log('Made with love ❤️ Riverco.de - http://www.riverco.de/  ❤️');
  }
}
module.exports = sayHello;

$(document).ready(function() {
  $('.content__photo-nav li:first').addClass('select'); // Первой вкладке добавляетсякласс select
  $('.content__photo-panels>div').hide().filter(':first').show(); // Скрываются все блоки с описанием вкладок кроме первого
  $('.content__photo-nav a').click(function() { // При клике на вкладку
    $('.content__photo-panels>div').hide().filter(this.hash).show(); // - показывается блок с описанием текущей вкладки
    $('.content__photo-nav li').removeClass('select'); // - удаляется класс 'select' у активной ранее вкладки
    $(this).parent().addClass('select'); // - добавляется класс 'select' для выбранной вкладки
    return (false); // - прерывается обработка события onClick
  });

  $('.btn-mobile').on('click', function() {
    $('.header__nav').slideToggle('slow');
  });
  $(window).resize(function() {
    if ($(window).width() > 500) {
      $('.header__nav').removeAttr('style');
    }
  });
});
