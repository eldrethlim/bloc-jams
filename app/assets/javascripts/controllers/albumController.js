blocJams.controller('albumController', ['$scope', '$http', '$stateParams', function($scope, $http, $stateParams) {
  $http.get('/api/albums/' + $stateParams.albumID + '.json').success(function(data) {
    
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
      if (song === playingSong) {
        return 'playing';
      }
      else if (song === hoveredSong) {
        return 'hovered';
      }
      return 'default';
    }

    $scope.playSong = function(song) {
      playingSong = song;
    };

    $scope.pauseSong = function(song) {
      playingSong = null;
    };

    $scope.isOdd = function(song) {
      return song.number % 2 != 0;
    }
  });
}]);