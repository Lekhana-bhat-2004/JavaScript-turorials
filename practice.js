// let fullName=prompt("enter your name");
// console.log(fullName);

// let username="@"+fullName +fullName.length;
// console.log(username);
// console.log(username);

//arrays

let arr=[85,97,44];
let sum=0;
for (let marks of arr ){
    sum+=marks
    avr=sum/arr.length;
}
console.log(`the average marks is ${avr}`);

let items=[250,300,350,490];
for(let i=0;i<items.length;i++){
    offer=items[i]/10;
    items[i]=items[i]-offer;
    console.log(`value after offer ${items[i]}`);

}
console.log(items);

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

// let res="lek"+12345;
// console.log(res); 

//****SPLICE ACTS AS SLICE WHEN ONLY ONE ARGUMENT IS PASSED */
let num3=[1,2,3,4,5];
console.log(num3);
num3.splice(2);
console.log(num3);

let num4=[1,2,3,4,5];
console.log(num4);
let num5=num4.slice(2);
console.log(num5);


function vowels(str){
    let count=0;
    for (let i of str){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count++;
        }
    }
    return count;
}
 //using arrow functipn
 let arrowfunc=(str)=>{
    let count=0;
    for (let i of str){
        if(i=="a" || i=="e" || i=="i" || i=="o" || i=="u"){
            count++;
        }
    }
    return count;
 }

 //for each 
 let newarr=[1,2,3,4,5];

 newarr.forEach((val)=>{
    console.log(val*val);
 })

 let calcsquare=(num)=>{
    console.log(num*2);
 };
 newarr.forEach(calcsquare);

 