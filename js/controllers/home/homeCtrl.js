app.controller("homeCtrl", function($scope,$http) {
    $scope.value = "John Doe1";
    $http.get('json/index.json').then(
        function(response){
            $scope.quilt = response.data.quilt;
            console.log($scope.quilt)
        }
    )
});