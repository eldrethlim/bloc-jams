var tabsContainer = ".user-profile-tabs-container"

var selectTabHandler = function(event) {
  $tab = $(this);
  console.log($(this));
  console.log("This is the tabs container ");
  console.log($(tabsContainer + " li"));
  $(tabsContainer + " li").removeClass('active');
  console.log($tab.parent());
  $tab.parent().addClass('active');
  selectedTabName = $tab.attr('href');
  console.log(selectedTabName);
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