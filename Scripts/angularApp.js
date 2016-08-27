var app = angular.module('octopush', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
        url: '/home',
        cache: false,
        templateUrl: 'home/home.html',
        controller: "HomeCtrl"
    });
});