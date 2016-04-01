require('angular/angular');
var angular = window.angular;

var sturdyApp = angular.module('SturdyApp', []);
require('./sturdy/sturdy')(sturdyApp);