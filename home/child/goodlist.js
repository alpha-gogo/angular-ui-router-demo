app.controller("goodlistCtrl", ["$scope", "$http", function ($scope, $http) {
    $http.get("http://h5.yztctech.net/api/axf/apihomehot.php")
    .then(
        function (data) {
            $scope.arr = data.data.data;
            console.log(data);
            console.log($scope.arr);
    }, function (error) {
        console.log(error);
    })
}])
