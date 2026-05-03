var username = prompt("Enter username:");
var password = prompt("Enter password:");

if (username === "admin" && password === "1234") {
    alert("Welcome Admin");
} 
else if (username === "teacher" && password === "1111") {
    alert("Welcome Teacher");
} 
else if (username === "student" && password === "2222") {
    alert("Welcome Student");
} 
else {
    alert("Invalid Credentials");
}
