function maxOfTriplets(array) {
    if (array.length < 3) {
        return -1
    }
    array.sort((a,b) => {
        return a - b;
    })

    let maxValueOfTriplet = array[0] * array[1] * array[2];
    for (let i=0; i<array.length; i++) {
        let j = (i + 1) >= array.length ? i + 1 - array.length : i + 1
        let k = (i + 2) >= array.length ? i + 2 - array.length : i + 2

        const valueOfTriplet =  array[i] * array[j] * array[k]
        if (valueOfTriplet > maxValueOfTriplet) {
            maxValueOfTriplet = valueOfTriplet
        }
    }
    return maxValueOfTriplet;
}

export default maxOfTriplets