app.factory("steamstatus", ['$http', function($http) { 
  return $http.get("test.php") 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);