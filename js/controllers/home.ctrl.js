(function() {
  angular.module('MainApp')
    .controller('homeCtrl', HomeController);

  function HomeController($state, parkingSvc) {
    var vm = this;
    vm.garages = [];
    vm.selectGarage = selectGarage;
    vm.isAvailable = isAvailable;

    parkingSvc
      .get()
      .then(function(result) {
        vm.garages = result.data.features.filter(function(e) {
          return e.properties.layers['parking.garage'].data.Type &&
            e.properties.layers['parking.garage'].data.Type === 'parkinglocation';
        });
      });


    function selectGarage(garage) {
      vm.selectedGarage = {
        selected: true,
        coord: garage.geometry.coordinates.reverse().join(','),
        capacity: garage.properties.layers['parking.garage'].data.LongCapacity,
        freeSpace: garage.properties.layers['parking.garage'].data.FreeSpaceLong,
      };
    }

    function isAvailable(garage) {
      return garage.properties.layers['parking.garage'].data.LongCapacity > garage.properties.layers['parking.garage'].data.FreeSpaceLong;
    }

  }
})();
