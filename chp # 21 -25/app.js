// ASSIGNMENT # 21-25
// CHAPTER # 21-25
// TASK # 01

document.write("<h4>" + "Task # 01");

var first_name = prompt("Enter the First name");
var last_name = prompt("Enter the Last name");
var full_name = first_name + last_name;
document.write("<h4>" + " السلام عليكم" + "<br>" + full_name);

// TASK # 02

document.write("<h4>" + "Task # 02");

var phone = prompt("Enter your favorite mobile model");
document.write("<h4>" + "My favorite phone is: " + phone);
document.write("<h4>" + "Length of string: " + phone.length);

// TASK # 03

document.write("<h4>" + "Task # 03");

var str = "Pakistani";
var indexxx = str.indexOf('n');
document.write("<h4>" + "String: " + str);
document.write("<h4>" + "index of 'n': " + indexxx);


// TASK # 04

document.write("<h4>" + "Task # 04");

var str_1 = "Hello World";
var lst_l = str_1.indexOf('l', 4);
document.write("<h4>" + "String: " + str_1);
document.write("<h4>" + "Last index of 'l': " + lst_l);

// TASK # 05

document.write("<h4>" + "Task # 05");

document.write("<h4>" + "String: " + str);
document.write("<h4>" + "Character at index 3: " + str[3]);


// TASK # 06

document.write("<h4>" + "Task # 06");
// var full = full.concat(first_name+last_name);
// document.write("<h4>" + "Using for concat method " +full );


// TASK # 07

document.write("<h4>" + "Task # 07");
var city_name = "Hyderabad";
document.write("<h4> " + "City: " + city_name);
document.write("<h4> " + "After replacement: " + city_name.replace("Hyderabad", "Islamabad"));

// TASK # 08

document.write("<h4>" + "Task # 08");

var message = "Ali and Sami are best friends. They play cricket and football together.";
document.write("<h4>" + message);

document.write("<h4> " + "After replacement 'And': " + message.replace(/and/g, "&",));


// TASK # 09

document.write("<h4>" + "Task # 09");

var str_val = "472";
document.write("<h4>" + "Value: " + str_val);
document.write("<h4>" + "Type: " + typeof (str_val));
var val = 472;
document.write("<h4>" + "Value: " + val);
document.write("<h4>" + "Type: " + typeof (val));

// TASK # 10

document.write("<h4>" + "Task # 10");

var user = prompt("enter any text");
document.write("<h4>" + "User input: " + user);
document.write("<h4>" + "Upper Case: " + user.toUpperCase());

// TASK # 11

document.write("<h4>" + "Task # 11");

var user_1 = prompt("enter any text");
var firstchar = user_1.slice(0, 1);
var othrschar = user_1.slice(1);
document.write("<h4>" + "User input: " + user_1);
document.write("<h4>" + "Title Case: " + firstchar.toUpperCase() + othrschar.toLowerCase());

// TASK # 12

document.write("<h4>" + "Task # 12");
var num = 35.36;
document.write("<h4>" + "Number: " + num);
document.write("<h4>" + "Result: " + num.toString().replace(".", ""));


// TASK # 13

document.write("<h4>" + "Task # 13");
var user_name = prompt("enter the user name");
for (var i = 0; i <= user_name.length - 1; i++) {
    if (user_name[i] === "@") {
        alert("Please enter a valid username \n ⬜ Prevent this page from creating additional dialogs.");
    }
    else if (user_name[i] === ",") {
        alert("Please enter a valid username \n ⬜ Prevent this page from creating additional dialogs.");
    }
    else if (user_name[i] === "!") {
        alert("Please enter a valid username \n ⬜ Prevent this page from creating additional dialogs.");
    }
    else if (user_name[i] === ".") {
        alert("Please enter a valid username \n ⬜ Prevent this page from creating additional dialogs.");
    }
}

// Task # 14

document.write("<h4>" + "Task # 14");

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Welcome to ABC bakery. What do you want to order\n sir/ma'am?    \n ⬜ Prevent this page from creating additional dialogs.");
search = search.toLowerCase();

for (var i = 0; i <= A.length - 1; i++) {
    if (search === A[i]) {
        alert(search + " is available at index " + [i] + " in our bakery");
        break;
    }
    else {
        alert("We are sorry. " + search + " is not available in our bakery");
        break;
    }
}



// Task # 15

document.write("<h4>" + "Task # 15");

// var password = prompt("enter the password");

// // a
// for(var i=0; i < 10; i++){
//     for(var j=a; j<=z; j++){
//         if(password.indexOf() !== [j] ){
//             alert("please enter alphabets and numbers");
//         }
//     }
//     if (password[0] == [i]) {
//         alert("Please can not begin with a number \nPlease enter a valid password");
//     }
//     if(password.length < 6){
//         alert("Please enter at least 6 characters");
//     }
// }

// b
// for (var i = 0; i < 10; i++) {
    //     if (password[0] == [i]) {
//         alert("Please can not begin with a number \nPlease enter a valid password");
//     }
// }
// c
// if(password.length < 6){
//     alert("Please enter at least 6 characters");
// }

// Task # 16

document.write("<h4>" + "Task # 16");

var unii = "University of Karachi";
for(var i=0; i<=unii.length-1; i++){
    document.write("<h4>" + unii[i] + "<br>");
}

// Task # 17

document.write("<h4>" + "Task # 17");

var user_input = prompt("");
document.write("<h4>" + "User input: " + user_input);
document.write("<h4>" + "Last character of input: " + user_input.slice(-1,));

// Task # 18

document.write("<h4>" + "Task # 18");
var text_1 = "The quick brown fox jumps over the lazy dog";
document.write("<h4>" + "Text: " + text_1);
text_1 = text_1.toLowerCase();
var count = 0;
if(text_1  "the"){
    count+=1;
}
document.write("<h4>" + "There are " + count + " occurrence(s) of word 'the'" + "<br>" + text_1);
