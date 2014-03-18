describe('ClimbApi', function() {

	var ClimbApi, $httpBackend;
	
  beforeEach(module('openclimb-frontend'));
	beforeEach(inject(function (_ClimbApi_, _$httpBackend_ ) {
		ClimbApi = _ClimbApi_;
		$httpBackend = _$httpBackend_;
	}));
	
	afterEach(function() {
	  $httpBackend.verifyNoOutstandingExpectation();
	  $httpBackend.verifyNoOutstandingRequest();
	});

	describe('getClimbs', function () {
	  it('returns a promise', function() {
			expect(ClimbApi.getClimbs().then).toBeDefined();
	  });
		
		// it('returns a list of climbs requested from the backend', function () {
// 			$httpBackend.when('GET', '/api/climbs').respond([{},{},{},{},{}]);
// 			ClimbApi.getClimbs().then(function (data) {
// 				expect(data.length).toBe(5);
// 				//expect(data).toBe(expectedResponse)
// 			},function (message) {
// 				expect(message).toEqual("This promise shouldn't have failed"); //this.fail() doesn't work, so this fails the test if it's observed.
// 			});
// 			$httpBackend.flush();
// 		});
	});
	
	describe('getVenues', function () {
	  it('returns a promise', inject(function(ClimbApi) {
			expect(ClimbApi.getVenues().then).toBeDefined();
	  }));
	});
	
	describe('getRockTypes', function () {
	  it('returns a promise', inject(function(ClimbApi) {
			expect(ClimbApi.getRockTypes().then).toBeDefined();
	  }));
	});
 
});