
const sym=Symbol("Mercy")

const myObj = {
    name: "Krishna",
    nature: "ParamKripalu",
    work: function (yname) {
        return (`You are under my Kripa ${yname} yes I am your  ${this.name}`)
    },
    [sym]:"Satsang"
    
}
// console.log(myObj)
// console.log(myObj[sym])
// console.log(myObj.name)
// console.log(myObj.work("Jayesh"))


// if ("Hari" == "Hari") {
//     console.log("Radhe radhe Bolo")
// }





