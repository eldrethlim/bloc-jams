blocJams.service('albumsData', function($http, $cacheFactory) {
  var albumsCache = $cacheFactory.get('albumsCache');

  $http.get('/api/albums.json', {
    cache: albumsCache
  });

  debugger;
  console.log(albumsCache);
});