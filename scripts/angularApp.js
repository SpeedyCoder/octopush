var app = angular.module('octopush', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'home/home.html',
        controller: "HomeCtrl"
    })
    .state('club', {
        url: '/club',
        templateUrl: 'club/club.html'
    })
    .state('playing', {
        url: '/playing',
        templateUrl: 'playing/playing.html'
    })
    .state('octopush', {
        url: '/octopush',
        templateUrl: 'octopush/octopush.html'
    });
});