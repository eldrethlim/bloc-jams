blocJams.controller('albumsController', ['$scope', '$http', function($scope, $http) {
  $http.get('/api/albums.json').success(function(data) {
  
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
    albumSongTimes.push(countTotalTime(albums[i].songs));
  }
  
  for (var x = 0; x < albums.length; x++) {
    albums[x].totalSongTime = albumSongTimes[x];
  }

  $scope.albums = albums;
  });
}]);