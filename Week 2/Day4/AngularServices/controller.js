var app = angular.module('demo',[])
app.controller('cntrl',["$scope","service" ,function($scope,service)
{
    $scope.arr;
    var c=3;
    $scope.getData = function()
    {
        $scope.arr = service.getData()
    }
    $scope.sendData = function(ele)
    {
        service.sendData(c)
        c++
    }
}])