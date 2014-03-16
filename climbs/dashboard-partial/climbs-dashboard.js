angular.module('openclimb-frontend').controller('ClimbsDashboardCtrl',function($scope, ClimbApi, $window){

	$scope.supportsGeo = $window.navigator;
	
	$scope.climbs = ClimbApi.getClimbs();
	$scope.rockTypes = ClimbApi.getRockTypes();
	
	$scope.getCurrentLocation = function () {
		$window.navigator.geolocation.getCurrentPosition(function(position) {
	        $scope.$apply(function() {
	            $scope.position = position;
				if(position.coords != undefined && position.coords != null)
				$scope.locationSearch = "lat:"+position.coords.latitude +", long:"+ position.coords.longitude
	        });
	    }, function(error) {
	        console.log(error);
	    });
	};
});