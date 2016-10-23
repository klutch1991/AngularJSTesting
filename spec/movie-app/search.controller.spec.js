describe('Serach controller', function() {
var $this;
var $location;
var $controller;

beforeEach(module('movieApp'));

beforeEach(inject(function (_$controller_, _$location_) {
    $controller = _$controller_;
    $location = _$location_;
}));

     it('should redirect to query results page for non-empty query', function() {
          $this = $controller('SearchController', { $location: $location }, { query: 'star wars' });
          $this.search();
          expect($location.url()).toBe('/results?q=star%20wars');
     });

     it('should not redirect to query results page for empty query', function() {
          $this = $controller('SearchController', { $location: $location }, { query: '' });
          $this.search();
          expect($location.url()).toBe('');
     });
});