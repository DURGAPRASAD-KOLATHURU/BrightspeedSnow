app.service('MyService',["$http","$location",function($http,$location){
  //getting data from server
    this.getServerData=function(cb)
    {
        $http(
            {
             method : 'GET',
             url :"https://free.currconv.com/api/v7/countries?apiKey=73f0437767d2dc7b17fc"
            }
         ).then(function(response){
             var res=response.data
             cb(res)
         })

    }
    //getting user data from json
    this.getUserData=function(cb)
    {
        $http(
           {
            method : 'GET',
            url :"http://localhost:3000/user"
           }
        ).then(function(response){
            var res=response.data
            cb(res)
        })

    }
    //posting register data
    this.sendUserData = function(obj)
    {
        console.log("hello");
        console.log(obj);
        $http(
            {
             method : 'POST',
             url :"http://localhost:3000/user",
             data : obj
            }
         ).then(function(response){ 
            alert("Registration sucessful")
            $location.path('./signin');
            cb(response.data)
  
         }).then(function(error){
            console.log(error)})

    }
    //fetching conversion rate from url
    var apiKey = '73f0437767d2dc7b17fc';
    var apiUrl = 'https://free.currconv.com/api/v7/convert?compact=ultra&apiKey=' + apiKey;

      this.convert = function (fromCurrencyId, toCurrencyId) {
        var url = apiUrl + '&q=' + fromCurrencyId + '_' + toCurrencyId;

        return $http.get(url)
          .then(function (response) {
            return response.data;
          })
          .catch(function (error) {
            console.error('Error converting currencies:', error);
            throw error;
          });
        }
}])