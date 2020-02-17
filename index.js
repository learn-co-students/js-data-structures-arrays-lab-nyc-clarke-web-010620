// Write your solution here!
let drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name){
    drivers.push(name)
};

function destructivelyPrependDriver(name){
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver(name){
    drivers.pop()
};

function destructivelyRemoveFirstDriver(name){
    drivers.shift()
}

function appendDriver(name){
    return [...drivers, name]
};

function prependDriver(name){
    return [name, ...drivers]
}

function removeFirstDriver(){
    return drivers.slice(1)
};

function removeLastDriver(){
    return drivers.slice(0, -1)
}