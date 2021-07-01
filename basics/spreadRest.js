//--------------------------------Spread--------------------------------------------------------------------
const  oldArray = [1,2,3,4,5];

const newArray = [...oldArray, 6, 7];

console.log(newArray);

const person = {
    name:"Tony"
};
//---------------------------------------Rest---------------------------------------------------------------
const newPerson = {
    ...person,
    age:24
}
console.log(newPerson);

const filter = (...args)=>{
    return args.filter(el => el === 1);
}
console.log(filter(1,2,3));

//-------------------------------------Destructuring----------------------------------------------------------

[a, b] = ['hello', 'max'];
console.log(a);
console.log(b);

let {name, age} = {name:'Sachin', age:24};
console.log(name);
console.log(age);

//------------------------------------Primitive Type----------------------------------------------------------

const people = {
    name :"Sachin"
}
const secondPerson = {
    ...people
}
people.name = "Steve";
console.log(secondPerson);