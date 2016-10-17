describe('omdb service', function() {
     var movieData = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMWJhYWQ3ZTEtYTVkOS00ZmNlLWIxZjYtODZjNTlhMjMzNGM2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"356","imdbID":"tt0251413","Type":"game","Response":"True"};

     var movieDataById = {"Title":"Star Wars","Year":"1983","Rated":"N/A","Released":"01 May 1983","Runtime":"N/A","Genre":"Action, Adventure, Sci-Fi","Director":"N/A","Writer":"N/A","Actors":"Harrison Ford, Alec Guinness, Mark Hamill, James Earl Jones","Plot":"N/A","Language":"English","Country":"USA","Awards":"N/A","Poster":"http://ia.media-imdb.com/images/M/MV5BMWJhYWQ3ZTEtYTVkOS00ZmNlLWIxZjYtODZjNTlhMjMzNGM2XkEyXkFqcGdeQXVyNzg5OTk2OA@@._V1_SX300.jpg","Metascore":"N/A","imdbRating":"7.9","imdbVotes":"356","imdbID":"tt0251413","Type":"game","Response":"True"};

     var omdbApi = {};

     beforeEach(module('omdb'));
     beforeEach(inject(function(_omdbApi_) {
              omdbApi = _omdbApi_; 
     }));

     it('should return search movie data', function() {
          
          //mocking service variant 1
        //   angular.mock.module({
        //       'omdbApi': {
        //           search: function (query) {
        //               return movieData;
        //           }
        //       }
        //   });

            //mocking service variant 2
        // angular.mock.module(function($provide) {
        //     $provide.factory('omdbApi', function() {
        //         return {
        //             search: function(query) {
        //                 return movieData;
        //             }                    
        //         };
        //     });
        // });
        console.log(angular.mock.dump(movieData));
        expect(omdbApi.search('star wars')).toEqual(movieData);
     });   

     it('should return movie data by id', function() {
        console.log(angular.mock.dump(movieDataById));
        expect(omdbApi.find('tt0251413')).toEqual(movieDataById);               
     });  
});