app.controller('LoginController',['$scope','MyService',"$location" ,function($scope,MyService,$location)
{
    //verifying user login data
    $scope.logEmail;
    $scope.logPassword;
    $scope.getData = function()
    {
        MyService.getUserData(function(user)
        {
            
            for(let u of user)
            {
                var flag = false
                if(u.userEmail == $scope.logEmail && u.userPassword == $scope.logPassword)
                {
                    flag = true
                    alert("user login sucessful")
                    localStorage.setItem(u.id,u.userEmail);
                    $location.path('dashboard');
                    break;
                }
            }
            if (flag === false) {
                alert('Invalid username or password.');
            }        
        })
    }
    
}])