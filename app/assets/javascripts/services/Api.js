blocJams.service('Api', function($http) {
  var albums = $http.get('/api/albums.json').
    then(function(response) { return response.data.albums});

  return {
    albums: albums
  };
});
