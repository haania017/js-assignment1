var name=prompt('Enter your name:')
var age = prompt('Enter your age: ')
var city = prompt('Enter your city: ')

alert(`Hello ${name}, You are ${age} years old. You live in ${city}.`);

if (age >= 18){
    alert("You are an adult")
}
else{
    alert("You are a minor")
}