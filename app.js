angular.module('openclimb-frontend', ['ui.bootstrap','ui.utils','ui.router','ngAnimate']);

angular.module('openclimb-frontend').config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

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
