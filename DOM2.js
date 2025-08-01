// let div=document.querySelector("div");
// // console.dir(div);
// console.log(div);

//GETATTRIBUTE
let id=div.getAttribute("id");
console.log(id);

let name=div.getAttribute("name");
console.log(name);

let parag=document.querySelector("p");
console.log(parag.getAttribute("class"));
// let cls=parag.getAttribute("class");
// console.log(cls);

//SETATTRIBUTE
let para=document.querySelector("p");
console.log(para.setAttribute("class","topic"));

// let div2=document.querySelector("div");
// console.log(div2.setAttribute("id","newdiv")); //see changes in console

//access style
console.log(div);
console.log(div.style);
console.log(div.style.color);
// div.style.backgroundColor="green";
// div.style.fontSize="50px";
// div.innerText="changeddd";

practice
let newbtn=document.createElement("button");
newbtn.innerText="click me";
console.log(newbtn);

// //add at end at div
// let div=document.querySelector("#boxes");
// div.append(newbtn); //inside div at last
// div.prepend(newbtn); //inside div at first
// div.before(newbtn);

let par=document.querySelector("p");
par.after(newbtn);

let newHeading=document.createElement("h1");
newHeading.innerHTMl="hello hi byebyee";
newHeading.style.color="blue";
console.log(newHeading);

document.querySelector("body").prepend(newHeading);

//remove para
par.remove();
// newbtn.remove();

//practice
let btnElement=document.createElement("button");
btnElement.innerText="clickk mee";
btnElement.style.backgroundColor="pink";
btnElement.style.color="white";

document.querySelector("body").prepend(btnElement);

let paras=document.querySelector("p");
paras.getAttribute("class");
console.log(paras);
// paras.setAttribute("class","newClass");  changing using 
//created newClass in CSS and changed in js

//use classList.add to add it new class eaisly
paras.classList.add("newClass");
paras.classList.remove("newClass");
console.log(paras.classList); //to see all the classes
 












