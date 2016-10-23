describe('Results Controller', function() {
     var results = {};

     var $controller;
     var $this;
     var $q;
     var $rootScope;
     var $location;
     var omdbApi;

     beforeEach(module('omdb'));
     beforeEach(module('movieApp'));

     beforeEach(inject(function(_$controller_, _$q_, _$rootScope_, _omdbApi_, _$location_) {
         $controller = _$controller_;
         $q = _$q_;
         $rootScope = _$rootScope_;
         omdbApi = _omdbApi_;
         $location = _$location_;
     }));

     it('should load search results', function() {
         spyOn(omdbApi, 'search').and.callFake(function() {
             var deferred = $q.defer();
             deferred.resolve(results);
             return deferred.promise;             
         });
         $location.search('q', 'star wars');
          $this = $controller('ResultsController', { }, {});
          //makes promise to be resolved
          $rootScope.$apply();
          expect($this.results).toBe(results);
          expect(omdbApi.search).toHaveBeenCalledWith('star wars');
     });

     it('should display errorMessage on smth wrong', function() {
         spyOn(omdbApi, 'search').and.callFake(function() {
             var deferred = $q.defer();
             deferred.reject();
             return deferred.promise;             
         });
         $location.search('q', 'star wars');
          $this = $controller('ResultsController', {}, {});
          //makes promise to be resolved
          $rootScope.$apply();
          expect($this.errorMessage).toBe('Something went wrong');
     });
});