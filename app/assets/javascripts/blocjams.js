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

  $stateProvider.state('song', {
    url: '/song',
    controller: 'songController',
    templateUrl: '/templates/song.html'
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


blocJams.service('songPlayer', function() {
  return {
    currentSong: null,
    currentAlbum: null,
    playing: false,

    play: function() {
      this.playing = true;
    },
    pause: function () {
      this.playing = false;
    },
    setSong: function(album, song) {
      this.currentAlbum = album;
      this.currentSong = song;
    }
  };
});

blocJams.service('consoleLogger', function() {
  return {
    logThis: function(logger) {
      console.log(logger);
    }
  }
})