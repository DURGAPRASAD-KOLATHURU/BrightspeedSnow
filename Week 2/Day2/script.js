let cntrl = angular.module("demo",[])
cntrl.controller("mycntrl",function()
{
    this.name = 'durga',
    this.age = 23
})
cntrl.controller('cntrl1',function()
{
    var a =10
    var b =5
    this.sum=function( )
    {
        return a+b
    }
    this.prod = ()=>
    {
        return a*b
    }
})
cntrl.controller('cntrl2',function($scope)
{
    $scope.fname = 'durga'
    $scope.lname = 'kolathuru'
    // let a =10
    // let b =20
    $scope.cal=function(a,b){
        return a*b
    }
    $scope.obj = {
        name:"Durga",
        age:21
    }
    $scope.arr = [10,"durga",{d:"21"}]
    let ar = [10,20,30]
    for(let i of ar)
    {
        console.log(i);
    }
})
cntrl.controller('cntrl3',['$scope','$window',function(s,w)
{
s.product="phone"
}])
cntrl.directive('testDirective',function(){
    return {
        template : "iam durga prasad"
    }
})
cntrl.controller('cntrl4',['$scope',function(s){
    s.greet=''
s.hi=function()
{
    console.log('hi');
    s.greet='hello hi'
}
}])
cntrl.directive('test2Directive',function()
{
    return {
        template :"iam in test 2 directive"
    }
})