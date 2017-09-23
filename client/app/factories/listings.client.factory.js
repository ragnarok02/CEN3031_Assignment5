angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://morning-anchorage-41391.herokuapp.com/api/listings');
      },

      create: function(listing) {
        return $http.post('http://morning-anchorage-41391.herokuapp.com/api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('http://morning-anchorage-41391.herokuapp.com/api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $http.put('http://morning-anchorage-41391.herokuapp.com/api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('http://morning-anchorage-41391.herokuapp.com/api/listings/' + id);
      },
      
     
    };

    return methods;
  }
]);