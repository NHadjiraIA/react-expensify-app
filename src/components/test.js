console.log("T")
setTimeout(() =>{
    console.log("HHHH")
},0)

let rainF = ["dd","eee","rr"]
rainF.splice(0,2)
console.log(rainF)
const person ={
    age: "dave",
    age:50,
    paye:"canada"
}
// var result = map((x) => x.toUpperCase())
// console.log("this is result", result)
let scors =[]
scors.push(1,2)
scors.pop()
scors.push(3,4)
let scor = scors.reduce( (a,b) => a+b)
console.log("scor", scor)

function sum (num1, num2= 2, num3 =3){
    return num1+ num2+ num3
}
const value = [3.5]
let total = value + sum()
console.log ("total" , total)
const arr1 = [2,4,6]
const arr2 = [3,5,7]
console.log([...arr1, ...arr2])
