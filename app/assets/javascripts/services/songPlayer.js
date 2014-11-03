blocJams.service('songPlayer', function() {
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
    setSong: function(album, song) {
      this.currentAlbum = album;
      this.currentSong = song;
    }
  };
});