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
							$scope.search.centre = $scope.map.centre = {
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
	$scope.map = [];
	$scope.markers = [];
	$scope.defaults = {
	    scrollWheelZoom: false
	};
	$scope.map.centre = {
	    lat:53.123578, 
		lng:-4.102395,
	    zoom: 12
	};
	$scope.map.paths = [
		{
		    color: '#9A9A9A',
		    fillColor: '#9A9A9A',
		    fillOpacity: 0.5,
			weight: 2,
			clickable: false,
			type: 'circle',
			radius: 0,
			latlngs: $scope.map.centre
		},
		{
			color: '#FFCCEE',
			fillOpacity: 0.2,
			clickable: false,
			weight: 4,
			type: 'circle',
			radius: 0,
			latlngs: $scope.map.centre
		},
		{
			color: '#008000',
			weight: 8,
			latlngs: [
				{ lat:53.123578, lng:-4.102395 },
				{ lat:53.119634, lng:-4.104888 }
			],
		}
	];


	/**
	 * Search
	 **/
	$scope.search = [];
	$scope.search.distance = [2,10];
	$scope.search.centre = $scope.map.centre;
	
	$scope.$watch('search.distance', function () {
		$scope.map.paths[0].radius = $scope.search.distance[0] * 1000;
		$scope.map.paths[1].radius = $scope.search.distance[1] * 1000;
	});
	$scope.$watch('search.centre', function (newMapCentre) {
		$scope.map.paths[0].latlngs = $scope.search.centre;
		$scope.map.paths[1].latlngs = $scope.search.centre;
	});
	
});