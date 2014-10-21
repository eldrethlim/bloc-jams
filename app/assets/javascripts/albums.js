var countTotalTime = function(songs) {
  var total = 0;
  
  function totalTime(element) {
    total += element.duration;
  }
  songs.forEach(totalTime);
  var minutes = Math.floor(total/60);
  var seconds = total - minutes * 60;

  return minutes + ':' + seconds;
};

var buildAlbumThumbnail = function(album) {

  var albumTotalTime = countTotalTime(album.songs);

  var template =
      '<div class="collection-album-container col-md-2">'
    + '  <img src="/assets/album-placeholder.png"/>'
    + '  <div class="caption album-collection-info">'
    + '    <p>'
    + '      <a class="album-name" href="/albums/' + album.id + '">' + album.title + '</a>'
    + '      <br/>'
    + '      <a href="/albums/' + album.id + '">' + album.author + '</a>'
    + '      <br/>'
    + '      ' + album.songs.length + ' songs'
    + '      <br/>'
    + '      ' + albumTotalTime + ' total length.'
    + '      <br/>'
    + '    </p>'
    + '  </div>'
    + '</div>';

 return $(template);
};

if (document.URL.match(/\/albums/)) {

  $(document).ready(function(){
    $.getJSON('/api/albums.json', function(json) {
      var $collection = $(".collection-container .row");
      $collection.empty();

      for (i = 0; i < json.albums.length; i++) {
        var album = json.albums[i];
        var $newThumbnail = buildAlbumThumbnail(album);
        $collection.append($newThumbnail);
      }
    });
  });
}