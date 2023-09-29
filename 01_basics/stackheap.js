//Stack:Primitive

//Heap:Non primitive

let name1 = "krishna"
let name2 = name1;
console.log(name2)

name2 = "Girdhar"
console.log(name2)

let myObj = {
    name: "krishna",
    city: "Vrindavan",
    brother:"Balram"
}

let myObj2 = myObj

console.log(myObj2)
console.log(myObj)
myObj.city = "Mathura"


console.log(myObj2)
console.log(myObj)
