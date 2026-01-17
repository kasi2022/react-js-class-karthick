
var a=10;
let b=20;
const d=30;

// data types 

// primitives - stack , number[1,2, 0.8 ],string [az,number,ymboles], 
// boolean [true,false], null[-],
//  undefined[varrible is declared but value is not assigned ]
// pending null,symbol
var a=10;
var isActive=true;
var name="abc";
// 2 4 8 16
// 1 0 1 0
console.log(a)  // undefined
// , symbol[-]
var r,y;
r=20;
y=30;
const sum = r=y;

// non-primitives - heap , object, array,
// To declare an object ,and array must use const keyword
const person={
    // key:value
    name:"abc",
    age:30,
    isActive:true
}
console.log(person.name)
person.name="xyz";
console.log(person)

// array 
// to declare an array must use const keyword
// array and store multiple in a single 
//  it can store multiple types values
//  array is identyfied by  square brackets []
// array has index , it start with 0 ,1,2,3
const colors=["red","green","blue",10,true];
console.log(colors[2])  // blue (color [.....]) 
colors[2]="yellow";
console.log(colors[2]) // yellow (color[..#..])

// ES6 - 