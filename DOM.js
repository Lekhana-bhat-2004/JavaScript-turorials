// console.log(window.document);

console.dir(document); //prints properties and methods of document

console.dir(document.body); //prints body object
console.log(document.body); //pritns html version of body object

console.log(document.head);

console.dir(document.doctype);
console.dir(document.body.childNodes[5]);

// document.body.childNodes[5].innerText="hello"; can change the heading 
document.body.style.background="grey";

document.getElementById("heading");
// console.log(heading);

let topics=document.getElementsByClassName("topic"); //returns HTML Kcollection
console.dir(topics);
console.log(topics);

let para=document.getElementsByTagName("p");
console.log(para);

let first=document.querySelector("h1");
console.dir(first);

let all=document.querySelectorAll("h1");
console.dir(all);

let second=document.querySelector(".topic");
console.dir(second);

let secondall=document.querySelectorAll(".topic");
console.dir(secondall);

let button=document.querySelector("#btn");
console.dir(button);

//to get the properties of elements
button.tagName;

console.log("printing first child");
console.dir(document.querySelector("body").firstChild);

console.dir(document.querySelector("body").children);

console.log("printing dic inner tesxt and html")
let div=document.querySelector("div");
console.dir(div);
console.log(div.children);
console.log(div.innerText); //returns text content  only, we can change only content
console.log(div.innerHTML); // return html content with text content, we can changebtag also by adding italic tag ect

div.innerText="vanish"; //chnages inntertext to vanish
console.log(div.innerText);
console.log(div.innerHTML);

let h2= document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+" from lekhana"; //concatenate
console.dir(h2.innerText);

let div=document.querySelectorAll(".divi");
console.dir(div);
div[0].innerText="hello";
div[1].innerText="hi";
console.log(div[0].innerText); //chnaged
console.log(div[1].innerText); //changes
console.log(div[2].innerText); //not chnaged

// use for loop
console.log("using forr loop");
let idx=1;
for(d of div){
    console.log(`prev text: `+d.innerText);
    d.innerText=`this is new unique value for index ${idx}`;
    idx++;
    console.log(d.innerText);
}



