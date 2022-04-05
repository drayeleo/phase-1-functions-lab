// Code your solution in this file!

const blockLength = 264; //feet
const scuberHq = 42;

function distanceFromHqInBlocks(someValue) {
    //returns the number of blocks given a value
    return Math.abs(someValue - scuberHq);
}

function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * blockLength;
    // call the distanceFromHqInBlocks function from inside the distanceFromHqInFeet function,
    // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks

    // the return value of distanceFromHqInBlocks can then be used to calculate feet
}

function distanceTravelledInFeet(start, destination) {
    //returns the number of feet traveled
    return Math.abs(start - destination) * blockLength;
}

function calculatesFarePrice(start, destination) {
    //returns the fare for the customer
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;

    switch (true) {
        case distance <= 400 : 
        break;
        case distance > 400 && distance <= 2000 : fare = (distance - 400) * 0.02;
        break;
        case distance > 2000 && distance <= 2500 : fare = 25;
        break;
        case distance > 2500 : fare = 'cannot travel that far';
        break; 
    }

    return fare;
}