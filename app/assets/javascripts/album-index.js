var buildAlbumThumbnail = function(album) {
  var template =
      '<div class="collection-album-container col-md-2">'
    + '  <img src="d:/work/code/rails/bloc-jams/app/assets/images/album-placeholder.png"/>'
    + '  <div class="caption album-collection-info">'
    + '    <p>'
    + '      <a class="album-name" href="/album.html">' + album.title + '</a>'
    + '      <br/>'
    + '      <a href="/album.html">' + album.author + '</a>'
    + '      <br/>'
    + '      ' + album.songs.length + ' songs'
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