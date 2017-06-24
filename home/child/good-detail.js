app.controller("goodDetailCtrl", ["$scope", "$stateParams", function ($scope, $stateParams) {
    console.log($stateParams);
    $scope.id = $stateParams.id;
}])
