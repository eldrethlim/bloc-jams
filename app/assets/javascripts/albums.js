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

var buildAlbumThumbnail = function(album) {

  var albumTotalTime = countTotalTime(album.songs);

  var template =
      '<div class="collection-album-container col-md-2">'
    + '  <div id="' + album.id + '" class="collection-album-image-container">'
    + '    <img src="/assets/album-placeholder.png"/>'
    + '  </div>'
    + '  <div class="caption album-collection-info">'
    + '    <p>'
    + '      <a class="album-name" href="/albums/' + album.id + '">' + album.title + '</a>'
    + '      <br/>'
    + '      <a href="/albums/' + album.id + '">' + album.author + '</a>'
    + '      <br/>'
    + '      ' + album.songs.length + ' songs'
    + '      <br/>'
    + '      <p class="css-after-test">' + albumTotalTime + '</p>'
    + '      <br/>'
    + '    </p>'
    + '  </div>'
    + '</div>';

 return $(template);
};

var buildAlbumOverlay = function(id) {

  var template =
    '<div class="collection-album-image-overlay">'
   +'  <div class="collection-overlay-content">'
   +'    <a class="collection-overlay-button" href="/albums/' + id + '">'
   +'      <i class="fa fa-play"></i>'
   +'    </a>'
   +'    &nbsp;'
   +'    <a class="collection-overlay-button">'
   +'      <i class="fa fa-plus"></i>'
   +'    </a>'
   +'    &nbsp;'
   +'    <a class="collection-overlay-button">'
   +'      <i class="fa fa-share"></i>'
   +'    </a>'
   +'  </div>'
   +'</div>';

  return $(template);
};

function intializeAlbumsView() {
  if (document.URL.match(/\/albums/)) {
    $.getJSON('/api/albums.json', function(json) {
      var $collection = $(".collection-container .row");
      $collection.empty();

      for (i = 0; i < json.albums.length; i++) {
        var album = json.albums[i];
        var $newThumbnail = buildAlbumThumbnail(album);
        $collection.append($newThumbnail);
      }

      var onHover = function() {
        var id = $(this).attr('id');
        $(this).append(buildAlbumOverlay(id));
      };

      var offHover = function() {
        $(this).find('.collection-album-image-overlay').remove();
      };

      $collection.find('.collection-album-image-container').hover(onHover, offHover);
    });
  }
}

$(document).ready(intializeAlbumsView);
$(document).on('page:load', intializeAlbumsView);