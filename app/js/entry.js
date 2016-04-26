require('angular/angular');
var angular = window.angular;

var sturdyApp = angular.module('SturdyApp', []);
require('./contacts/contacts')(sturdyApp);

$(document).ready(function() {
  $('.mobile-nav').hide();
  $('.menu').on('click', function() {
    $('.mobile-nav').fadeIn('fast');
  });
});
