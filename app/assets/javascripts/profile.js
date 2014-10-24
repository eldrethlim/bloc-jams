var tabsContainer = ".user-profile-tabs-container"

var selectTabHandler = function(event) {
  $tab = $(this);
  $(tabsContainer + " li").removeClass('active');
  $tab.parent().addClass('active');
  selectedTabName = $tab.attr('href');
  $(".tab-pane").addClass('hidden');
  $(selectedTabName).removeClass('hidden');
  event.preventDefault();
};

function initializeProfileView() {
  if (document.URL.match(/\/profile/)) {
    var $tabs = $(tabsContainer + " a");
    $tabs.click(selectTabHandler);
    $tabs[0].click();
  };
}

$(document).ready(initializeProfileView);