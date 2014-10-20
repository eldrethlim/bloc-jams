 if (document.URL.match(/\/albums\/\d+/)) {
   $(document).ready(function() {
    var id = document.URL.split('/').last;
    $.getJSON('/api/albums/' + id + '.json', function())
   });
 }