(function() {
  angular.module('MainApp')
      .factory('parkingSvc', ParkingService);

  function ParkingService(BaseURL, $http) {

    return {
      get: function() {
        return $http.get(BaseURL);
      }
    };

  }

})();
