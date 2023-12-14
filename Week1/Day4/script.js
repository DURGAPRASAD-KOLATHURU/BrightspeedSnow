// var i=1
// while(true)
// {
//     console.log(i);
//     if(i==3)
//     {
//         break
//     }
    
//     i++
// }
// var j=3
// do{
   
//     if(j==3)
//     {
//         break
//     }
// console.log(j);//executed atleast once even though the conditon is failed at initial state
//     i++
// }while(1)
// function currying: the function returning another function as output.
// function volume(l)
// {
//     return function(b)
//     {
//         return function(h)
//         {
//             return l*b*h
//         }
//     }
// }
// console.log(volume(4)(5)(6));
// Execution context
// it represent the environment in which js code gets executed.each time a func is invoked or code is executed at global scope a new executioncontext is created.
// it contains 3 values in it 1.varables 2.functions 3.lexical environment of the function (local memory+parents lexical environment)
// call stack maintains the execution of functions
// closures is a mechanism in js in which the inner function is able to remember the outer scope values or we can acess the variables declared ouside inside our function
// it happens due to lexical scope 
// scope chaining: the process of acessing the variable if it is declared in local if not in functional if not in global scope is known as scope chaing
// let a=30
// function fun1()
// {
//     // var a=10
//     let b = function()
//     {
//         // let a=20
//         console.log(a);
//     }
//     b()
// }
// fun1()
// Asynchronous Programming:it allows execution of tasks concurrently without affecting the execution of main program.used for handling time consuming operations like fetching data,waiting for user input
// several mechanisms of asychronous programming are callbacks,promises,async/await
// callbacks:a function which is passed as a prameter to another function and executed when asynchronous operation completes
// promises:structured way of acessing asynchronus operations and their results.it represent eithier completion or failure of asynchronus task and alloe chaining multiple operations
// asunc/await:it allows writing asynchronous code that resembles synchronous code,making it easier to understand maintain
// callback Queue/Task Queue:acts as waiting area or stagging area.once asynchronous operation completes that associated with callback function ,the callback function is placed in callback queue
// Event loop: it continously monitor the status of call stack when call stack is empty the event loop takes the call back function from callback queus and pushes into call stack for execution
// call back hell : nested call back function are known as callback hell
// priority Queue: in priority queue the function got executed based on the priority of functions.the func with high priority gets to call stack first compared to function with low priority
// window: whenever html document gets renderd in the browser a window object gets created.and it has properties like console,history,location,navigator,screen.childs of window object are dcocument and browser
// bom: allows js to interact with browser
// dom:using dom js acess and change the html of the webpage
// when a webpage is loaded the browser creates a dom of the page
// let target = document.getElementById('a')
// target.style.background="skyblue"
// let target1 = document.getElementsByTagName('h2')[0].innerText
// console.log(target1);
// let btn = document.getElementById('btn')
// btn.addEventListener('click',show)
// function show()
// {
//     let target2 = document.getElementById('b').value
//     let t = document.getElementsByTagName('div')
//     t[0].innerText=target2
// }
// let person = []
// let p1={
//     name:"durga",
//     city:"chennai",
//     age:21
// }
// let p2={
//     name:"prasad",
//     city:"banglore",
//     age:25
// }
// let p3={
//     name:"don",
//     city:"chitoor",
//     age:30
// }
// person.push(p1,p2,p3)
// let bttn = document.getElementById('bttn')
// bttn.addEventListener('click',display)
// function display()
// {
//     for(let i in person)
//     {
//        let ele =  document.createElement('h1')
//        ele.innerText=`name:${person[i].name}`
//        let selected = document.getElementById("show")
//        selected.appendChild(ele)
//     }
// }
// let form = document.getElementById("myForm")
// function details(event)
// {
//     event.preventDefault()
// let div1 = document.createElement('div')
// let uname = document.getElementById('uname').value
// let pass = document.getElementById('pass').value
// div1.innerText=`Entered username is ${uname} and password is ${pass}`
// form.appendChild(div1)
// }
// form.addEventListener('submit',details)


var title = ["durga", "prasad", "don"]
let butn = document.getElementById("butn")
butn.addEventListener('click', remove)
function remove() {
    let target = document.getElementById('names')
    target.innerHTML = ''
    for (let i in title) {
        let ele = document.createElement('h1')
        ele.innerText = `${title[i]}`
        ele.addEventListener('click', function() {
            del(i)
        })
        target.appendChild(ele)
    }
}

function del(index) {
    title.splice(index, 1)
    remove()
}










