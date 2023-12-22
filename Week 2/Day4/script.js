var app = angular.module('sample',[])
app.controller('casefilter',["$scope",function($scope)
    {
        $scope.message = "Hello"
        $scope.date = "2023-12-21"
        $scope.amount = 50
    }])
app.controller('searchsort',["$scope",function($scope){
    $scope.data = [{name:"Durga",country:"India"},{name:"prasad",country:"America"},{name:"Ram",country:"England"},{name:"Krishna",country:"Srilanka"}]
    $scope.value;
    $scope.show=function(value)
    {
        console.log((value));
    }
}])
app.controller("tablesort",["$scope",function($scope)
{
    $scope.data = [{name:"Durga",country:"India"},{name:"prasad",country:"America"},{name:"Ram",country:"England"},{name:"Krishna",country:"Srilanka"}]
    $scope.orderByme=function(x)
    {
        $scope.value = x
    }
}])
app.controller("user",["$scope",function($scope){
    $scope.userName="prasad",
    $scope.userAddress="India"
}]);

app.controller("userFriend",["$scope",function($scope){
    $scope.FriendName="Ramesh",
    $scope.userName="durga",
    $scope.FriendAddress="uk"
}]);
app.filter('durga',function()
{
    return function(x){
        var c,i,txt=''
        for(i=0;i<x.length;i++)
        {
            c=x[i]
            if(1)
            {
                c=c.toUpperCase()
            }
            txt = txt+c;
        }
        return txt
    }
})
app.controller('namesCtrl', function($scope) {
    $scope.names = ['Jani', 'Carl', 'Margareth', 'Hege', 'Joe', 'Gustav', 'Birgit', 'Mary', 'Kai'];
  });