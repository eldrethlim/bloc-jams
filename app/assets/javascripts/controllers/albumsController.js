blocJams.controller('albumsController', ['$scope', '$http', '$rootScope', 'songPlayer', 'songDurationConverter', 'albumsData', function($scope, $http, $rootScope, songPlayer, songDurationConverter, albumsData) {

  var albums = albumsData.albums;

  $rootScope.bodyClass = null;

  var countTotalTime = function(songs) {
    var total = 0;

    songs.forEach(function(element) {
      total += element.duration;
    });

    return songDurationConverter.convertToMinutesAndSeconds(total);
  }

  var albumSongTimes = [];

  for (var i = 0; i < albums.length; i++) {
    albums[i].totalSongTime = countTotalTime(albums[i].songs);
  }

  $scope.albums = albums;

  $scope.playAlbum = function(album) {
    songPlayer.setSong(album, album.songs[0]);
  }
}]);