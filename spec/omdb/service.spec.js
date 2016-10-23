describe('omdb service', function() {
     var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMWJhYWQ3ZTEtYTVkOS00ZmNlLWIxZjYtODZjNTlhMjMzNGM2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"356","imdbID":"tt0251413","Type":"game","Response":"True"};

     var movieDataById = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMWJhYWQ3ZTEtYTVkOS00ZmNlLWIxZjYtODZjNTlhMjMzNGM2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"356","imdbID":"tt0251413","Type":"game","Response":"True"};

     var omdbApi;
     var $httpBackend;

     beforeEach(module('omdb'));
     beforeEach(inject(function(_omdbApi_, _$httpBackend_) {
              omdbApi = _omdbApi_; 
              $httpBackend = _$httpBackend_;
     }));

     

     it('should return search movie data', function() {

         var expectedUrl = 'http://www.omdbapi.com/?v=1&s=star%20wars';
        //  var expectedUrl = function(url) {
        //      return url.indexOf('http://www.omdbapi.com') !== -1;
        //  };

         $httpBackend
            .when('GET', expectedUrl)
                .respond(200, movieData);
        
        var response;
        omdbApi.search('star wars')
            .then(function(data) {
                response = data;
            });
        
        $httpBackend.flush();

        expect(response).toEqual(movieData);
     });   

     it('should return movie data by id', function() {
         var expectedUrl = 'http://www.omdbapi.com/?v=1&i=tt0251413';

         $httpBackend
            .expect('GET', expectedUrl)
                .respond(200, movieDataById);

        var response;
        omdbApi.find('tt0251413')
            .then(function(data) {
                response = data;
            });
        
        $httpBackend.flush();

        expect(response).toEqual(movieDataById);               
     }); 

     it('should handle error', function() {
        $httpBackend
            .expect('GET', 'http://www.omdbapi.com/?v=1&i=tt0251413')
                .respond(404);

        var response;
        omdbApi.find('tt0251413')
            .then(function(data) {
                response = data;
            })
            .catch(function() {
                response = 'Error!';
            });
        
        $httpBackend.flush();

        expect(response).toEqual("Error!");  
     }); 
});