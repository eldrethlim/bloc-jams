blocJams.controller('albumController', ['$scope', '$http', '$stateParams', 'songPlayer', '$rootScope', 'consoleLogger', function($scope, $http, $stateParams, songPlayer, $rootScope, consoleLogger) {
  $http.get('/api/albums/' + $stateParams.albumID + '.json').success(function(data) {
    
    consoleLogger.logThis("Hello World 1!");

    $rootScope.bodyClass = null;

    var album = data.album;
    
    $scope.album = album;

    var hoveredSong = null;
    var playingSong = null;

    $scope.onHoverSong = function(song) {
      hoveredSong = song;
    };

    $scope.offHoverSong = function(song) {
      hoveredSong = null;
    };

    $scope.getSongState = function(song) {
      if (song === songPlayer.currentSong && songPlayer.playing) {
        return 'playing';
      }
      else if (song === hoveredSong) {
        return 'hovered';
      }
      return 'default';
    }

    $scope.playSong = function(song) {
      songPlayer.setSong($scope.album, song);
      songPlayer.play();
    };

    $scope.pauseSong = function(song) {
      songPlayer.pause();
    };

    $scope.isOdd = function(song) {
      return song.number % 2 != 0;
    }
  });
}]);