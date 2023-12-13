// class triangle
// {
//     shape()
//     {
//         console.log("triangle has 3 sides");
//     }
// }
// class square extends triangle
// {
//     shape()
//     {
//         console.log("square has 4 sides")
//     }
// }
// let t = new triangle()
// t.shape()
// let sq = new square()
// sq.shape()
// function area(l,b)
// {
//     return cal(l,b)
// }
// function cal(a,b)
// {
//     return a*b
// }
// console.log(area(2,3));
// let num1 = parseInt(prompt("Enter number1"))
// let num2 = parseInt(prompt("Enter number2"))
// let choice = prompt("Enter 1 for addition or 2 for subtraction")
// function caluculator(choice,num1,num2)//functional declaration
// {
//     if(choice == 1)
//     {
//         let res = addition(num1,num2)
//         alert(`the additon of ${num1} and ${num2} is ${res}`)
//     }
//     else if(choice == 2)
//     {
//         let res = subtraction(num1,num2)
//         alert(`the subtraction of ${num1} and ${num2} is ${res}`)
//     }
//     else
//     alert("Enter valid choice")
// }
// let addition = (a,b)=>a+b//arrow function
// let subtraction = (a,b)=>a-b
// caluculator(choice,num1,num2)
//Rest operator: it is used when we want to pass huge arguments to a function and we dont know how many values we are gona pass
//using rest operator(...)it creates a new array and stores the values that are passed to function for retriving values use loop controls
// function names(...names)
// {
//     for(let i in names)
//     {
//         console.log(names[i])
//     }
// }
// // names("durga","abishek","deekshith","vijaya surya","jeevan","vikram","vishnu","charan","ameer","gowsick","mugundhan","karthik","mohit","deepak")
// let name = ["durga","abishek","deekshith","vijaya surya","jeevan","vikram","vishnu","charan","ameer","gowsick","mugundhan","karthik","mohit","deepak"]
// names(...name)//spread operator here we are spreading the values of the array name and values are passed as arguments to names function using spread operator
// console.log(Array.isArray(name));
// a =10
// var a //supports hoisting result in undefined
// b=20
// let b//doesn't support hoisting result in refernce error
//for loop
// let arr=[1,2,3,4,5]
// for(let i =0 ;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }
// //for of loop
// for(let o of arr)
// {
//     console.log(o);
// }
// //for in loop
// for(let i = 0 ;i<arr.length;i++)
// {
//     console.log(`index: ${i} value:${arr[i]}`);
// }
// //for each loop
// arr.forEach((ele)=>console.log(ele*10));
// let movie = ["RRR","Kgf","pushpa","gk","devil"]
// let part = movie.slice(1)
// console.log(part);
// movie.splice(1,0,"aarya")
// movie.splice(3,2)
// console.log(movie)
// movie.push("saalar")
// console.log(movie)
// movie.pop()
// console.log(movie)
// movie.shift()
// console.log(movie)
// movie.unshift("Devara")
// console.log(movie)
// let m = movie.toString()
// console.log(m);
// let txt = movie.join(" ")
// console.log(txt);
// let arr = []
// let obj1={name:"durga",age:21}
// let obj2={name:"prasad",age:25}
// let obj3={name:"dp",age:20}
// arr.push(obj1,obj2,obj3)
//  let even = arr.filter((ele)=>ele.age%2==0)
// console.log((even));
// let productList = []
// let fresh = []
// let i=0
// let product1 = {
//     name:"iphone",price:250000
// }
// let product2 = {
//     name:"samsung",price:150000
// }
// let product3 = {
//     name:"oneplus",price:48000
// }
// productList.push(product1,product2,product3)
// let price =productList.map((ele)=>ele.price*(50/100))
// productList.forEach((ele)=>find(ele))

// function find(ele)
// {
//     fresh[i]=ele.price*(50/100)
//     i++
// }
// console.log(fresh);
// console.log(price)
// let total = productList.reduce((acc,ele)=>acc+ele.price,0)
// console.log((total));
// let a = [1,2,3,4]
// let t = a.reduce((acc,ele)=>acc+ele)
// console.log((t));
// let str = "hi there how are you"
// console.log(str.slice(1));
// console.log(str.length);
// console.log(str.substring(0,3));
// console.log(str.substr(-4));
// let arr=str.split(" ")
// let newarr = []
// let j=0
// for(let i in arr)
// {
//     newarr[j] = arr[i].charAt(0).toUpperCase()+arr[i].slice(1)
//     j++
// }
// let newstr = newarr.join(" ")
// console.log(newstr);
// let str = "hi there how are you"
// let newstr=str.replaceAll('e','p')
// let newstr1 = str.replace('there','durga')
// console.log(newstr1);
// console.log(newstr);
// let newstr2 = str.padEnd(30,'!')
// console.log((newstr2));
// console.log(str.charCodeAt(13));
// console.log(str.includes("you"));
// console.log(str.indexOf('how'));
