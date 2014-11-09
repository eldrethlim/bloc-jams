blocJams.directive('slider', ['$document', function($document) {

  var calculateSliderPercentFromMouseEvent = function($slider, event) {
    var offsetX = event.pageX - $slider.offset().left;
    var sliderWidth = $slider.width();
    var offsetXPercent = (offsetX / sliderWidth);
    offsetXPercent = Math.max(0, offsetXPercent);
    offsetXPercent = Math.min(1, offsetXPercent);
    return offsetXPercent;
  }

  return {
    templateUrl: '/templates/directives/slider.html',
    replace: true,
    restrict: 'E',
    scope: {},

    link: function(scope, element, attributes) {
      scope.value = 0;
      scope.max = 200;
      var $seekBar = $(element);

      var percentString = function() {
        percent = Number(scope.value) / Number(scope.max) * 100;
        return percent + "%";
      }

      scope.fillStyle = function() {
        return { width: percentString() };
      }

      scope.thumbStyle = function() {
        return { left: percentString() };
      }

      scope.onclickSlider = function(event) {
        var percent = calculateSliderPercentFromMouseEvent($seekBar, event);
        scope.value = percent * scope.max;
      }

      scope.trackThumb = function () {
        $document.bind('mousemove.thumb', function(event) {
          var percent = calculateSliderPercentFromMouseEvent($seekBar, event);
          scope.$apply(function() {
            scope.value = percent * scope.max;
          });
        });

        $document.bind('mouseup.thumb', function() {
          $document.unbind('mousemove.thumb');
          $document.unbind('mouseup.thumb');
        });
      }
    }
  }
}]);