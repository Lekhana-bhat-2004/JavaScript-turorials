// console.log("hello, welcome!!");

// let name=" first lekhana";
// console.log(name);

// let age=20;
// console.log(age);

// let x=null;
// let y=undefined;
// console.log(x,y);

// let isFollow=("FOLLOW CAMEL CASE");
// console.log(isFollow);

// let $name2="leks bhat";
// console.log($name2);
// let _name3="final name";
// console.log(_name3);

// let ages=66;
// ages=99;
// console.log(ages);

// const marks=88;
// console.log(marks);

// let price=3536+55;
// let xxx;

// const Student={
//      name:"lekhana bhat",
//      age:20,
//      usn:"1dt22is082",
// };
// Student.age=Student.age +1;
// let name="lekhana";

const product={
    name:"parkerpen",
    colour: "black",
    offer: 5,
    price:270,
};

console.log(product);

const information={
    username:"shardda khapra",
    followers: "66M",
    following:21,
    isFollow:true,
};
console.log(information);
console.log(typeof information);
console.log(typeof information["username"]);
console.log(typeof information["isFollow"]);
console.log(information["followers"]);
console.log(information.isFollow);

let a=10;
let b=15;
console.log("a+b=", a+b);
console.log("a++:" , a++);
console.log("a:" , a);
console.log("++a:" , ++a);
console.log("a:" , a);

const Details={
    name:"lekhana",
    age:20,
    usn:"1dt22is082",
};
console.log(Details);
console.log(Details["name"]);
console.log(Details.age);
Details.age= Details["age"] +1;
console.log(Details.age);
Details["name"]="lava kumar";
console.log(Details["name"]);
// we can chnage the const object's KEYSS
// we can chnage the const object's VALUES
// chnaging the const object means changing the entire collection, not just key or values

const product2={
    name:"parker",
    type:"ball pen",
    colour:"black",
    price:200,
    offer:"5%",
    
};
console.log(product2);
console.log("MDN DOCUMENTATION ,developers.mozilla org TO READ ANYTHING ABT HTML,CSS,JS");

// alert("be carefull"); //one time pop up
// let name= prompt("enter your name"); //takes input
// console.log(prompt("enter your name"));


// for ofloop for strings,arrays
let str="lekhana";
size=0;
for(let i of str){
    console.log(i);
    size++;
}
console.log(size);

// for in loop for objects
let student={
    name:"lekhana",
    age:20,
    usn:"1dt22is082",
};
for(let i in student){
    console.log(i);
    console.log(student[i]);
}
//for loop
for(let i =0;i<=100;i++){
    if(i%2==0){
        console.log(i);
        
    }
};

let num=20;
let usernum=prompt("enter a number");
while(num!=usernum){
    usernum=prompt("wrong,guess again"); //prompt always returns a srting , so num also returns as string
}
console.log("correct");
