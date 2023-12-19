
// function scope()
// {
//     var a = 10
// }
// console.log(a);
// scope()
// function display(event)
// {
//     event.preventDefault()
//     let name = event.target[0].value
//     let password = event.target[1].value
//     // let name = document.getElementById('name').value
//     // let password =  document.getElementById('pass').value
//     console.log(name);
//     console.log(password);
    
// }
// fetch("https://api.imgflip.com/get_memes")
// .then(resp=>resp.json())
// .then(resp=>{
//     let t = document.getElementById('pic')
//     for(let i =0;i<100;i++)
//     {
//         let iurl = resp.data.memes[i].url
//         let name =  resp.data.memes[i].name
//         let picname = document.createElement('h3')
//         picname.innerText=name
//         t.appendChild(picname)
//         console.log(iurl);
//         let im = document.createElement('img')
//         im.src=iurl
//         t.appendChild(im)

//     }
// })
// const options = {
//     method: 'GET',
//     headers: {accept: 'application/json', 'content-type': 'application/json'}
//   };
  
//   fetch('https://api.openaq.org/v2/countries?limit=10&page=1&offset=0&sort=asc&order_by=name', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
fetch('https://free.currconv.com/api/v7/countries?apiKey=73f0437767d2dc7b17fc')
.then(resp=>resp.json())
.then(resp=>
  {
    for(let i in resp)
    {
      let r = resp[i]
      for(let j in r)
      {
        console.log( r[j].currencyName+"                "+r[j].currencySymbol )
      }
      
    }
  })