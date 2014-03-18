angular.module('openclimb-frontend').controller('ClimbsDashboardCtrl',function($scope, ClimbApi, $window, $timeout){

				
	ClimbApi.getVenues().then(function (data) {
		$scope.markers = data;
	});
	
	ClimbApi.getClimbs().then(function (data) {
		$scope.climbs = data;
	});
	
	ClimbApi.getRockTypes().then(function (data) {
		$scope.rockTypes = data;
	});
	
	/**
	* Geolocation support
	**/ 
	$scope.supportsGeo = $window.navigator;
	$scope.getCurrentLocation = function () {
		$window.navigator.geolocation.getCurrentPosition(function(position) {
	        $scope.$apply(function() {
	            $scope.position = position;
							if(position.coords !== undefined && position.coords != null){
								$scope.locationSearch = "lat:"+position.coords.latitude +", long:"+ position.coords.longitude;
							}
							$scope.mapCentre = {
							    lat: position.coords.latitude,
									lng: position.coords.longitude,
							    zoom: 12
							};
	        });
	    }, function(error) {
	        console.log(error);
	    });
	};
	
	/**
	 * Leaflet Mapping
	 **/
	
	$scope.markers = new Array();
	$scope.defaults = {
	    scrollWheelZoom: false
	};
	$scope.mapCentre = {
	    lat:53.123578, 
			lng:-4.102395,
	    zoom: 12
	};

	
});