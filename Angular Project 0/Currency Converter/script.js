var app = angular.module('app',['ngRoute'])

app.config(function($routeProvider){
    $routeProvider.when('/landing',{
        templateUrl : "./pages/landing.html", 
    })
    .when('/register',{
        templateUrl : "./pages/register.html",
        controller: "RegisterController"   
    }).when('/signin',{
        templateUrl : "./pages/login.html",
        controller: "LoginController"
    }).when('/dashboard',{
        templateUrl : "./pages/dashboard.html",
        controller: "DashboardController"
    }).when('/',{
        redirectTo : '/'
    })
}) 