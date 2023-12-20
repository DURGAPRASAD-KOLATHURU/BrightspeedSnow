let app = angular.module('demo',[])
app.controller('data',["$scope",function(s)
{
    var x;
    s.loadData=function()
    {
        x = [
            {"number":3,"value":"test"},
            {"number":1,"value":"test"},
            {"number":2,"value":"test"}
        ];
        console.log('x is populated');
        s.newArray=[...x]
    }
    s.sortData = function()
    {
        sortedArray = s.newArray.sort((a,b)=>a.number-b.number)
        console.log(sortedArray);
    }
}])
app.controller('array',["$scope",function(s){
    s.names= [{name:"durga"},{name:"prasad"},{name:"prasad"}]
}])
app.controller('show',["$scope",function(s){
    s.hide = false
     s.display=true 
}])
app.controller('color',["$scope",function(s){
    s.isRed=true
}])
app.controller('clickk',["$scope",function(s){
    s.clicking = function()
    {
        s.ispink=true
    }
}])
app.controller('addimg',["$scope",function(s){
    s.add=function(){
        s.imgurl="./oo.jpg"
    }
}])
app.controller('oneway',["$scope",function(s){
    s.name="durga"
}])
app.controller("task1",["$scope",function(s){
    s.change=function(){
        s.changeit=true
    }
}])
app.controller('task2',["$scope",function(s){
    s.login=true
    s.signup=false
    var flag =true
    s.toggle=function()
    {
        if(flag)
        {
            s.login=true
            s.signup=true
            flag=false
        }
        else{
            s.login=false
            s.signup=false
            flag = true
        }
    }
}])
app.controller("tabletask",["$scope",function(s)
{
s.arr = [{name:"durga",country:"india"},{name:"prasad",country:"australia"},{name:"ram",country:"USA"},{name:"krish",country:"France"}]
}])

app.controller("details",["$scope",function(s)
{
    var userarr=[];
    s.name;
    s.password;
s.submit=function()
{
    var userobj={}
     userobj.username=s.name
     userobj.userpassword=s.password
     userarr.push(userobj)
     console.log(userobj);
     console.log(userarr);
s.name=''
s.password=''
}
}])
app.controller("deletearray",["$scope",function(s)
{
    s.names = [{name:"durga"},{name:"prasad"},{name:"don"}]
    s.remove=function(index)
    {
        console.log(index);
        console.log("iam in remove");
        s.names.splice(index,1)
    }
}])