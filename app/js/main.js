$(function () {

  $('.header__burger').on('click', function () {
    $('.header__burger, .menu').toggleClass('active');
  });
  
  $('input[type="file"], select').styler();



}); 