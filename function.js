function myFunction(){
    console.log("hello");
    console.log("this is a function");
} //no: while defining function
myFunction();
//:required while function call
//minimizes redundancy(repetation)

function newFunction(msg){ //parameter- variable inside function defination
    console.log(msg);
}
newFunction("i love js"); //argument-value during function call to call

function add(a,b){
    console.log(a+b);
}
add(10,20);

//return 
function add2(a,b){
    //a and b are local variables of function ,block scope
    console.log("before return");
    return a+b;
    console.log("after return"); //does not run
}
let res=add2(4,6);
console.log(res);

//ARROW FUNCTION stores function in variable, its result is stored in variable
//used for smll tasks only 
let arrowSum=(a,b)=>{
    console.log(a+b);
}
arrowSum(20,70);
console.log(arrowSum(5,5));

//CALLBACK function is called inside another function
function abc(){
    console.log("hello");
}
function myFunc(abc){
    return abc;
}
 //example using foreach : to do some work on the elements of arrayyyyyyy
//  for each takes 3 arguments- val,idx,arr
//only used for arrays
let arrs=[1,2,3,4,5,];
arrs.forEach(function printVal(val){
    console.log(val);
})

let arr1=["keerthi","bhat","lekha"];
arr1.forEach((val,idx,arr1)=>{
    console.log(val.toUpperCase(),idx,arr1);
})

//IMPORTANT ARRAY METHODS FREQ useDebugValue

//1) MAP -returns new array
console.log("map method");
let number=[2,4,6,8,10];

let newNumber=number.map((val)=>{
    return val*2;
});
console.log(newNumber);

//filter -returns new array with condtiton true
console.log("filter");
let arr2=[1,2,33,44,55,66,777];

let newarr2=arr2.filter((val)=>{
    return val>10;
});
console.log(newarr2);

//3)reduce ,has 2 arguments- acc,curr 
//returns single value
console.log("reduce method");
let arr3=[1,2,3,4, 33,7];

let newarr3=arr3.reduce((acc,curr)=>{
    return acc*curr;
});
console.log(newarr3);

//to return largest num using reduce
console.log("largest number");
let largest=arr3.reduce((Prev,curr)=>{
    return Math.max(Prev,curr)
});
console.log(largest);

//practice ques
let marks=[55,66,77,88,87,94,99];

let filtered=marks.filter((val)=>{
    return val>90;
});
console.log("marks > 90 is: "+filtered);

let sum=marks.reduce((prev,curr)=>{
    return prev+curr;
});
console.log("the sum is: ", sum);


//practice 
let n=prompt("enter  number");

let array=[];
for(let i=0;i<n;i++){
    array[i]=i+1;
}
console.log(array);4

let redSum=array.reduce((prev,curr)=>{
    return prev+curr;
})
console.log(redSum);
//factorial
let redprdct=array.reduce((prev,curr)=>{
    return prev*curr;
})
console.log(redprdct);
