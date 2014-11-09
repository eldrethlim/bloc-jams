blocJams.controller('albumController', ['$scope', '$http', '$stateParams', 'songPlayer', '$rootScope', 'songDurationConverter', function($scope, $http, $stateParams, songPlayer, $rootScope, songDurationConverter) {
  $http.get('/api/albums/' + $stateParams.albumID + '.json').success(function(data) {

    $rootScope.bodyClass = null;

    var album = data.album;
    var songs = album.songs;
    
    var convertSongDuration = function(duration) {
      return songDurationConverter.convertToMinutesAndSeconds(duration)
    }

    for (var x = 0; x < songs.length; x++) {
      songs[x].convertedDuration = convertSongDuration(songs[x].duration)
    }
    
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
    };

    $scope.pauseSong = function(song) {
      songPlayer.pause();
    };

    $scope.isOdd = function(song) {
      return song.number % 2 != 0;
    }
  });
}]);