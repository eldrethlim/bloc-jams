blocJams.service('songDurationConverter', function() {
  
  return {

    convertToMinutesAndSeconds: function(duration) {
  
      var minutes = Math.floor(duration/60);
      var seconds = duration - minutes * 60;

      if (seconds < 10) {
        return minutes + ':0' + seconds;
      }
      else {
        return minutes + ':' + seconds;
      }
    }
  }
});