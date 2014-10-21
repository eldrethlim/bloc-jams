var createSongRow = function(song) {
  var template =
    '<tr>'
   +' <td class="col-md-1">' + song.number + '</td>'
   +' <td class="col-md-9">' + song.title + '</td>'
   +' <td class="col-md-2">' + song.duration + '</td>'
   +'</tr>';

   return $(template);
};

var setAlbumView = function(album) {
    
    var $songList = $(".album-song-listing");
    $songList.empty();

    var $albumTitle = $('.album-title');
    $albumTitle.text(album.title);

    var $albumAuthor = $('.album-author');
    $albumAuthor.text(album.author);

    var $albumMeta = $('album-meta-info');
    $albumMeta.text(album.description);

    var songs = album.songs;
    function createSongRows(song) {
      var $newRow = createSongRow(song);
      $songList.append($newRow);
    }
    songs.forEach(createSongRows);
};

if (document.URL.match(/\/albums\/\d+/)) {
 $(document).ready(function() {
  var id = document.URL.split('/').slice(-1);
  $.getJSON('/api/albums/' + id + '.json', function(json) {
    setAlbumView(json.album);
  });
 });
}