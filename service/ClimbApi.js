angular.module('openclimb-frontend').factory('ClimbApi', function($q, Restangular) {

	var ClimbApi = {
		getClimbs: function (query) {
			var minDistance = query.distance[0];
			return Restangular.all('climbs').getList({loc: "[53.123578,-4.102395]", maxDistance: query.distance[1]}).then(function (climbs) {
				var filteredClimbs = _.filter(climbs, function (climb) {
					return climb.dis >= minDistance;
				});
				return $q.when(filteredClimbs);
			});
		},

		getVenues: function () {
			return $q.when([
				{ name: "Dali's Hole", lat:53.123578, lng:-4.102395 },
				{ name: "Rainbow Slab", lat:53.119634, lng:-4.104888 },
				{ name: "Vivian Quarry", lat:53.123162, lng:-4.113382 },
				{ name: "Carreg Wastad", lat:53.093143, lng: -4.057253 },
				{ name: "Dinas Mot", lat: 53.086613, lng: -4.052036, venues: [
				{ name: "The Nose" },
				{ name: "The Barrel" },
				{ name: "The Eastern Wing" },
				{ name: "Beginners Mind Crag" },
				{ name: "Western Wing" },
				{ name: "Plexus Buttress" }
				]
			}
			]);
		},

		getRockTypes: function () {
			return $q.when([
				"slate",
				"limestone",
				"gritstone",
				"granite",
			]);
		}
	};

	return ClimbApi;
});
