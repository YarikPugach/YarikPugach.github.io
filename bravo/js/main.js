$(document).ready(function() {
	
  /*меню*/
  $('button').on('click', function() {
    $('.menu').slideToggle();
  });

  /*hover на картинки*/
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

  /* popup  модальние окна*/
  $('.popup-btn').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeIn();
  });

  $('.popup-close').on('click', function(event) {
    event.preventDefault();
    $('.popup').fadeOut();
  });

});