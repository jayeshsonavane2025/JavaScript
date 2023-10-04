//object literalls

symbol=Symbol("abc")
const Golok = {
    name:"krishna",
    pantha:"Vaishnav",
    age: 999999999,
    youGoing: true,
    [symbol]:"key1"
}


console.log("Your are going to Golok :", Golok.youGoing)
console.log(Golok["name k"])
console.log(Golok[symbol])

Golok.age = 0
console.log(Golok.age)
//Object.freeze(Golok)

Golok.age=9898989
console.log(Golok.age)

Golok.Greeting= function () {
    console.log(`Hari Bol,${this.name}`)
}

console.log(Golok)

console.log(Golok.Greeting())
