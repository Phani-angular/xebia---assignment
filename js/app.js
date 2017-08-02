(function() {
  angular.module("MainApp", ['ngRoute', 'ui.router', 'ngMap'])
    .config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");
        $stateProvider
          .state('home', {
            url: "/home",
            templateUrl: "views/home.html",
            controller: 'homeCtrl',
            controllerAs: 'home'
          });
      });
})();
