// Task 1
alert("Welcome to Our Website");

// Task 2
alert("Error! Please Enter a valid password");

// Task 3
alert("Welcome to JS Land...\nHappy Coding!\nAnother line");

// Task 4
alert("First message");
alert("Second message");
alert("Third message");

// Task 7, 8, 9
let username;
let myName = "Shazia Bashir";
let message = "Hello World";
alert(message);

// Task 10
let studentName = "Shazia Bashir";
let studentAge = 45;
let studentCourse = "Web Development";
alert("Name: " + studentName);
alert("Age: " + studentAge);
alert("Course: " + studentCourse);

// Task 11
let email = "shaziabashir604@gmail.com";
alert("My email address is " + email);

// Task 12, 13
let specialString = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
alert(specialString);

// Task 14
let age = 45;
alert("I am " + age + " years old");

// Task 15
let visitCount = 5;
document.getElementById('task15').innerText = "You have visited this site " + visitCount + " times";

// Task 16
let birthYear = 1979;
document.getElementById('task16').innerHTML = "My birth year is " + birthYear  ;

// Task 17
let visitorName = "John Doe";
let productTitle = "T-shirt";
let quantity = 5;
document.getElementById('task17').innerText = visitorName + " ordered " + quantity + " " + productTitle + "(s) on XYZ Clothing store";

// Task 18, 19
let var1, var2, var3;
let myVariable, _myVariable, $myVariable, myVariable123, variable;

// Task 20
let task20Content = "<h1>Rules for naming JS variables</h1>";
task20Content += "<ol>";
task20Content += "<li>Variable names can only contain letters, digits, dollar signs, and underscores. For example $my_1stVariable</li>";
task20Content += "<li>Variables must begin with a letter, dollar sign, or underscore. For example $name, _name or name</li>";
task20Content += "<li>Variable names are case sensitive</li>";
task20Content += "<li>Variable names should not be JS keywords</li>";
task20Content += "</ol>";
document.getElementById('task20').innerHTML = task20Content;

// Task 21, 22
let num1 = 10;
let num2 = 20;
let sum = num1 + num2;
let sub = num1 - num2;
let mul = num1 * num2;
let div = num1 / num2;
let mod = num1 % num2;
let task21and22Content = "Sum: " + sum + "<br>";
task21and22Content += "Subtraction: " + sub + "<br>";
task21and22Content += "Multiplication: " + mul + "<br>";
task21and22Content += "Division: " + div + "<br>";
task21and22Content += "Modulus: " + mod + "<br>";
document.getElementById('task21and22').innerHTML = task21and22Content;

// Task 23
let x;
let task23Content = "Value after variable declaration is: " + x + "<br>";
x = 5;
task23Content += "Initial value: " + x + "<br>";
x++;
task23Content += "Value after increment is: " + x + "<br>";
x += 7;
task23Content += "Value after addition is: " + x + "<br>";
x--;
task23Content += "Value after decrement is: " + x + "<br>";
task23Content += "The remainder is: " + x % 3 + "<br>";
document.getElementById('task23').innerHTML = task23Content;

// Task 24
let ticketPrice = 600;
let totalCost = ticketPrice * 5;
document.getElementById('task24').innerText = "Total cost to buy 5 tickets is: " + totalCost + " PKR";

// Task 25
let num = 5;
let task25Content = "<h4>Multiplication table of " + num + ":</h4>";
for (let i = 1; i <= 10; i++) {
    task25Content += num + " x " + i + " = " + num * i + "<br>";
}
document.getElementById('task25').innerHTML = task25Content;
