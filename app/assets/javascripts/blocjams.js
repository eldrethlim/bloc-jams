var blocJams = angular.module('BlocJams', ['ui.router']);

blocJams.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('landing', {
    url: '/',
    controller: 'landingController',
    templateUrl: '/templates/landing.html'
  });

  $stateProvider.state('albums', {
    url: '/albums',
    controller: 'albumsController',
    templateUrl: '/templates/albums.html'
  });
}]);