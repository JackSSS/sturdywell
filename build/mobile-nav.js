$(document).ready(function() {
  $('.mobile-nav').hide();
  $('.menu').on('click', function() {
    $('.mobile-nav').fadeIn('fast');
  });

  $('#close').on('click', function() {
    $('.mobile-nav').slideUp('fast');
  });
});
