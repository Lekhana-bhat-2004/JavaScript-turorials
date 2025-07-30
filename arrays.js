let array=[1,2,3,4,5,6];
console.log(array);
console.log(array.length); //property
console.log(array[3]); //indices access
array[4]=100; //chnage value
console.log(array);

let str=["lek","minchu","subbu","kummy"];
console.log(str);
console.log(typeof str);

//looping
console.log('looping');
for(let i=0;i<str.length;i++){
    console.log(str[i]);
}
//for of loop
console.log('looping using for of ');
for(let name of str){
    console.log(name.toUpperCase());
}

//METHODSSSS 

//PUSH add at end, changes original array
let newarray=["lek","minchu","subbu","kummy"];
console.log("push method")
console.log(`old array : ${newarray}`);
newarray.push("bhat","lava","kumar");
console.log(newarray);

//unshift add at start, changes original array
console.log("unshift")
newarray.unshift("first");
console.log(newarray);


//pop remove at end, changes original array
console.log("poppping");
let deleted= newarray.pop();
console.log(newarray);
console.log(`deleted item :${deleted}`);

//shift remove at start, changes original array
console.log("shifting");
deleted=newarray.shift();
console.log(newarray);
console.log(`deleted item :${deleted}`);

//toString converts array to string
console.log(newarray.toString()); //returns new string, original array will be same

let num=[1,4,7,7,3];
console.log(num);
console.log(num.toString());

//concat() joins multiple arrays ,return new result array
let firstName=["lek","minchu","lava"];
let middleName=["subbu","kummy"];
let lastName=["bhat","kumar"];
let fullName=firstName.concat(lastName,middleName);
console.log(fullName);
//can concat multiple arrays

//slice ,doesn not change original array, returns new array from start till end
let fruits=["apple","banana","mango","orange", "pineapple","grapes"];
console.log(fruits);
let newfruits=fruits.slice(1,3);
console.log(newfruits);
console.log(fruits);

//SPLICE ,changes original array
let number=[1,2,3,4,5,6,7,8,9];
console.log(`array is: ${number}`);
number.splice(2,3,100,200,300,800);
console.log(`array is: ${number}`);

let names=["aha","bha","cha","dha","ehe"];
console.log(`array is: ${names}`);
names.splice(1,3);
console.log(`spliced array is: ${names}`);


//using splice u can add new elem at an index without deleting
//you can add ,delete, replace also
let num2=[1,2,3,4,5];
console.log(num2);
num2.splice(2,0,"hehe");
console.log(num2);

//****SPLICE ACTS AS SLICE WHEN ONLY ONE ARGUMENT IS PASSED */
let num3=[1,2,3,4,5];
console.log(num3);
num3.splice(2);
console.log(num3);
