blocJams.controller('playerBarController', ['$scope', 'songPlayer', 'consoleLogger', function($scope, songPlayer, consoleLogger){
  $scope.songPlayer = songPlayer;
      consoleLogger.logThis("Hello World 2!");
}]);