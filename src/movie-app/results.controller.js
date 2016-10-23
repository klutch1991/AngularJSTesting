angular.module('movieApp')
    .controller('ResultsController', ['$location', 'omdbApi', function($location, omdbApi) {
        
        var query = $location.search().q;

        var vm = this;

        vm.results = {};

        omdbApi.search(query)
            .then(function(data) {
                vm.results = data;
            })
            .catch(function(error) {
                vm.errorMessage = 'Something went wrong';
            });
        
    }]);


    