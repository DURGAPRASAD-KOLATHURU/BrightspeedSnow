app.controller("RegisterController",["$scope","$location","MyService",function($scope, $location,MyService)
{
    $scope.name;
    $scope.email;
    $scope.password;
    $scope.user;
    $scope.sendData=function()
    {
        var userobj = {}
        userobj.userName = $scope.name;
        userobj.userEmail = $scope.email;
        userobj.userPassword = $scope.password;
        MyService.sendUserData(userobj,function(data)
        {
            $scope.user = data
           
        })
        
    }
}])