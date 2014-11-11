blocJams.controller('landingController', ['$scope', '$rootScope', 'Api', function($scope, $rootScope, Api) {

  $rootScope.bodyClass = 'landing';
  
  Api.albums.then(function (albums) {
    var latestAlbums = [];

    for (var a = 0; a < 9; a++) {
      latestAlbums.push(albums[a]);
    }
    $scope.latestAlbums = latestAlbums;
  });

  $scope.titleText = "Bloc Jams!";

  $scope.subText = "Turn the music up!";

  $scope.subTextClicked = function() {
    $scope.subText += '!';
  };

  $scope.shuffle = function(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
}]);