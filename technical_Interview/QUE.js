let arr = [1,2,3,4,5,6,6,7,8,10]
// arr.length=0
// console.log(arr)

// different ways of creating new arr?

// arr.push(78,82)
// console.log(arr)

// removing duplicate array
// let newarr = new Set(arr)
// console.log(newarr)


// function abc (a,b,c){
    
// }
// function pqr(a=0,b,c){

// }
// console.log(abc.length,pqr.length)

// let a= []

// console.log(Boolean(a.length))
// console.log([].length===[].length)
// console.log([]==[])


// let a = [1,2,3]
// let b=[1,2,3]
// let c = a.every((Val,i)=>{
//     return val===b[i]
// })
// console.log(c)


// var a = "this is deepu"
// let newa= a.split(" ")
// console.log(newa)
// newa.forEach(item=>{
//     let z = item.charAt(0).toUpperCase()
//     console.log(z+item.slice(1))
// })  

// console.log("hello".charAt(0).toUpperCase()+"hello".slice(1))

// let str = "hello"
// console.log(str.charAt(0).toUpperCase())


// var a = "this IS deEpu"

// let str = a.toLowerCase.swplit(" ").map((val)=>{
//     val.charAt(0).toUpperCase()+val.splice(1).toUpperCase().join(" ")
// })

// function abc(str){
//     return str.toLowerCase().split(" ").map((word)=>{
//         return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
//         // return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
//     }).join(" ")
// }
// console.log(abc("this IS deEpu"))

// let a = 10

// console.log(++a)//11
// console.log(a++) //11

// console.log(a) //12


// why you moved to functional component rather than class component?

// another way bringing react to the project other than the npm ?

// console.log("a"-1)
// console.log("anc"+"100")
// console.log("2"-2+"2")
// console.log("2"+2+"2")
// console.log(2+2+"2")
// console.log(2+"2"+"2")

// let a={}
// let b={
//     name:"deepu"
// }
// let c={
//     name: "ram"
// }
// let d={
//     name: "rascal"
// }
// a[b] = {name:"ankit"}

// a[c] = {name:"balu"}
// console.log(a[b])
// a[d]={name:"abc"}
// console.log(a[d])  need to learn

// let y = 0
// let z = false
// console.log(y==z)  // true -- here  false in converted to 0
// console.log(y===z) // false -- here 0 is number false is boolean


// console.log(typeof(0)) //number
// console.log(typeof(undefined))  //undefined
// console.log(typeof(null))  //object
// console.log(typeof([]))  //object
// console.log(typeof(false)) //boolean
// console.log(typeof(NaN))//number

// console.log(2*NaN)  //NaN
// console.log(0/0)  //NaN
// console.log(Math.sqrt(-1))  //NaN
// console.log(Number("abf"))  //NaN
// console.log(parseInt('a'))  //NaN
// console.log(isNaN("ac"))//true


// console.log(Number(true))
// console.log(Number(false))
// console.log(Number(true)-Number(false))

// console.log(2/false)
// console.log(NaN==NaN)  //false
// console.log(NaN===NaN)  //false

// let arr1 = [1,2,3,4,5]
// let squr = arr1.map((val)=>{
//     return val>2
// })
// console.log(squr)
// let filter  = arr1.filter((val)=>{
//     return val%2 ==0
// })
// console.log(filter)

// let arr1 = [1,5,2,3,4,6]
// console.log(arr1.splice(2,3),arr1)
// console.log(arr1.includes(5,3))
// arr1.sort((a,b)=>b-a); //sort methods mutates(modifies) the array elements(does'nt give the new array)
// console.log(arr1)
// console.log(arr1)
// console.log(arr1.shift()) //shift method removes first index element in an array returns that number (it does'nt modify the array)
// let a = arr1.unshift(1,2,3,4,5)//unshift method adds elements to the begining of an array and returns the modified array length
// console.log(a)
// console.log(arr1)
// console.log(arr1.shift())
// console.log(arr1)

// function add(a){
//     return function (b){
//         return function(c){
//             return a+b+c
//         }
//     }
// }

// console.log(add(1)(2)(3)) 

// array destructuring
// let arr1 = [1,5,2,3,4,6]
// let [one , two ,three] = arr1
// console.log(one,two,three)


// object destructuring
// let obj = {
//     name : "a",
//     age : 23
// }
// let{name,age} = obj
// console.log(name,age)

// temporary dead zone

// function ab(){
//     console.log(pi)
//     const pi= 3.13    
// }

// ab();


