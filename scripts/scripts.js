$(document).ready(function(){

  $('.main-nav').removeClass('main-nav--no-js');
  $('.main-nav').addClass('main-nav--closed');

  const openMainMenu = function(){
      $('.main-nav').addClass('main-nav--opened');
      $('.main-nav').removeClass('main-nav--closed');
  };

  const closeMainMenu = function(){
    $('.main-nav').addClass('main-nav--closed');
    $('.main-nav').removeClass('main-nav--opened');
  };

  $('.main-nav__button-close').click(function(e){
    e.preventDefault();
     if ($('.main-nav').hasClass('main-nav--closed')){
      openMainMenu();
    } else {
      closeMainMenu();
    };
    $('body').toggleClass('lock');
  });

  $('.main-menu__burger').on('click', function(){
    if ($(window).width() < 1023) {
      $('.page-filter__aside-list').toggleClass('aside__block--active');
      $('body').toggleClass('lock');
      $('.modal-overlay').addClass('modal-overlay__show');
    } 
    return false;
  });

  $('.page-filter__hidden-btn').on('click', function(e){
    e.preventDefault();
    $('.page-filter__wrapper').toggleClass('aside__block--active');
    $('body').addClass('lock');
  });

  $('.modal-enter__button-close').on('click', function(){
    $('.page-filter__wrapper, .page-filter__aside-list').removeClass('aside__block--active');
    $('.page-filter__wrapper, .page-filter__aside-list').addClass('aside__block--close');
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

  $('.js-subscribe').submit(function(e){
    e.preventDefault();
    if ($('.js-subscribe').valid()) {
      $.ajax({
        type: "POST",
        url: "scripts/mail.php",
        data: $('.js-subscribe').serialize(),
        success: function(){
          $('#subscribe-email').val('');
          $.magnificPopup.open({
            items: {
              src: '.modal-success'
            }
          });
          $('.modal-success-link').on('click', function(){
          $.magnificPopup.close();
        })
        }
        });
    }
  });

const $makeCounter = function(){
    let clicks = 0;
    return function(){
      ++clicks;
      return clicks;
    };
  };

const $counterCompare = $makeCounter();
const $counterFavorite = $makeCounter();
const $counterProduct = $makeCounter();

$('.js-counter-compare').on('click', function(){
  $('.js-title-compare').text('В сравнении');
  $('.js-item-compare').find('.actions-list__counter').show().html($counterCompare());
});

$('.js-counter-favorite').on('click', function(){
  $('.js-title-favorite').text('В избранном');
  $('.js-item-favorite').find('.actions-list__counter').show().html($counterFavorite());
});

$('.js-buy-product').on('click', function(){
  $('.js-title-basket').text('В корзине');
  $('.js-item-basket').find('.actions-list__counter').show().html($counterProduct());
});

$('.sort-category').select2({
  dropdownParent: $('.page-search__category'),
  minimumResultsForSearch: Infinity
});

$('.page-filter__select').each(function(){
  let $selectParent = $(this).parent();
  $(this).select2({
  width: '100%',
  dropdownParent: $selectParent,
  minimumResultsForSearch: Infinity
});
});

$('.page-filter__tab-button').on('click', function(){
  $('.page-filter__tab-button').removeClass('page-filter__tab-button--active');
  $('.page-filter__tab-button').eq($(this).index()).addClass('page-filter__tab-button--active');
  $('.page-filter__select-wrapper').hide().eq($(this).index()).fadeIn();
}).eq(0).addClass('active');
  
$('.page-filter__select-clear-btn').on('click', function(){
  $(".page-filter__select").select2("val", "0");
  $('.page-filter__cost').val('');
});

 });