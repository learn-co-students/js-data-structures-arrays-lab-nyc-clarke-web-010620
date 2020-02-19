// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
    drivers.push(name);
}

function destructivelyPrependDriver(name){
    drivers.unshift(name);
}

function destructivelyRemoveLastDriver(){
    drivers.pop();
}
function destructivelyRemoveFirstDriver(){
    drivers.shift();
}

function appendDriver(name){
    let a =[...drivers];
    a.push(name);
    return a;
}

function prependDriver(name){
    let a =[...drivers];
    a.unshift(name);
    return a;
}
function removeLastDriver(){
    let a =[...drivers];
    a.pop();
    return a;
}
function removeFirstDriver(){
    let a =[...drivers];
    a.shift();
   return a;
}