blocJams.filter('timecode', function(){
  return function(seconds) {
    seconds = Number.parseFloat(seconds);

    if (Number.isNan(seconds)) {
      return '-:--';
    }

    var wholeSeconds = Math.floor(seconds);

    var minutes = Math.floor(wholeSeconds / 60);

    remainingSeconds = wholeSeconds % 60;

    var output = minutes + ':';

    if (remainingSeconds < 10) {
      output += '0';
    }

    output += remainingSeconds;

    return output;
  }
})