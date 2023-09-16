function howManyPassingCars(cars) {
    if (cars.length > 100000) {
        return -1
    }

    let sum = 0
    const prefixSumCars = cars.map(car => {      
        if (car === 1) {
            sum += car
        }  
        return sum
    });

    let passingCars = 0

    for (let c=0; c < cars.length; c++) {
        if (cars[c] === 0) {
            passingCars += (prefixSumCars[prefixSumCars.length - 1] - prefixSumCars[c])
        }
    }

    return passingCars <= 1000000000 ? passingCars : -1
}

export default howManyPassingCars