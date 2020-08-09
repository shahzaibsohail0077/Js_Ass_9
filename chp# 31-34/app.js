// ASSIGNMENT #31-34
// CHAPTER # 31-34
// Task # 01

document.write("<h4>" + "Task #01");
var date = new Date();
date = date.toString();
document.write("<h4>" + date);

// Task # 02

document.write("<h4>" + "Task #02");
var monthNames = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "Octbar", "November", "December"];
var current = new Date();
var theMonth = current.getMonth();
var nameOfMonth = monthNames[theMonth];
document.write("<h4>" + "Current Month: " + nameOfMonth);

// Task # 03

document.write("<h4>" + "Task #03");

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];
document.write("<h4>" + "Today is " + nameOfToday);

// // Task # 04

// document.write("<h4>" + "Task #04");

// if (dayNames in "Sat" | "Sun") {
//     document.write("<h4>" + "It's Fun day");
// }


// Task # 07

document.write("<h4>" + "Task #07");

var date1 = new Date();
date1.setHours(13,0,1);
var neww = date1.getHours();
if(date1)

alert(neww);

// Task # 08

document.write("<h4>" + "Task #08");
var d = new Date();
d.setMonth(11);
d.setDate(31);
d.setHours(0,0,0)

document.write("<h4>" + "Later date: " + d.toString());

// Task # 14

document.write("<h4>" + "Task #14");
// a
var C_N = prompt("your name");
// b
var C_M= prompt("Current month");
// c
var  N_U = +prompt("enter your units");
// d
var C_U = 16;
// e
var N_A_P = N_U * C_U;
// f
var L_P = 350;
// g
var G_A_P = N_A_P + L_P;

document.write("<h2>" + "K-Electric Bill" + "<br>");
document.write("<h4>" + "Customer Name: " + C_N + "<br>");
document.write("<h4>" + "Month: " + C_M + "<br>");
document.write("<h4>" + "Numbers of units: " + N_U + "<br>");
document.write("<h4>" + "Charges per units: " + C_U + "<br>" + "<br>");
document.write("<h4>" + "Net Amount Payable (within Due Date): " + N_A_P + "<br>");
document.write("<h4>" + "Late payment surcharges: " + L_P + "<br>");
document.write("<h4>" + "Gross Amount Payable(After Due Date): " + G_A_P + "<br>");