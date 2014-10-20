$(document).ready(function() {

  var onClickAction = function(event) {
    if ($(this).is('#fading-header')) {
      $(this).fadeOut("slow").delay(300).fadeIn("slow");
    }
    else if ($(this).is("#turn-it-up")) {
      subText = $(this).text();
      $(this).text(subText + "!");
    }
    else if ($(this).hasClass("point")) {
      if ($(this).hasClass('enlarged-text')) {
        $(this).removeClass('enlarged-text')
        $(this).find("h5").animate({'font-size': '24px'});
        $(this).find("p").animate({'font-size': '14px'});
      }
      else {
      $(this).addClass('enlarged-text')
      $(this).find("h5").animate({'font-size': '32px'});
      $(this).find("p").animate({'font-size': '16px'});
      }
    }
    console.log(this);
  };

  var onHoverAction = function(event) {
    if ($(this).hasClass("point")) {
      $(this).animate({'margin-top': '10px'});
    }
    else if ($(this).has("h3")) {
      $(this).css("color", "#d49a9a");
    }
  };

  var offHoverAction = function(event) {
    if ($(this).hasClass("point")) {
      $(this).animate({'margin-top': '0px'});
    }
    else if ($(this).has("h3")) {
      $(this).css("color", "white");
    }
  };

  $('.selling-points .point').hover(onHoverAction, offHoverAction);
  $('.hero-content h3').hover(onHoverAction, offHoverAction);
  $('.hero-content h3').click(onClickAction);
  $('.selling-points .point').click(onClickAction);
  $('.hero-content h1').click(onClickAction);
});