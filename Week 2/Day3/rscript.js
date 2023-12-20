var app = angular.module('register',[])
    app.controller("registration",["$scope",function(s)
    {
        s.flag = true
        var userarr=[];
        s.name;
        s.email;
        s.password;
        var loginarr=[];
        s.logemail;
        s.logpassword;  
        s.response;
    s.registerDetails=function()
    {
        var userobj={}
         userobj.username=s.name
         userobj.useremail=s.email
         userobj.userpassword=s.password
         userarr.push(userobj)
         console.log(userobj);
         s.flag = false
    s.name=''
    s.password=''
    }
    s.loginDetails=function()
    {
        var loginobj={}
         loginobj.loginemail=s.logemail
         loginobj.loginpassword=s.logpassword
         loginarr.push(loginobj)
         console.log(loginobj);
    s.logemail=''
    s.logpassword=''
        console.log(userarr);
        console.log(loginarr);
        for(let i in userarr)
        {
            for(let j in loginarr)
            {
                if(userarr[i].useremail == loginarr[j].loginemail && userarr[i].userpassword == loginarr[j].loginpassword && loginarr[j].loginemail !=undefined && loginarr[j].loginpassword !=undefined)
                {

                    console.log("Login Sucessful");
                }
                else
                {
                    console.log("Enter valid credentials");
                }
            }
        }
    }
}])