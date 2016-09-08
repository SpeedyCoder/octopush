var app = angular.module('octopush', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/home');

  $stateProvider
    .state('home', {
        url: '/home',
        templateUrl: 'home/home.html',
        controller: 'HomeCtrl'
    })
    .state('news', {
        url: '/news',
        templateUrl: 'news/news.html',
        controller: 'NewsCtrl'
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
    })
    .state('documents', {
        url: '/documents',
        templateUrl: 'documents/documents.html'
    })
    .state('links', {
        url: '/links',
        templateUrl: 'links/links.html'
    })
    .state('committee', {
        url: '/committee',
        templateUrl: 'committee/committee.html',
        controller: 'CommitteeCtrl'
    });
});