require('angular/angular');
var angular = window.angular;

var sturdywellApp = angular.module('SturdywellApp', []);
require('./contacts/contacts')(sturdywellApp);