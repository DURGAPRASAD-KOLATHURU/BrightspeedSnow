app.controller('DashboardController', ['$scope', 'MyService', "$location", function ($scope, MyService, $location) {
    $scope.uName;
//checking user is login or not
    (function () {
        if ( localStorage.key(0) == null) {
            alert("login failed")
            $location.path('signin')
        }
        else {
            var lid = localStorage.key(0)
            MyService.getUserData(function (data) {
                for (u of data) {
                    if (u.id == lid) {
                        $scope.uName = u.userName
                        break;
                    }
                }
            })
        }

    }())
    
    
    var lid = localStorage.key(0)
    $scope.clearData = function () {
        window.localStorage.removeItem(lid)
        $location.path('signin')
    }
    //fetching data from server
    $scope.fetchData;
    $scope.display = function () {
        MyService.getServerData(function (data) {
            $scope.fetchData=data.results
        })
    }
//sorting 
    $scope.value;
    $scope.sorting = function () {
        var obj = $scope.fetchData
        var arr= [] 
        var s ;
        for(o in obj)
        {
            arr.push(obj[o])
        }
        s = arr.sort(function(a,b){ a.name - b.name})
        $scope.fetchData = s
        console.log('sorting');
    }

    //geting currency symbol of a country
    $scope.country;
    $scope.symbol;
    $scope.show = function () {
        console.log($scope.country);
        var inputCountryName = $scope.country;
        var foundCountry = null;
        $scope.countryData = $scope.fetchData
        angular.forEach($scope.countryData, function (country) {
            if (country.name === inputCountryName) {
                foundCountry = country;
            }
        });
        if (foundCountry) {
            $scope.symbol = `Currency Symbol for   ${inputCountryName} : ${foundCountry.currencySymbol}`;
        }
        else {
            alert('Country not found.');
        }
    }
    //getting conversion rate of money
    $scope.fCode;
    $scope.tCode;
    $scope.quantity;
    $scope.result;
    $scope.convert = function () {
        MyService.convert($scope.fCode, $scope.tCode)
            .then(function (data) {
                var conversionRate = data[$scope.fCode + '_' + $scope.tCode];

                if (conversionRate !== undefined) {
                    var amount = conversionRate * $scope.quantity
                    $scope.result = `we get ${amount} ${$scope.tCode} when we convert ${$scope.quantity} ${$scope.fCode} to ${$scope.tCode}`;
                } else {
                    alert('Invalid  currencyId');
                }
            });
    }
}
])