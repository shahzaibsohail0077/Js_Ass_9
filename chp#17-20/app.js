// ASSIGNMENT # 17-20
// CHAPTER # 17-20
// Task # 01

document.write("<h4>" + "Task # 01");

var multi_array = [[]]

// Task # 02

document.write("<h4>" + "Task # 02" + "<br>");

var arr_num = [[0, 1, 2, 3], [1, 0, 1, 2], [2, 1, 0, 1]];
document.write("<h2>" + arr_num[0] + "<br>" + arr_num[1] + "<br>" + arr_num[2]);

// Task # 03

document.write("<h4>" + "Task # 03");
for (var i = 1; i <= 10; i++) {
    document.write("<h2>" + [i]);
}
// Task # 04

document.write("<h4>" + "Task # 04");

var num = +prompt("enter the multiplication number");
var len = +prompt("enter tha table length");

document.write("<h2>" + "Multiplication Table of " + num);
document.write("<h2>" + "Length " + len);

for (var i = 1; i <= len; i++) {

    document.write("<h2>" + num + " x " + [i] + " = " + num * i);
}

// Task # 05

document.write("<h4>" + "Task # 05");

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var j = 0; j <= fruits.length - 1; j++) {
    document.write("<h2>" + fruits[j] + "<br>");
}
document.write("<br>")
for (var i = 0; i <= fruits.length - 1; i++) {
    document.write("<h2>" + "Element at index " + [i] + " is " + fruits[i]);
}

// Task # 06

document.write("<h4>" + "Task # 06");

document.write("<h2>" + "Counting: " + "<br>");

for (var i = 1; i <= 15; i++) {
    document.write(i + " , ");
}
document.write("<h2>" + "Reverse Counting: " + "<br>");

for (var i = 10; i >= 1; i--) {
    document.write(i + " , ");
}
document.write("<h2>" + "Even: " + "<br>");

for (var i = 0; i <= 20; i += 2) {
    document.write(i + " , ");
}
document.write("<h2>" + "Odd: " + "<br>");

for (var i = 1; i <= 20; i += 2) {
    document.write(i + " , ");
}
document.write("<h2>" + "Series: " + "<br>");

for (var i = 2; i <= 20; i += 2) {
    document.write(i + "k, ");
}

// Task # 07

document.write("<h4>" + "Task # 07");

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("What do you want in ABC bakery");

for (var i = 0; i <= A.length - 1; i++) {
    if (search === A[i]) {
        alert(search + " is available at index " + [i] + " in our bakery");
    }

}
if(search !== true) {
    alert(search + " is not available at index " + " in our bakery");
}




// Task # 08

document.write("<h4>" + "Task # 08");

var A_num = [24, 53, 78, 91, 12];
var small = 0;
document.write("<h2>" + "Array items: " + A_num);
for (var i = 0; i <= A_num.length - 1; i++) {
    if (A_num[i] > small) {
        small = A_num[i];
    }
}
document.write("<h4>" + "The largest number is: " + small);

// Task # 09

document.write("<h4>" + "Task # 09");

var B_num = [24, 53, 78, 91, 12];
var larger = 1000000000;
document.write("<h2>" + "Array items: " + B_num);
for (var i = 0; i <= B_num.length - 1; i++) {
    if (B_num[i] < small) {
        larger = B_num[i];
    }
}
document.write("<h4>" + "The smaller number is: " + larger);


// Task # 10

document.write("<h4>" + "Task # 10");
document.write("<h4>" + "Multiple of 5" + "<br>");

for (var i = 5; i <= 100; i += 5) {
    document.write(i + " , ")
}


