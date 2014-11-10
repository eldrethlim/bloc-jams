blocJams.controller('playerBarController', ['$scope', 'songPlayer', function($scope, songPlayer){
  $scope.songPlayer = songPlayer;

  songPlayer.onTimeUpdate(function(event, time){
    $scope.$apply(function(){
      $scope.playTime = time;
    });
  });
  
}]);