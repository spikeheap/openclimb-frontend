angular.module('openclimb-frontend').factory('ClimbApi',function() {

	var ClimbApi = {
		getClimbs: function () {
			return [
			{
				name: "Holy, Holy, Holy",
				length: "11m",
				grade: "E2 5c",
				stars: "3",
				description: "Follow the obvious crack to the right of Launching Pad. Well protected if you've got cams.",
				crag: "Dali's Hole"
			},{
				name: "Launching Pad",
				length: "14m",
				grade: "E1 5a",
				stars: "1",
				description: "Ascend the groove to reach the slab, then skirt the left-hand edge following smooth footholds. Keep right of the easy ground for a spicy finish.",
				crag: "Dali's Hole"
			},{
				name: "You're not in Poland Now",
				grade: "E1 5a",
				stars: 1
			},{
				name: "God Help the Sailors.....",
				grade: "E1 5b",
				stars: 0
			},{
				name: "Sombrero Fallout",
				grade: "E2 6a",
				stars: 0
			},{
				name: "Truncheon Meat",
				grade: "E6 6c",
				stars: 1
			},{
				name: "The Cracks",
				grade: "HS 4c",
				stars: 3
			},{
				name: "GBH",
				grade: "E2 5c",
				stars: 1
			},{
				name: "Lorraine", 
				grade: "VS 4c",
				stars: 2
			},{
				name: "Lorraine Variation",
				grade: "HVS 5a",
				stars: 2
			},{
				name: "Trauma",
				grade: "E9 7a",
				stars: 1
			},{
				name: "Direct Route",
				grade: "VS 5b",
				stars: 3
			},{
				name: "Famine",
				grade: "HVS 5a",
				stars: 1
			},{
				name: "Super Direct",
				grade: "E1 5b",
				stars: 3
			},{
				name: "Zeta",
				grade: "E3 6a",
				stars: 2
			},{
				name: "Diagonal",
				grade: "HVS 5a",
				stars: 3
			},{
				name: "Crosstie",
				grade: "HVS 5a",
				stars: 1
			},{
				name: "Stairway to Heaven",
				grade: "E3 5c",
				stars: 2
			}];
		},
		
		getVenues: function () {
			return [
			{
				name: "Dinorwig Quarries",
				venues: [
					{ name: "Dali's Hole" },
					{ name: "Rainbow Slab" },
					{ name: "Vivian Quarry" }
				]
			},{
				name: "Llanberis Pass",
				venues: [
					{ name: "Carreg Wastad" },
					{ name: "Dinas Mot", venues: [
							{ name: "The Nose" },
							{ name: "The Barrel" },
							{ name: "The Eastern Wing" },
							{ name: "Beginners Mind Crag" },
							{ name: "Western Wing" },
							{ name: "Plexus Buttress" }
						]
					}
				]
			}
			];
		},
		
		getRockTypes: function () {
			return [
				"slate",
				"limestone",
				"gritstone",
				"granite",
			];
		}
	};

	return ClimbApi;
});