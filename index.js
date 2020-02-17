

const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyAppendDriver(name)
    {drivers.push(name);}

function destructivelyPrependDriver(name)
    {drivers.unshift(name);}

function destructivelyRemoveLastDriver()
    {drivers.pop();}

function destructivelyRemoveFirstDriver()
    {drivers.shift();}

    //appends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function appendDriver(name)
    { return [...drivers, name];}


    //prepends a driver to the drivers array and returns a new array, leaving the drivers array unchanged
function prependDriver(name)
    { return [name, ...drivers];}


    //removes the last driver in the drivers array and returns a new array, leaving the drivers array unchanged
function removeLastDriver()
    { return drivers.slice(0, -1);}


    //removes the first driver from the drivers array and returns a new array, leaving the drivers array unchanged
function removeFirstDriver()
    { return drivers.slice(1);}