// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
}

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveFirstDriver(){
    drivers.shift()
}

function destructivelyRemoveLastDriver(){
    drivers.pop()
}

function appendDriver(name){
   let newArray = drivers.slice();
   newArray.push(name)
   return newArray
}

function prependDriver(name) {

    let newArray = drivers.slice();
    newArray.unshift(name)
    return newArray
    
}

function removeLastDriver() {
   let newArray = drivers.slice();
   newArray.pop()
   return newArray
}

function removeFirstDriver(name) {
    let newArray = drivers.slice();
    newArray.shift()
    return newArray
}
