var currentlyPlayingSong = null;

var convertTimeToMinutesAndSeconds = function(duration) {
  
  var minutes = Math.floor(duration/60);
  var seconds = duration - minutes * 60;

  if (seconds < 10) {
    return minutes + ':0' + seconds;
  }
  else {
    return minutes + ':' + seconds;
  }
};

var createSongRow = function(song) {

  var songDuration = convertTimeToMinutesAndSeconds(song.duration);

  var template =
    '<tr>'
   +' <td class="song-number col-md-1" data-song-number="' + song.number + '">' + song.number + '</td>'
   +' <td class="col-md-9">' + song.title + '</td>'
   +' <td class="col-md-2">' + songDuration + '</td>'
   +'</tr>';

   var $row = $(template);

   var onHover = function() {
    var songNumberCell = $(this).find('.song-number');
    var songNumber = songNumberCell.data('song-number');
    if (songNumber !== currentlyPlayingSong) {
      songNumberCell.html('<a class="album-song-button"><i class="fa fa-play"></i></a>');
    }
   };

   var offHover = function() {
    var songNumberCell = $(this).find('.song-number');
    var songNumber = songNumberCell.data('song-number');
    if (songNumber !== currentlyPlayingSong) {
        songNumberCell.html(songNumber);
    }
   };

   var clickHandler = function() {
    var songNumber = $(this).data('song-number');

    if (currentlyPlayingSong != null) {
      var currentlyPlayingCell = $('.song-number[data-song-number="' + currentlyPlayingSong + '"]');
      currentlyPlayingCell.html(currentlyPlayingSong);
    }

    if (currentlyPlayingSong !== songNumber) {
      $(this).html('<a class="album-song-button"><i class="fa fa-pause"></i></a>');
      currentlyPlayingSong = songNumber;
    }

    else if (currentlyPlayingSong === songNumber) {
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

var setupAlbumNavigationButtons = function(album) {
  var nextAlbum = album.next_album_id;
  var previousAlbum = album.previous_album_id;

  var $nextAlbumLink = $('.album-navigator-container.next');
  var $previousAlbumLink = $('.album-navigator-container.previous');
  
  if (nextAlbum != null) {
    $nextAlbumLink.html('<a class="album-link" href="/albums/' + nextAlbum + '"><i class="fa fa-arrow-left fa-4x"></i></a>');
  }
  if (previousAlbum != null) {
    $previousAlbumLink.html('<a class="album-link" href="/albums/' + previousAlbum + '"><i class="fa fa-arrow-right fa-4x"></i></a>');
  }
}

var updateSeekPercentage = function($seekBar, event) {
  var barWidth = $seekBar.width();
  var offsetX = event.pageX - $seekBar.offset().left;

  var offsetXPercent = (offsetX / barWidth) * 100;
  offsetXPercent = Math.max(0, offsetXPercent);
  offsetXPercent = Math.min(100, offsetXPercent);

  var percentageString = offsetXPercent + '%';
  $seekBar.find('.fill').width(percentageString);
  $seekBar.find('.thumb').css({left: percentageString});
};

var setupSeekBars = function() {
  $seekBars = $('.player-bar .seek-bar');
  $seekBars.click(function(event) {
    updateSeekPercentage($(this), event);
  });
  
  $seekBars.find('.thumb').mousedown(function(event) {
    var $seekBar = $(this).parent();

    $seekBar.addClass('no-animate');

    $(document).on('mousemove.thumb', function(event) {
      updateSeekPercentage($seekBar, event);
    });

    $(document).on('mouseup.thumb', function() {
      $seekBar.removeClass('no-animate');

      $(document).off('mousemove.thumb');
      $(document).off('mouseup.thumb');
    });
  });
};

function intializeAlbumView() {

  if (document.URL.match(/\/albums\/\d+/)) {
    setupSeekBars();
    var id = document.URL.split('/').slice(-1);
    $.getJSON('/api/albums/' + id + '.json', function(json) {
      setAlbumView(json.album);
      setupAlbumNavigationButtons(json.album);
    });
  }
}

$(document).ready(intializeAlbumView);