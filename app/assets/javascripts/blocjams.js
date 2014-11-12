var blocJams = angular.module('BlocJams', ['ui.router']);

blocJams.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('landing', {
    url: '/',
    views: {
      '': {
        templateUrl: '/templates/landing.html',
        controller: 'landingController'
      }
    }
  });

  $stateProvider.state('albums', {
    url: '/albums',
    views : {
      '': { 
        templateUrl: '/templates/albums.html',
        controller: 'albumsController' 
      },
      'albumsPlayerBar@albums': { 
        templateUrl: '/templates/player_bar.html',
        controller: 'playerBarController' 
      }
    }
  });

  $stateProvider.state('profile', {
    url: '/profile',
    templateUrl: '/templates/profile.html',
    controller: 'profileController'
  });
  
  $stateProvider.state('song', {
    url: '/song',
    templateUrl: '/templates/song.html',
    controller: 'songController'
  });

  $stateProvider.state('album', {
    url: '/album/:albumID',
    views: {
      '': {
        templateUrl: '/templates/album.html',
        controller: 'albumController'
      },
      'albumPlayerBar@album': {
        templateUrl: '/templates/player_bar.html',
        controller: 'playerBarController'
      }
    }
  })
}]);