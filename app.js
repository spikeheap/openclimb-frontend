angular.module('openclimb-frontend', ['ui.bootstrap','ui.utils','ui.router','ngAnimate', 'leaflet-directive', 'ui.slider']);

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
