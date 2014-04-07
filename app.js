angular.module('openclimb-frontend', ['ui.bootstrap','ui.utils','ui.router','ngAnimate', 'leaflet-directive', 'ui.slider', 'restangular']);

// TODO refactor out somewhere
angular.module('openclimb-frontend').config(function(RestangularProvider) {

    RestangularProvider.setBaseUrl("http://localhost:3000/api/");

    // Now let's configure the response extractor for each request
    RestangularProvider.setResponseExtractor(function(response, operation, what, url) {
      // This is a get for a list
      var newResponse;
      if (operation === "getList") {
        newResponse = response.climbs;
      }else{
        // This is an element
        newResponse = response;
      }
      return newResponse;
    });
});

angular.module('openclimb-frontend').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('landing', {
        url: '/',
        templateUrl: 'partial/landing/landing.html'
    });
    $stateProvider.state('training-dashboard', {
        url: '/training',
        templateUrl: 'training/dashboard-partial/training-dashboard.html'
    });
    $stateProvider.state('climbs-dashboard', {
        url: '/climbs',
        templateUrl: 'climbs/dashboard-partial/climbs-dashboard.html'
    });

    $stateProvider.state('aggregate-play', {
        url: '/aggregate/play/:id',
        templateUrl: 'aggregate/play/aggregate-play.html'
    });
    /* Add New States Above */

});

angular.module('openclimb-frontend').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
