// ASSIGNMENT # 13-15
// CHAPTER # 13-15
// Task # 01

document.write("<h4>" + "Task # 01 ");

var student = [];
// Task # 02

document.write("<h4>" + "Task # 02 ");

var student_1 = [];

// Task # 03

document.write("<h4>" + "Task # 03 ");

var names = ["Shahzaib", "Raza", "Shahbaz"];

// Task # 04

document.write("<h4>" + "Task # 04 ");

var numbers = [3, 4, 2, 1];

// Task # 05

document.write("<h4>" + "Task # 05 ");

var bool = [true, false];

// Task # 06

document.write("<h4>" + "Task # 06 ");

var mixed = [true, false, "Shahzaib", 4, 13.5, "sohail", false];

// Task # 07

document.write("<h4>" + "Task # 07 ");

var education = ["SSC", "HSC", "BSC", "BS", "BCOM", "MS", "M. Phil", "PHD"];

document.write("<h2>" + "Qualification:");
// document.write(education[0])
for (var i = 0; i <= education.length - 1; i++) {

    document.write("<h2>" + [i + 1] + ") " + education[i] + "<br>");
}

// Task # 08

document.write("<h4>" + "Task # 08 ");

var three_students = ["Michael" , "John" , "Tony"];
var score = [320 , 230 , 480];
var percantage1 = (score[0]/500)*100;
var percantage2 = (score[1]/500)*100;
var percantage3 = (score[2]/500)*100;

document.write("<h2>" + "Score of " + three_students[0] + " is " + score[0] + ". Percentage: " + percantage1 + "%" + "<br>");
document.write("<h2>" + "Score of " + three_students[1] + " is " + score[1] + ". Percentage: " + percantage2 + "%" + "<br>");
document.write("<h2>" + "Score of " + three_students[2] + " is " + score[2] + ". Percentage: " + percantage3 + "%" + "<br>");

// Task # 09

document.write("<h4>" + "Task # 09 ");

var color_names = [" blue " , " red " , " green " , " black "];
alert("Color names list\n" + color_names);
// a
var user_clr_1 = prompt("what color he/she wants to add to the beginning");
color_names.unshift(user_clr_1);
alert("Updated the color names\n"  + color_names);

// b

var user_clr_2 = prompt("what color he/she wants to add to the end");
color_names.push(user_clr_2);
alert("Updated the color names\n"  + color_names);

// c

var user_clr_3 = prompt("add first color to the beginning");
color_names.unshift(user_clr_3);
var user_clr_4 = prompt("add second color  to the beginning");
color_names.unshift(user_clr_4);
alert("Updated the color names\n"  + color_names);

// d
color_names.shift();
alert("Updated the color names\n"  + color_names);

// e
color_names.pop();
alert("Updated the color names\n"  + color_names);

// f

var user_clr_5 = +prompt("what index he/she wants to add a color");
var user_clr_6 = prompt("what color name");
color_names.splice(user_clr_5 ,0, user_clr_6);
alert("Updated the color names\n"  + color_names);

// g

var user_clr_7 = +prompt("what index he/she wants to delete a color");
// var user_clr_8 = prompt("what color name");
color_names.splice(0,user_clr_7);
alert("Updated the color names\n"  + color_names);



// Task # 10

document.write("<h4>" + "Task # 10 ");

var array = [320, 230, 480, 120];

document.write("<h4>" + "Score of Students : " + array);
document.write("<h4>" + "Ordered Score of Students : " + array.sort());


// Task # 11

document.write("<h4>" + "Task # 11 ");

var cities_name = ["Mirpurkhas" , "Lahore" , "Karachi" , "Hyderabad" , "Islamabad" , "Quetta" , "Peshawer"];
var selected_cities = cities_name.slice(3,6);

document.write("<h2>" + "Cities List: " + "<br>" + cities_name );
document.write("<h2>" + "Selected cities List: " + "<br>"  + selected_cities );

// Task # 12

document.write("<h4>" + "Task # 12 ");

var arr = [" This ", " is ", " my ", " cat "];

document.write("<h2>" + "Array: " + "<br>"  + arr + "<br>" + "<br>");
document.write("<h2>" + "String: " + "<br>"  + arr.join(" ") + "<br>" + "<br>");


// Task # 13

document.write("<h4>" + "Task # 13 ");

var FIFO_Array = [];
FIFO_Array.push("Keyboard");
FIFO_Array.push("Mouse");
FIFO_Array.push("Printer");
FIFO_Array.push("Moniter");

document.write("<h2>" + "Devices: " + "<br>"  + FIFO_Array) ;

var out1= FIFO_Array.shift();
var out2= FIFO_Array.shift();
var out3= FIFO_Array.shift();
var out4= FIFO_Array.shift();

document.write("<h2>" + "OUT: " + "<br>" + out1);
document.write("<h2>" + "OUT: " + "<br>" + out2);
document.write("<h2>" + "OUT: " + "<br>" + out3);
document.write("<h2>" + "OUT: " + "<br>" + out4);

// Task # 14

document.write("<h4>" + "Task # 14 ");

var LIFO_Array = [];
LIFO_Array.push("Keyboard");
LIFO_Array.push("Mouse");
LIFO_Array.push("Printer");
LIFO_Array.push("Moniter");

document.write("<h2>" + "Devices: " + "<br>"  + LIFO_Array) ;

var out_1= LIFO_Array.pop();
var out_2= LIFO_Array.pop();
var out_3= LIFO_Array.pop();
var out_4= LIFO_Array.pop();

document.write("<h2>" + "OUT: " + "<br>" + out_1);
document.write("<h2>" + "OUT: " + "<br>" + out_2);
document.write("<h2>" + "OUT: " + "<br>" + out_3);
document.write("<h2>" + "OUT: " + "<br>" + out_4);

// Task # 15

document.write("<h4>" + "Task # 15 ");

var phone_companies = ["Apple" , "Samsung " , "Motorola" , "Nokia" , " Sony " , "Haier"];
document.write("<h2>" + "Phone Manufacturers Companies");
for(var i=0; i<=phone_companies.length -1; i++){

    document.write("<h2>" + phone_companies[i] + "<br>" );
}