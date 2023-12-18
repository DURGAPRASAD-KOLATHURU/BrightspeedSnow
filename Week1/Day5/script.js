// let d1  = document.getElementById('d1')
// let d2  = document.getElementById('d2')
// let d3  = document.getElementById('d3')

// d1.onclick = () => {
// console.log("D1 got Clicked");

// }

// d2.onclick = () => {
//     event.stopPropagation()
//     console.log("D2 got Clicked");
//     }

// d3.onclick = () => {
//     console.log("D3 got Clicked");
//     }

// d1.addEventListener('click',d1fun,true)
// d2.addEventListener('click',d2fun,true)
// d3.addEventListener('click',d3fun)

// function d1fun()
// {
//     console.log("D1 got Clicked");
// }

// function d2fun()
// {
//     console.log("D2 got Clicked");
// }

// function d3fun()
// {
//     console.log("D3 got Clicked");
// }

//event propagation : this means the event triggered on a specific element will propagate through its parent element unless the event propagation is stopped or prevented
//in bubbling event propagation happens from bottom to top element or else from child to parent and it is default phenonmenon and in capturing its vice versa ie from parent element event propagation ocurrs towards child element. we can enable capturing by passing true to event handler and fro stoping event propagation we have event.stoppropagation(). 

// var xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.exchangeratesapi.io/v1/2023-12-14 ? access_key= 113f8531ae7851323b47d45ad5ea7f9e & base = GBP & symbols = USD,CAD,EUR,INR', true);
// xhr.send();
// xhr.onreadystatechange = function() {
//     if (xhr.readyState === 4 && xhr.status === 200) {
//       // Response is ready and status is OK
//       var responseData = xhr.responseText;
//       // Process the response data
//       console.log(responseData);
//     }
//   }
  
// function fetchdata()
// {
//   fetch(  "http://localhost:3000/user/2").then(resp => resp.json()).then((resp)=>console.log(resp.name))
// }
// function postdata()
// {
//   fetch(  "http://localhost:3000/user",{
//   method:"POST",
//   headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({name:"kolathuru"})
//   })
//   .then()
//   .then(res=>console.log("data posted sucessfully"))

// }
// function putdata()
// {
//   fetch(  "http://localhost:3000/user/4",{
//   method:"PUT",
//   headers:{
//                 'Content-Type':'application/json'
//             },
//             body:JSON.stringify({name:"don"})
//   })
//   .then()
//   .then(res=>console.log("data posted sucessfully"))

// }
// function removedata()
// {
//   fetch(  "http://localhost:3000/user/3",
//   {
//     method:"DELETE"
//   }
//   )
//   .then()
//   .then(rsp=>{console.log("delted data sucessfully");})
// }
// let t = document.getElementById("newimg")
















let t = document.getElementById("newimg")
var x
var url

function displayData(d){
  console.log(d);
}

function fun1()
{ 
   var d;

  fetch("https://api.imgflip.com/get_memes")
  .then(res =>res.json())
  .then(data =>{
    d=data
    console.log(d);
    displayData(d);
  } 
  )

  
}
fun1();









// function fun1() {
//   fetch("https://api.imgflip.com/get_memes")
//     .then(res => {
//       return res.json();
//     })
//     .then(data => console.log(data))
// }

// fun1();