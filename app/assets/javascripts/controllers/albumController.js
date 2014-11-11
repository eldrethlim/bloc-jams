blocJams.controller('albumController', ['$scope', 'Api', '$stateParams', 'SongPlayer', '$rootScope', function($scope, Api, $stateParams, SongPlayer, $rootScope) {

  Api.albums.then(function (albums) {

    $rootScope.bodyClass = null;
    var id = $stateParams.albumID
    
    var findAlbum = function(albums, id) {
      for (x = 0; x < albums.length; x++) {
        if (albums[x].id == id) {
          return albums[x];
        }
      }
    }

    var album = findAlbum(albums, id);
    
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
      if (song === SongPlayer.currentSong && SongPlayer.playing) {
        return 'playing';
      }
      else if (song === hoveredSong) {
        return 'hovered';
      }
      return 'default';
    }

    $scope.playSong = function(song) {
      SongPlayer.setSong($scope.album, song);
    };

    $scope.pauseSong = function(song) {
      SongPlayer.pause();
    };

    $scope.isOdd = function(song) {
      return song.number % 2 != 0;
    }
  });
}]);