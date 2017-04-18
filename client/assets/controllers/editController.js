app.controller('editController', function($scope, FriendFactory, $routeParams){
  console.log("Edit controller loaded");
  console.log("this is the route param id:",$routeParams.id);
  FriendFactory.show($routeParams.id, function(data){
      console.log("data from friends factory:",data);
      if(!data){
        $scope.errormessage = "Could not find the friend in the database."
      }
      else {
        $scope.friend = data;
      }
    })
});
