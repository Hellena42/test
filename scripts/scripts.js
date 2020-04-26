$(document).ready(function(){

  $('.main-nav').removeClass('main-nav--no-js');
  $('.main-nav').addClass('main-nav--closed');


  let openMainMenu = function(){
      $('.main-nav').addClass('main-nav--opened');
      $('.main-nav').removeClass('main-nav--closed');
  };

  let closeMainMenu = function(){
    $('.main-nav').addClass('main-nav--closed');
    $('.main-nav').removeClass('main-nav--opened');
  };

  $('.main-nav__button-close').click(function(){
     if ($('.main-nav').hasClass('main-nav--closed')){
      openMainMenu();
    } else {
      closeMainMenu();
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
    $('body').addClass('lock');
  });

  $('.modal-enter__button-close').on('click', function(){
    $('.page-filter__wrapper, .page-filter__aside-list').removeClass('page-filter__block--active');
    $('.modal-overlay').removeClass('modal-overlay__show');
    $('body').removeClass('lock');
  });


  $('.js-callback').magnificPopup({
    type: 'inline',
    focus: '#callback',
    closeBtnInside: false,
    callbacks: {
    open: function() {
      $("#callback").mask("+38(099) 999-99-99");
      },
    }
  });

  $('.js-singup').magnificPopup({
    type: 'inline',
    focus: '#singup_email',
    closeBtnInside: false,
  });

  $(document).on('click','.modal-enter__button-close', function(){
    closeMainMenu();
    $.magnificPopup.close();
  });

   $('.js-form-validate').each(function(){
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
      },
      search: {
        minlength: 2
      },
      cost: {
        number: true,
        min: 50,
        step: 1
      }
    },
    messages: {
      callback: {
        required: 'Введите номер телефона'
      },
      email: {
        required: 'Поле email обязательно к заполнению',
        email: 'Введите корректный email'
      }, 
      password: {
        required: 'Поле "Пароль" обязательно к заполнению',
        minlength: 'Пароль должен состоять минимум из 4 символов'
    },
      search: {
        minlength: 'Запрос должен состоять минимум из 2 символов'
      },
      cost: 'Введите число больше 50'
  }
    });
 });
    
   let clicks = 0;
   let addCounter = function(){
      $('.actions-list__counter').show('.actions-list__link');
      clicks++;
      $('.actions-list__counter').html(clicks);
    };

    $('.js-item-compare').on('click', function(){
      $('.js-title-compare').text('В сравнении');
        addCounter();
    });

});