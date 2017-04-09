app.controller('mainCtrl',function($scope,$http){
    $http.get('json/index.json')
    .then(function(response){
        $scope.type = response.data.types[0].type;
        console.log($scope.type);
    })
    $scope.name="John Doe";
})
