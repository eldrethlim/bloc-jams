var createSongRow = function(song) {
  var template =
    '<tr>'
   +' <td class="song-number col-md-1" data-song-number="' + song.number + '">' + song.number + '</td>'
   +' <td class="col-md-9">' + song.title + '</td>'
   +' <td class="col-md-2">' + song.duration + '</td>'
   +'</tr>';

   var $row = $(template);

   var onHover = function(event) {
    var songNumberCell = $(this).find('.song-number');
    songNumberCell.html('<a class="album-song-button"><i class="fa fa-play"></i></a>')
   };

   var offHover = function(event) {
    var songNumberCell = $(this).find('.song-number');
    var songNumber = songNumberCell.data('song-number');
    songNumberCell.html(songNumber);
   };

   var clickHandler = function(event) {
    var songNumber = $(this).data('song-number');

    if ( a song is playing) {
      var currentlyPlayingCell = $('.song-number[data-song-number="' + currentlyPlayingSong + '"]');
      currentlyPlayingCell.html(currentlyPlayingSong);
    }

    if ( a non-playing song was clicked ) {
      $(this).html('<a class="album-song-button"><i class="fa fa-pause"></i></a>');
      currentlyPlayingSong = songNumber;
    }

    else if ( the playing song was clicked ) {
      $(this).html('<a class="album-song-button"><i class="fa fa-play"></i></a>');
      currentlyPlayingSong = null;
    }
   };

   $row.find('.song-number').click(clickHandler);
   $row.hover(onHover, offHover);
   return $row;
};

var setAlbumView = function(album) {
    
    var $songList = $(".album-song-listing");
    $songList.empty();

    var $albumTitle = $('.album-title');
    $albumTitle.text(album.title);

    var $albumAuthor = $('.album-author');
    $albumAuthor.text(album.author);

    var $albumDescription = $('.album-description');
    $albumDescription.text(album.description);

    var songs = album.songs;
    function createSongRows(song) {
      var $newRow = createSongRow(song);
      $songList.append($newRow);
    }
    songs.forEach(createSongRows);
};

function intializeAlbumView() {

  if (document.URL.match(/\/albums\/\d+/)) {
    var id = document.URL.split('/').slice(-1);
    $.getJSON('/api/albums/' + id + '.json', function(json) {
      setAlbumView(json.album);
    });
  }
}

$(document).ready(intializeAlbumView);