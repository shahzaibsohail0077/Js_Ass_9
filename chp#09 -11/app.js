// ASSIGNMENT # 9-10
// CHAPTER # 9-11;
// Task # 01

document.write("<h4>" + "Task # 01");

var city_name = prompt("enter your city name");
var cityy = city_name.toLowerCase();
if (cityy === "karachi") {
    document.write("<h4>" + "Welcome to city of lights");
}


// Task # 02

document.write("<h4>" + "Task # 02");

var gender = prompt("Enter the gender")
if (gender === "male") {
    document.write("<h4>" + "Good Morning Sir");
}
if(gender === "female") {

    document.write("<h4>" + "Good Morning Ma'am");
}

// Task # 03

document.write("<h4>" + "Task # 03");

var signal_color=prompt("Enter the color of traffc light");
if(signal_color=="Red"){
    alert("Must Stop");
}
if(signal_color=="Yellow"){
    alert("Ready to move");
}
if(signal_color=="Green"){
    alert("Move now");
} 

// Task # 04

document.write("<h4>" + "Task # 04");

var fuel = +prompt("enter your remaining fuel in liters");
if (fuel === 0.25) {
    document.write("<h4>" + "Please refill the fuel in your car");
}



// Task # 05

document.write("<h4>" + "Task # 05");

// a
var a = 4;
if (++a === 5) {
    alert("given condition for variable a is true");
    // Yes Display
}

// b. 
var b = 82;
if (b++ === 83) {
    alert("given condition for variable b is true");
    // Not Display
}
// c.

var c = 12;
if (c++ === 13) {
    alert("condition 1 is true");
    // Not Display
}
if (c === 13) {
    alert("condition 2 is true");
    // Yes Display
}
if (++c < 14) {
    alert("condition 3 is true");
    // Not Display
}
if (c === 14) {
    alert("condition 4 is true");
    // Yes Display
}

// d.

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
    alert("The cost equals");
    // Yes Display
}

// e.

if (true) {
    alert("True");
    // Yes Display
}
if (false) {
    alert("False");
    // Not Display
}

// f.

if ("car" < "cat") {
    alert("car is smaller than cat");
    // Yes Display
}

// Task # 06


document.write("<h4>" + "Task # 06");

var marks_obtained = +prompt("enter the obtained marks in three subject");
var total_marks = 300;
var percentage_ = (marks_obtained / total_marks) * 100;

document.write("<b>" + "<h4>" + "Marks Sheet" + "<br>" + "<br>");
document.write("<h4>" + "Total  marks: " + total_marks + "<br>");
document.write("<h4>" + "Marks obtained: " + marks_obtained + "<br>");
document.write("<h4>" + "Percentage: " + percentage_ + "%" + "<br>");

if (percentage_ >= 80) {
    document.write("<h4>" + "Grade : A-one " + "<br>" + "Remarks : Exellent");
}
else if (percentage_ >= 70) {
    document.write("<h4>" + "Grade : A " + "<br>" + "Remarks : Good");
}

else if (percentage_ >= 60) {
    document.write("<h4>" + "Grade : B " + "<br>" + "Remarks : You need to improve");
}
else {
    document.write("<h4>" + "Grade : Fail " + "<br>" + "Remarks : Sorry");

}


// Task # 07


document.write("<h4>" + "Task # 07");

var secret_num = 6;
var number = +prompt("enter the any number between 1 to 10");
// a
if (number === secret_num) {
    document.write("<h4>" + "\"Bingo! Correct Answer\"");
}
// b
else {
    document.write("<h4>" + "\"Close enough to the correct answer\"");
}

// Task # 08


document.write("<h4>" + "Task # 08");

var check = +prompt("Enter the numbar"); 

if(check % 3 == 0){
    document.write("<h4>" + "\"Yes is divided by 3 \"");
    
}
else{
    document.write("<h4>" + "\"No\"");

}

// Task # 09


document.write("<h4>" + "Task # 09");

var even_odd_num = +prompt("Enter the any number");


if(check % 2 == 0){
    document.write("<h4>" + "\"Even Number\"");
    
}
else{
    document.write("<h4>" + "\"Odd number\"");

}


// Task # 10

document.write("<h4>" + "Task # 10");

var T = +prompt("Enter the temperature");
// a
if(T > 40){
    document.write("<h4>" + "\" It is too hot outside.\"")
}
// b
else if(T > 30){
    document.write("<h4>" + "\" The Weather today is Normal.\"")
}
// c
else if(T > 20){
    document.write("<h4>" + "\" Today’s Weather is cool.\"")
}
// d
else if(T > 10){
    document.write("<h4>" + "\" OMG! Today’s weather is so Cool.\"")
}

// Task # 11
    
document.write("<h4>" + "Task # 11" + "<br>");

var num1 = +prompt("Enter the First No");
var num2 = +prompt("Enter the Second No");
var operator = prompt("enter the operator");

if(operator === '*'){
    document.write(num1*num2);
}
else if (operator === '-'){
    document.write(num1-num2);
}
else if (operator === '/'){
    document.write(num1/num2);
}
else if (operator === '%'){
    document.write(num1%num2);
}   
else if (operator === '+'){
        document.write(num1 + num2);    
}
