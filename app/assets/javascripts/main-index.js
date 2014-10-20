$(document).ready(function() {

  var exclamationMark = function(event) {
      subText = $(this).text();
      $(this).text(subText + "!");
  };

  var fadingHeader = function(event) {
    $(this).fadeOut("slow").fadeIn("slow");
  };

  var enlargeText = function(event) {
    if ($(this).hasClass('enlarged-text')) 
    {
        $(this).removeClass('enlarged-text')
        $(this).find("h5").animate({'font-size': '24px'});
        $(this).find("p").animate({'font-size': '14px'});
    }
    else 
    {
      $(this).addClass('enlarged-text')
      $(this).find("h5").animate({'font-size': '32px'});
      $(this).find("p").animate({'font-size': '16px'});
    }
  };

  var raiseTopMargin = function() {
    $(this).animate({'margin-top': '10px'});
  };
  
  var changeColorToPink = function() {
    $(this).css("color", "#d49a9a");
  };

  var offHoverAction = function(event) {
    if ($(this).hasClass("point")) {
      $(this).animate({'margin-top': '0px'});
    }
    else if ($(this).has("h3")) {
      $(this).css("color", "white");
    }
  };

  $('.selling-points .point').hover(raiseTopMargin, offHoverAction);
  $('.hero-content h3').hover(changeColorToPink, offHoverAction);
  $('.hero-content h3').click(exclamationMark);
  $('.selling-points .point').click(enlargeText);
  $('.hero-content h1').click(fadingHeader);
});