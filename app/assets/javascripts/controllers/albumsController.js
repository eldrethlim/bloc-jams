blocJams.controller('albumsController', ['$scope', '$http', '$rootScope', function($scope, $http, $rootScope) {
  $http.get('/api/albums.json').success(function(data) {

    $rootScope.bodyClass = null;
  
    var albums = data.albums;

    var countTotalTime = function(songs) {
      var total = 0;
      
      songs.forEach(function (element) {
        total += element.duration;
      });
      var minutes = Math.floor(total/60);
      var seconds = total - minutes * 60;

      if (seconds < 10) {
        return minutes + ':0' + seconds;
      }
      else {
        return minutes + ':' + seconds;
      }
    };

    var albumSongTimes = [];

    for (var i = 0; i < albums.length; i++) {
      albums[i].totalSongTime = countTotalTime(albums[i].songs);
    }

    $scope.albums = albums;
  });
}]);