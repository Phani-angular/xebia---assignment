(function() {
  'use strict';

  angular.module("MainApp")
      .value("BaseURL", "http://api.citysdk.waag.org/layers/parking.garage/objects?per_page=25");
})();
