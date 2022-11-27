// Code your solution in this file!
function distanceFromHqInBlocks(pickupLocation) {
    return Math.abs(42 - pickupLocation) 
}

function distanceFromHqInFeet(pickupLocation) {
    return distanceFromHqInBlocks(pickupLocation) * 264
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264
}

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0
    }   else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) < 2000) {
            return (0.02 * (distanceTravelledInFeet(start, destination) - 400))
        }   else if (distanceTravelledInFeet(start, destination) >= 2000 && distanceTravelledInFeet(start, destination) < 2500) {
                return 25
            }   else {
                    return 'cannot travel that far'
                }
}