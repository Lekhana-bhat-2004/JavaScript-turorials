let str1="lekhana";
let str2='bhat';
console.log(str1);
console.log(str2);

// length 
console.log("length of str1 :"+str1.length);

//string indices
console.log("position  of 4:"+ str1[3]);

//Template literals: can write string with variable
let name="lekhana";
let age=20;
console.log("my name is "+name+" and age is "+age+" years old");
console.log(`my name is ${name} and age is ${age} years old`);
//string interpolation
let specialstring=`this is a template literal ${100+200}`;
console.log(specialstring);

//escape characters \n helps tp print in next line

console.log("hello this is line 1\n this is line 2\n this is last line");

//tab space
console.log("hello this is line 1\t this is line 2\t this is last line");

//string length using escape character takes it as a single character
let str="lekhana\tbhat";
console.log(str+" length is "+str.length+ " using a tab space");

//STRING METHODSS IMP does not chnage the original string
//the methods will return a new string
let myName="leksss";
myName.toUpperCase();
console.log(myName);

//we have to assign a new variable to store the new stringg
let myName2="lavakumar";
newName=myName2.toUpperCase();
console.log(newName);

//  toUppercase
let strname="lekhana bhat";
console.log("original: "+strname);
let upper= strname.toUpperCase();
console.log("upper case: "+upper);

//to lowercase
console.log(strname.toLowerCase());

//includes gives boolean value if the word/letter is prrsent
console.log(strname.includes("bhat"));

//trim removes white spaces only from start and end
console.log(strname.trim());

//SLICE returns a new string with the characters from start to end
let slicingstr="Ravindra bhat";
let sliced=slicingstr.slice(3,8);
console.log("from 3 to 8 ,8 not included: "+sliced);
//does not include last index
console.log(slicingstr.slice(3));

//CONCAT 
let concat1="best";
let concat2="freind";

let newconcat=concat1.concat(concat2);
console.log(newconcat);
console.log(concat2.concat(concat1));
console.log(concat1+concat2); //can use + also
let res="lek"+12345;
console.log(res); //converts number to string

//REPLACE // replace only first instance
let replacingstr="hello lekhanaanaana";
let newreplacingstr=replacingstr.replace("ana","sss");
console.log(newreplacingstr); 

//replace all to reaplce all instances
let replacingallstr="hello lekhanaanaana";
let newreplacingallstr=replacingallstr.replaceAll("ana","lav");
console.log(newreplacingallstr);

//charAt() returns the character at the specified index
let char="BUDDY guddu";
console.log(char.charAt(6)); //starts from 0
console.log(char[6]);

//we cant change index of string so use replace method for it
let stringg="ilovejs";
stringg[0]="i"; // not correct
console.log(stringg); //get oroginal string
console.log(stringg.replace("i","S"));

