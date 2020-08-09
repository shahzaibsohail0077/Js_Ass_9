// ASSIGNMENT # 35-38
// CHAPTER # 35-38
// Task # 01

document.write("<h4>" + "Task # 01" + "<br>");

function Time (){
    var now  = new Date();
    now.toString();
    document.write(now);
    return now;
}

Time();

// Task # 02

document.write("<h4>" + "Task # 02" + "<br>");

function UserName(firstname,lastname){
    firstname = prompt("enter your first name");
    lastname = prompt("enter your last name");
    document.write("Hello" +firstname+" "+lastname);
}

UserName();

// Task # 03

document.write("<h4>" + "Task # 03" + "<br>");


function Add(a,b){
    a = +prompt("enter the num");
    b = +prompt("enter the num");
    sum = a+b;
    document.write(sum);
    return sum;
}

Add();

// Task # 04

document.write("<h4>" + "Task # 04" + "<br>");

function Cal(num1,num2,operator){
    num1 = +prompt("enter the num1");
    num2 = +prompt("enter the num2");
    operator = prompt("enter the oparator");
    if(operator === "*"){
        result = num1*num2;
        document.write(result);
        // return result;
    }
    else if(operator === "+"){
        result = num1+num2;
        document.write(result);
        // return result;
    }
    else if(operator === "-"){
        result = num1-num2;
        document.write(result);
        // return result;
    }
    else if(operator === "/"){
        result = num1/num2;
        document.write(result);
        // return result;
    }
    return result;
}

Cal();

// Task # 05

document.write("<h4>" + "Task # 05" + "<br>");

function Square(a){
    a =+prompt("enter the squaring num");
    sq = a*a;
    document.write(sq);
    return sq;
}

Square();
