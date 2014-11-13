blocJams.filter('sortObjectsBy', function() {
  return function(object, attribute) {
    if (!angular.isObject(object)) return object;

    var array = [];
    for(var property in object) {
        array.push(object[property]);
    }

    array.sort(function(a, b){
        a = parseInt(a[attribute]);
        b = parseInt(b[attribute]);
        return a - b;
    });
    return array;
  }
});