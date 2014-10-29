blocJams.controller('landingController', ['$scope', function($scope) {

  $scope.titleText = "Bloc Jams!";

  $scope.subText = "Turn the music up!";

  $scope.subTextClicked = function() {
    $scope.subText += '!';
  };

  $scope.albumURLs = [
   'assets/album-placeholders/album-1.jpg',
   'assets/album-placeholders/album-2.jpg',
   '/assets/album-placeholders/album-3.jpg',
   '/assets/album-placeholders/album-4.jpg',
   '/assets/album-placeholders/album-5.jpg',
   '/assets/album-placeholders/album-6.jpg',
   '/assets/album-placeholders/album-7.jpg',
   '/assets/album-placeholders/album-8.jpg',
   '/assets/album-placeholders/album-9.jpg',
  ];

  $scope.shuffle = function(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };
}]);