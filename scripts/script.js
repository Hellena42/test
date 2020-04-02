$(document).ready(function(){
  
  $('.main-nav').removeClass('main-nav--no-js');
  $('.main-nav').addClass('main-nav--closed');

  $('.main-nav__button-close').click(function(){
     if ($('.main-nav').hasClass('main-nav--closed')){
      $('.main-nav').addClass('main-nav--opened');
      $('.main-nav').removeClass('main-nav--closed');
    } else {
      $('.main-nav').addClass('main-nav--closed');
      $('.main-nav').removeClass('main-nav--opened');
    };

    $('body').toggleClass('lock');
  });
});