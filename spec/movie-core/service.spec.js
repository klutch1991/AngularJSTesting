describe('MovieCore', function() {
     var PopularMovies;
     var $httpBackend;

     beforeEach(module('movieCore'));
     beforeEach(inject(function(_PopularMovies_, _$httpBackend_) {
         PopularMovies = _PopularMovies_;
         $httpBackend = _$httpBackend_;
     }));
     
     afterEach(function() {
         $httpBackend.verifyNoOutstandingExpectation();
     });

     it('shuold create new popular movie', function() {

        //  var expectedData = function(data) {
        //      dump(angular.mock.dump(data));
        //      return angular.fromJson(data).movieId === 'tt0251413';
        //  };

         var expectedData = {"movieId":"tt0251413","description":"Great movie!"};

         $httpBackend.expectPOST(/./, expectedData)
            .respond(201);

          var popularMovie = new PopularMovies({
              movieId: 'tt0251413',
              description: 'Great movie!'
          });

          popularMovie.$save();

          expect($httpBackend.flush).not.toThrow();
     });

     it('should authenticate requests', function() {
        //  var expectedHeaders = function(headers) {
        //      return angular.fromJson(headers).authToken === 'teddybear';
        //  };

         var expectedHeaders = { "authToken": "teddybear", "Accept": "application/json, text/plain, */*"  };                                                                        


         $httpBackend.expectGET('popular/tt0251413', expectedHeaders)
            .respond(200);

         PopularMovies.get({ movieId: 'tt0251413'});

         $httpBackend.flush(1);
     });
});