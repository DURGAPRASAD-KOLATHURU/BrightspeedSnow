// var a =10
// var b = "hii"
// var c = true
// var d = undefined
// var e = null
// var f = 123456789012345678901234567890n
// //non primitive data types
// var g = {
//     name:"durga",
//     age:20
// }
// var h = [1,{movie:"RRR",director:"Rajamouli"}]
// console.log(typeof a)
// console.log(typeof b)
// console.log(typeof c)
// console.log(typeof d)
// console.log(typeof e)
// console.log(typeof f)
// console.log(typeof g)
// console.log(typeof h)
//Scopes of variables
//Global Scope :the variables which are declared 
//type coercion
//1.implicit coercion
// let a = 10-"5"
// console.log(a)//here the value of string 5 is implicitly coerced to number 5 which results subtraction
//2.explicit coercion
// let b = parseInt("25")//here string is converted to number with help of external function
// console.log(typeof b)

// "use strict"
//rules that helps devlopers to enhance error handling and write and maintain reliable code
//1.implict declaration of variable is prohibited
//2.usage of octal literal is restricted
//3.disabling duplicate parameters
//4.preventing the use of eval
//a=10
//let b = 010
// function a(b,b)
// {
    
// }
// let eval  = 10
// console.log(eval)
//diff b/w var ,let ,const
//var: var is traditional way of declaring variables,var follows functional scope and it adds itself to window object and it support hoisting,redeclaration is possible
//let : used in es 6 doesn't support hoisting,supports block scope,doesn't add itself to window object
//const:used to assign the values that are not changeable redeclaration/ assignment is not possible 
// var a =10
// console.log(a)
// var a = "hii"
// console.log(a)//possible
// let b  = 10
// console.log(b)
// let b =20//not possible
// function a()
// {
//     var b =10 
// }
// console.log(b)//var keyword supports functional scope
// {
//     let a = 10
//     var b =20
//     const c = 30
// }
// console.log(a)//let and const supports block scope
// console.log(b)//var doesnt support block scope
// console.log(c)
//Hoisting:hoisting is a aconcept where all the varable declarations moved to the top
//there are 2 types of hoisting 1.variable hoisting 2. functional hoisting
// var a ;
// console.log(a);//variable hoisting
// a =25
// console.log(a);
// fun1()//functional hoisting
// function fun1()
// {
//     console.log("hello");
// }
//functional expression doesn't support functional hoisting
// console.log(a());//doesn't support functional hoisting
// let a = ()=>"hello"
//falsy values are 0,NaN,undefined,null,false,"" except these all are truthy values which can be used to satisify the condition and execute sts inside block
//Objects in javascript
// let obj = {
//     name:"durga",
//     age:21
// }
// for(let o in obj)
// {
//     console.log(o);
//     console.log(obj[o]);

// }
// console.log(obj.name);//acessing object properties
// console.log(obj);
// obj.age=23//updating property value
// console.log(obj.age);
// obj.place = "chittoor"
// console.log(obj.place);
// delete obj.age//deleting the property
// console.log(obj.age);//undefined
// class car
// {
//     constructor(name,model,price)
//     {
//         this.name = name,
//         this.model = model,
//         this.price = price
//     }
//     details = function()
//     {
//         return this.name+" " +this.model+" "+this.price
//     }
//     discount=()=>1+199999
// }
// let c = new car("bmw",2023,2500000)
// console.log(c);
// console.log(c.details());
// console.log(c.discount());
// let arr = [10,NaN,false,undefined,{name:"durga",age:25}]
// let obj1 = {
//     place:"chittoor"
// }
// arr.push(obj1)
// arr.shift()
// arr.unshift(30)
// arr.pop()
// arr.forEach((ele)=>console.log(ele+"10"));
// console.log(arr)
