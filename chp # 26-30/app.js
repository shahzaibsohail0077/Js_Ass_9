// ASSIGNMENT # 26-30
// CHAPTER # 26-30
// Task # 01

document.write("<h4>" + "Task # 01");

var num = +prompt("enter the positive number");
// a
document.write("<h4>" + "Number: " + num);
// b
document.write("<h4>" + "Round off value: " + Math.round(num));
// c
document.write("<h4>" + "Floor value: " + Math.floor(num));
// d
document.write("<h4>" + "Ceil value: " + Math.ceil(num));


// Task # 02

document.write("<h4>" + "Task # 02");

var neg_num = +prompt("enter the positive number");
// a
document.write("<h4>" + "Number: " + neg_num);
// b
document.write("<h4>" + "Round off value: " + Math.round(neg_num));
// c
document.write("<h4>" + "Floor value: " + Math.floor(neg_num));
// d
document.write("<h4>" + "Ceil value: " + Math.ceil(neg_num));

// Task # 03

document.write("<h4>" + "Task # 03");

var value = +prompt("enter the value");
if (-value === value) {
    pos_value = value * -1;
    document.write("<h4>" + "The absolute if value of " + value + " is " + pos_value);
}
else {
    document.write("<h4>" + "The absolute else value of " + value + " is " + value);
}


// Task # 04

document.write("<h4>" + "Task # 04");

var randomvalue = Math.random();
document.write("<h4>" + "random dice value: " + Math.floor(randomvalue * 6 + 1));


// Task # 05

document.write("<h4>" + "Task # 05");

var randomvalue_1 = Math.random() * 3;
randomvalue_1 = Math.floor(randomvalue_1);
if (randomvalue_1 === 2) {
    document.write("<h4>" + "2 random coin value: Head");
}
else {
    document.write("<h4>" + "1 random coin value: Tails");
}

// Task # 06

document.write("<h4>" + "Task # 06");

var randomvalue_2 = Math.random() * 102;
randomvalue_2 = Math.floor(randomvalue_2);
document.write("<h4>" + "Random number between 1 to 100: " + randomvalue_2);

// Task # 07

document.write("<h4>" + "Task # 07");
var weight = +prompt("enter your weight in kg");
document.write("<h4>" + "The weight of user is " + weight + " kilograms");

// Task # 08

document.write("<h4>" + "Task # 08");

var secret = +prompt("enter the number between 1 to 10");
var randomvalue_3 = Math.random() * 12;
randomvalue_3 = Math.floor(randomvalue_3);
if(secret === randomvalue_3){
    alert("You win");
}
else(
    alert("Try again!\n⬜ Prevent this page from creating additional dialogs.");
)