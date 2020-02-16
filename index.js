const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(driver) {
    drivers.push(driver)
}

function destructivelyPrependDriver(driver) {
    drivers.unshift(driver)
}

function destructivelyRemoveLastDriver(driver) {
    drivers.pop(driver)
}

function destructivelyRemoveFirstDriver(driver) {
    drivers.shift(driver)
}

function appendDriver(driver){    
    let newArray = [...drivers, driver]
    return newArray
}

function prependDriver(driver){    
    let newArray = [driver, ...drivers]
    return newArray
}

function removeLastDriver(){    
    return drivers.slice(0,2)
}

function removeFirstDriver(){    
    return drivers.slice(1,3)
}