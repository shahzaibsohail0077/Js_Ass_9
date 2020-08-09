// Assigment # 05;
// Chapter # 05;

// Task # 01
document.write("<h4>"+"Task # 01"); 

var num1 = 3;
var num2 = 5;
var sum = num1 + num2;

document.write("<b>" + "<h2>" + "Sum of " + num1 + " and " + num2 + " is " + sum + "<br>");

// Task # 02
document.write("<h4>"+"Task # 02");
// Subtraction

var sub = num1 - num2;
document.write("<b>" + "<h4>" + "Subtraction of " + num1 + " and " + num2 + " is " + sub + "<br>");

// Multiplication

var mult = num1 * num2;
document.write("<b>" + "<h4>" + "Multiplication of " + num1 + " and " + num2 + " is " + mult + "<br>");

// Division

var div = num1 / num2;
document.write("<b>" + "<h4>" + "Division of " + num1 + " and " + num2 + " is " + div + "<br>");

// Modolus

var mod = num2 % num1
document.write("<b>" + "<h4>" + "Modolus of " + num2 + " and " + num1 + " is " + mod + "<br>" + "<br>" + "<br>");

// Task # 03
document.write("<h4>"+"Task # 03");
// a
var num;
// b
document.write("<b>" + "<h4>" + "Value after variable declaration is: " + num + "<br>");
// c
num = 5;
// d
document.write("<b>" + "<h4>" + "Initial value: " + num + "<br>");
// e
num = num + 1;
// f
document.write("<b>" + "<h4>" + "Value after increment is: " + num + "<br>");
// g
num = num + 7;
// h
document.write("<b>" + "<h4>" + "Value after addition is: " + num + "<br>");
// i
num = num - 1;
// j
document.write("<b>" + "<h4>" + "Value after decrement is: " + num + "<br>");
// k
num = num % 3;
// l
document.write("<b>" + "<h4>" + "The remainder is : " + num + "<br>" + "<br>" + "<br>");


// Task #04
document.write("<h4>"+"Task # 04");

var ticket = 600;
var buy = ticket * 5;
document.write("<b>" + "<h4>" + "Total cost to buy 5 tickets to a movie is " + buy + " PKR" + "<br>");

// Task # 05
document.write("<h4>"+"Task # 05");
document.write("<b>" + "<h2>" + "Table of 5" + "<br>");
for (var i = 1; i <= 10; i++) {
    document.write("<b>" + "<h4>" + "5x" + [i] + "=" + "5" * [i] + "<br>");
}

// Task # 06
document.write("<h4>"+"Task # 06");
var C = 25;
var F = 70;

var C_to_F = (C * (9 / 5)) + 32;
var F_to_C = (F - 32) * (5 / 9);

document.write("<h6>" + C + "<sup>" + "o" + "</sup>" + "C is " + C_to_F + "<sup>" + "o" + "</sup>" + "F" + "<br>");
document.write("<h6>" + F + "<sup>" + "o" + "</sup>" + "F is " + F_to_C + "<sup>" + "o" + "</sup>" + "C" + "<br>" + "<br>");

// Task # 07
document.write("<h4>"+"Task # 07");
var item1 = 650;
var item2 = 100;
var Quan1 = 3;
var Quan2 = 7;
var charges = 100;
var total = (item1 * Quan1) + (item2 * Quan2) + charges;
document.write("<b>" + "<h1>" + "Shopping Cart" + "<br>" + "<br>");
document.write("<h6>" + "Price of item 1 is " + item1 + "<br>");
document.write("<h6>" + "Quantity of item 1 is " + Quan1 + "<br>");
document.write("<h6>" + "Price of item 2 is " + item2 + "<br>");
document.write("<h6 >" + "Quantity of item 2 is " + Quan2 + "<br>");
document.write("<h6 >" + "Total coat of your order is " + total + "<br>" + "<br>" + "<br>");

// Task # 08
document.write("<h4>"+"Task # 08");
document.write("<b>" + "<h1>" + "Marks Sheet" + "<br>" + "<br>");
var total_marks = 980;
var mark_obtained = 804;
var percentage = (mark_obtained / total_marks) * 100;

document.write("<h4>" + "Total marks: " + total_marks + "<br>");
document.write("<h4>" + "Marks obtained: " + mark_obtained + "<br>");
document.write("<h4>" + "Percentage: " + percentage + "%" + "<br>");



// Task # 09
document.write("<h4>"+"Task # 09");

document.write("<b>" + "<h1>" + "Currency  in PKR" + "<br>" + "<br>");
document.write("<h4>" + "Total Currency in PKR: " + (10 * 104.80 + 25 * 28));

// Task # 10

document.write("<h4>"+"Task # 10");

var number = 3;
// a
document.write("<h4>" + "My initial num is: " + number + ", Add 5 is: " + (number + 5) + ", Multiply by 10 is: " + (number * 10)
    + ", Divide the result by 2 is: " + (number / 2) + "<br>");

// Task #11

document.write("<h4>"+"Task # 11");

document.write("<b>" + "<h1>" + "Age Calculator" + "<br>" + "<br>");
var C_Y = 2020;
var B_Y = 1998;
var Y_A = C_Y - B_Y;
document.write("<h3>" + "Current Year: " + C_Y + "<br>");
document.write("<h3>" + "Birth Year: " + B_Y + "<br>");
document.write("<h3>" + "Your Age: " + Y_A + "<br>");

// Task #12

document.write("<h4>"+"Task # 12");

document.write("<b>" + "<h1>" + "The Geometrizer" + "<br>" + "<br>");
const pi = 3.142;
//  a
var radius = +prompt("Enter the radius");
// b
var C_C = 2 * pi * radius;
var A_C = pi * radius * radius;
document.write("<h3>" + "Raduis of a circle: " + radius + "<br>");
document.write("<h3>" + "The circumference is: " + C_C + "<br>");
document.write("<h3>" + "The area is: " + A_C + "<br>");

// Task #13

document.write("<h4>"+"Task # 13");

document.write("<b>" + "<h1>" + "The Lifetime Supply Calculator" + "<br>" + "<br>");

var snack = prompt("enter your favorite snack");
var Age_ = +prompt("Enter your age");
var max_Age = +prompt("Enter your max age");
var Amount_per_day = +prompt("Amount per day");

document.write("<h3>" + "Favorite Snack: " + snack + "<br>");
document.write("<h3>" + "Current Age: " + Age_ + "<br>");
document.write("<h3>" + "Estimate Maximum Age: " + max_Age + "<br>");
document.write("<h3>" + "Amount of snack per day: " + Amount_per_day + "<br>");
document.write("<h3>" + "You will need " + (max_Age - Age_)*Amount_per_day + " " + snack + 
" to last you until the ripe old age of " + max_Age + "<br>");