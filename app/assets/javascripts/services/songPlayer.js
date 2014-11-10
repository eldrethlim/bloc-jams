blocJams.service('songPlayer', ['$rootScope', function($rootScope) {
  var currentSoundFile = null;
  var trackIndex = function(album,song) {
    return album.songs.indexOf(song);
  };

  return {
    currentSong: null,
    revealBar: false,
    currentAlbum: null,
    playing: false,

    play: function() {
      this.playing = true;
      this.revealBar = true;
      currentSoundFile.play();
    },

    pause: function () {
      this.playing = false;
      currentSoundFile.pause();
    },

    stopSongAndClosePlayerBar: function() {
      currentSoundFile.stop();
      this.playing = false;
      this.revealBar = false;
    },

    next: function() {
      var currentTrackIndex = trackIndex(this.currentAlbum, this.currentSong);
      currentTrackIndex++;
      if (currentTrackIndex >= this.currentAlbum.songs.length) {
        this.stop();
      }
      var song = this.currentAlbum.songs[currentTrackIndex];
      this.setSong(this.currentAlbum, song)
    },

    previous: function() {
      var currentTrackIndex = trackIndex(this.currentAlbum, this.currentSong);
      currentTrackIndex--;
      if (currentTrackIndex < 0) {
        this.stop();
      }
      var song = this.currentAlbum.songs[currentTrackIndex];
      this.setSong(this.currentAlbum, song)
    },

    seek: function(time) {
      if (currentSoundFile) {
        currentSoundFile.setTime(time);
      }
    },

    onTimeUpdate: function(callback) {
      return $rootScope.$on('sound:timeupdate', callback);
    },

    setSong: function(album, song) {
      if (currentSoundFile) {
        currentSoundFile.stop();
      }
      this.currentAlbum = album;
      this.currentSong = song;
      currentSoundFile = new buzz.sound(song.audio, {
        formats: ["mp3"],
        preload: true
      });

      currentSoundFile.bind('timeupdate', function(e) {
        $rootScope.$broadcast('sound:timeupdate', this.getTime());
      });

      this.play();
    }
  };
}]);