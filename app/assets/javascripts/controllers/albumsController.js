blocJams.controller('albumsController', ['$scope', '$http', '$rootScope', 'SongPlayer', 'Api', function($scope, $http, $rootScope, SongPlayer, Api) {

  Api.albums.then(function (albums) {

    $rootScope.bodyClass = null;

    var countTotalTime = function(songs) {
      var total = 0;

      songs.forEach(function(element) {
        total += element.duration;
      });

      return total;
    }

    var albumSongTimes = [];

    for (var i = 0; i < albums.length; i++) {
      albums[i].totalSongTime = countTotalTime(albums[i].songs);
    }

    $scope.albums = albums;

    $scope.playAlbum = function(album) {
      SongPlayer.setSong(album, album.songs[0]);
    }
  });
}]);

