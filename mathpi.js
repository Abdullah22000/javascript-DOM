const descripter = Object.getOwnPropertyDescriptor(Math,"PI")
//console.log(descripter)
const chai = {
    name: "Dood pati",
    price: 269,
    Availabe: true
}
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

Object.defineProperty(chai,"name",{
    writable: false,
    enumerable: false,
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))