// ASSIGNMENT #12-13
// CHAPTER # 12-13
// Task # 01

// document.write("<h4>" + "Task # 01");

// if(char===char){
// }
// else if(char ===A){
//     document.write("<h4>" + "65");

// }
// Task # 02

document.write("<h4>" + "Task # 02");
var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");

if(num1>num2){
    alert("first number is greater than second");
}

else if(num1<num2){
    alert("Second number is greater than first");
}
else if(num1===num2){
    alert("Numbers are equal");
} 


// Task # 03

document.write("<h4>" + "Task # 03");

var val = +prompt("Enter the any integer");
if(val === 0){
    document.write("<h4>" + "Number is Zero");
}
else if(val > 0){
    document.write("<h4>" + "Number is Postive");
}
else if(val < 0){
    document.write("<h4>" + "Number is Negative");
}

// Task # 04

document.write("<h4>" + "Task # 04");
var char=prompt("Enter the charachter");
if(char==='a' || char==='e' || char==='i'|| char==='o' || char==='u'){
    alert("given charachter is vowvel");
}
else{
    alert("False");
}


// Task # 05

document.write("<h4>" + "Task # 05");
// a
var pass = "shahzaib20";
// b
var pass_check = prompt("Enter the password");
// c (i)
if(pass===pass_check){
    document.write("<h4>" + "\"Correct!\"");
    
}
else{
    document.write("<h4>" + "\"Incorrect password\"");
    
}


// Task # 06

document.write("<h4>" + "Task # 06");

var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
}
else{

    greeting = "Good evening";
}

// Task # 07

document.write("<h4>" + "Task # 07");

var time_24 = prompt("enter the time in 24 hours clock");
if(time_24 > 12){
    document.write("<h4>" + time_24  + ":00  = " + (time_24-12) + " pm");
}
else{
    document.write("<h4>" + time_24 + " am");
}