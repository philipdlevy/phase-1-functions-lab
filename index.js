



function distanceFromHqInBlocks(someValue) {
    console.log(someValue)
    const hq = 42
    return Math.abs(hq - someValue);
};

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue); 
        return Math.abs(42 - someValue) * 264
    
};

function distanceTravelledInFeet(start, destination) {
    return Math.abs(start - destination) * 264
};

function calculatesFarePrice(start, destination) {
   const numFeet = distanceTravelledInFeet(start, destination)
    if (numFeet < 400) {
        return 0
    } else if (numFeet > 400 && numFeet < 2000) {
        return (numFeet - 400) * .02
    } else if (numFeet > 2000 && numFeet < 2500) {
        return 25
    } else {
        return "cannot travel that far"
    }
};



