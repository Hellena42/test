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

  $('.main-menu__burger').on('click', function(){
    $('.page-filter__aside-list').toggleClass('page-filter__block--active');
    $('body').toggleClass('lock');
    $('.modal-overlay').addClass('modal-overlay__show');
  });

  $('.page-filter__hidden-btn').on('click', function(){
    $('.page-filter__wrapper').toggleClass('page-filter__block--active');
    $('body').toggleClass('lock');
  });

  $('.modal-enter__button-close').on('click', function(){
    $('.page-filter__wrapper, .page-filter__aside-list').removeClass('page-filter__block--active');
    $('.modal-overlay').removeClass('modal-overlay__show');
  });


  $('.header-phones__button').magnificPopup({
    type: 'inline',
    focus: '#callback',
    closeBtnInside: false,
    callbacks: {
    open: function() {
      $("#callback").mask("+38(099) 999-99-99");
      },
    }
  });

  $('.user-list__button').magnificPopup({
    type: 'inline',
    focus: '#singup_email',
    closeBtnInside: false,
  });

  $(document).on('click','.modal-enter__button-close', function(){
    $.magnificPopup.close();
  });

   $('.form-validate').each(function(){
  let $form = $(this);
  $form.validate({
    rules: {
      callback: {
        required: true,
        phoneValidate: true
      },
      password: {
        required: true,
        minlength: 4
      }
    },
    messages: {
      callback: {
        required: 'Введите номер телефона'
      },
      email: {
        required: 'Поле email обязательно к заполнению',
        email: 'Введите, корректный email'
      }, 
      password: {
        required: 'Поле "Пароль" обязательно к заполнению',
        minlength: 'Пароль должен состоять минимум из 4 символов'
    }
  }
    });
 });
});