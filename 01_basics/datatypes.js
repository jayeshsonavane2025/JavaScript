//Primitive

//String ,number,bigint,symbol,null,undefined,boolean

//js is dynamically typed

let score = 10

const val = 12.3

const islogin = true

let mail

let name = null

let num1 = Symbol('123')
let num2 = Symbol('123')

console.log(num1===num2)

const arr = ["krishna", "radha", "mohan", "girdhar"];

console.log(arr[3])


let myObj = {
    name: "krishna",
    city: "Vrindavan",
    brother:"Balram"
}

console.log(myObj)

console.log(myObj.name)

let myfun = function () {
    console.log("Naam mahima Kahi na jaye")
}


myfun()

console.log( typeof myfun)
console.log(typeof myObj)