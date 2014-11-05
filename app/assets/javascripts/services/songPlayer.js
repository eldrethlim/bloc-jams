blocJams.service('songPlayer', function() {
  var trackIndex = function(album,song) {
    return album.songs.indexOf(song);
  };

  return {
    currentSong: null,
    currentAlbum: null,
    playing: false,

    play: function() {
      this.playing = true;
    },
    pause: function () {
      this.playing = false;
    },
    next: function() {
      var currentTrackIndex = trackIndex(this.currentAlbum, this.currentSong);
      currentTrackIndex++;
      if (currentTrackIndex >= this.currentAlbum.songs.length) {
        currentTrackIndex = null;
        this.currentAlbum = null;
        this.currentSong = null;
        this.playing = false;
      }
      this.currentSong = this.currentAlbum.songs[currentTrackIndex];
    },
    previous: function() {
      var currentTrackIndex = trackIndex(this.currentAlbum, this.currentSong);
      currentTrackIndex--;
      if (currentTrackIndex < 0) {
        currentTrackIndex = null;
        this.currentAlbum = null;
        this.currentSong = null;
        this.playing = false;
      }

      this.currentSong = this.currentAlbum.songs[currentTrackIndex];
    },
    setSong: function(album, song) {
      this.currentAlbum = album;
      this.currentSong = song;
    }
  };
});