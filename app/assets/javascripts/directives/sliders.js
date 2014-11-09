blocJams.directive('slider', function() {

  var updateSeekPercentage = function($slider, event) {
    var barWidth = $slider.width();
    var offsetX = event.pageX - $slider.offset().left;

    var offsetXPercent = (offsetX / $slider.width()) * 100;
    offsetXPercent = Math.max(0, offsetXPercent);
    offsetXPercent = Math.min(100, offsetXPercent);

    var percentageString = offsetXPercent + '%';
    $slider.find('.fill').width(percentageString);
    $slider.find('.thumb').css({left: percentageString});
  }

  return {
    templateUrl: '/templates/directives/slider.html',
    replace: true,
    restrict: 'E',
    link: function(scope, element, attributes) {

      var $slider = $(element);

      $slider.click(function(event) {
        updateSeekPercentage($slider, event);
      });

      $slider.find('.thumb').mousedown(function(event){
        $slider.addClass('no-animate');

        $(document).bind('mousemove.thumb', function(event){
          updateSeekPercentage($slider, event);
        });

        $(document).bind('mouseup.thumb', function() {
          $slider.removeClass('no-animate');
          $(document).unbind('mousemove.thumb');
          $(document).unbind('mouseup.thumb');
        });

      });
    }
  };
});