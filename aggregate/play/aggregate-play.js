angular.module('openclimb-frontend').controller('AggregatePlayCtrl',function($scope){

	$scope.grades = [

		{label: 'B4', relativeValue: 42, system: 'british-bouldering'},
		{label: 'V0-', relativeValue: 5, system: 'am-bouldering'},
		{label: 'V0', relativeValue: 10, system: 'am-bouldering'},

		{label: 'V5', relativeValue: 50, system: 'am-bouldering'},
		{label: 'V6', relativeValue: 60, system: 'am-bouldering'},
		{label: 'V7', relativeValue: 70, system: 'am-bouldering'},
		{label: 'V10', relativeValue: 90, system: 'am-bouldering'},
		{label: 'V12', relativeValue: 95, system: 'am-bouldering'},
	]
	$scope.competitor = {
		name: 'Ryan Brooks',
		userId: 'ryan',
		tickCount: 0
	}
	$scope.competitors = [
		{name: 'Luke Brooks', userId: 'luke', tickCount: 3},
		{name: 'David Hunnisett', userId: 'dave', tickCount: 1},
		{name: 'Glyn Hudson', userId: 'glyn', tickCount: 4},
		$scope.competitor
	]

	$scope.climbs = [
		{ name: 'Heel hook traverse', grade: {label: 'V4', band:4, system: 'am-bouldering'}, location: 'Cromlech boulders', ticked: true},
		{ name: 'Location, location, location', grade: {label: 'V4', band:4, system: 'am-bouldering'}, location: 'RAC boulders', ticked: true},
		{ name: 'Popcorn Party', grade: {label: 'V6', band:5, system: 'am-bouldering'}, location: 'Porth Ysgo', ticked: false},
		{ name: 'Pump traverse', grade: {label: 'V4', band:4, system: 'am-bouldering'}, location: 'RAC boulders', ticked: true},
		{ name: 'The barrel', grade: {label: 'V8', band:6, system: 'am-bouldering'}, location: 'Porth Ysgo', ticked: false},
	]

	$scope.startDate = '04/04/2014';
	$scope.endDate = '30/04/2014'
	$scope.daysLeft = moment($scope.endDate, 'DD/MM/YYYY').diff(moment(), 'days');

	$scope.calculatePosition = function () {
		$scope.competitor.tickCount = _.where($scope.climbs, {ticked: true}).length
		$scope.climbsRemaining = $scope.climbs.length - $scope.competitor.tickCount;
		$scope.position = _.filter($scope.competitors, function (competitor) {
			return competitor.tickCount > $scope.competitor.tickCount;
		}).length +1
	}

	$scope.$watch('climbs', $scope.calculatePosition, true);
});
