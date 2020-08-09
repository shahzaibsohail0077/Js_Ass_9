// Assigment # 06-09;
// Chapter # 06-09;

// Task # 01
document.write("<h4>"+"Task # 01");

var num = +prompt("enter the number");
document.write("<h4>" + "Result: " + "<br>" + "The value of a is: " + num + "<br>");
document.write("<h4>" + "................................................................" + "<br>");

document.write("<h4>" + "The value of ++a is: " + ++num  + "<br>" + "Now value of a is: " + num + "<br>");
document.write("<h4>" + "The value of a++ is: " + num++  + "<br>" + "Now value of a is: " + a + "<br>");

document.write("<h4>" + "The value of --a is: " + --num  + "<br>" + "Now value of a is: " + num + "<br>");
document.write("<h4>" + "The value of a-- is: " + num--  + "<br>" + "Now value of a is: " + num + "<br>");

// Task # 02

document.write("<h4>"+"Task # 02");

var a = 2;
var b = 1;
var result   = --a - --b + ++b + b--;
--a;
--a - --b;
--a - --b + ++b;
--a - --b + ++b + b--;
document.write("<h4>" + "a is: " + a + "<br>");
document.write("<h4>" + "b is: " + b + "<br>");
document.write("<h4>" + "result is: " + result + "<br>");

// Task # 03

document.write("<h4>"+"Task # 03");

var name = prompt("user name");
document.write("<h4>" +name + "<br>"  +"السلام عليكم " +"<br>"+"<br>")

// Task # 04

document.write("<h4>"+"Task # 04");

var input_num = +prompt("Enter the number");
if (input_num > 0){
    for(var i=1; i<=10; i++){
        document.write("<h4>" + input_num + " + " + [i] + "=" + input_num*[i] + "<br>");
    }
}
else{
    
    for(var i=1; i<=10; i++){
        document.write("<h4>" + "5 + " + [i] + "=" + 5*[i] + "<br>");
    }
}


// Task # 05

document.write("<h4>"+"Task # 54");

// a
var sub1 = prompt("Enter the 1st subject name");
var sub2 = prompt("Enter the 2nd subject name");
var sub3 = prompt("Enter the 3rd subject name");

// b
var total_marks = 100;

// c

var obt_marks_1st_sub = +prompt("enter the 1st subject obtain marks");

// d

var obt_marks_2nd_sub = +prompt("enter the 2nd subject obtain marks");
var obt_marks_3rd_sub = +prompt("enter the 3rd subject obtain marks");

// e

var percentage_1 = (obt_marks_1st_sub/total_marks)*100; 
var percentage_2 = (obt_marks_2nd_sub/total_marks)*100; 
var percentage_2 = (obt_marks_3rd_sub/total_marks)*100; 
var sum_total = total_marks*3;
var sum_obt = obt_marks_1st_sub + obt_marks_2nd_sub + obt_marks_3rd_sub;
var total_percntage = (sum_obt/sum_total)*100;

document.write("<b>" + "<h2>" + "Subject Total Marks Obtained Marks Percentage");
document.write("<h4>" + sub1 + " " + " " + total_marks + " " + " "  + obt_marks_1st_sub + " " + " "  + percentage_1 + "%");
document.write("<h4>" + sub2 + " " + " "  + total_marks + " " + " "  + obt_marks_1st_sub + " " + " "  + percentage_1 + "%");
document.write("<h4>" + sub3 + " " + " "  + total_marks + " " + " "  + obt_marks_1st_sub + " " + " "  + percentage_1 + "%");
document.write("<h4>" + " " + " " + " " + " "  + sum_total + " " + " "  + sum_obt + " " + " " + " "   + total_percntage + "%");

