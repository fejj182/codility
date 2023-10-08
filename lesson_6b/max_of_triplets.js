function maxOfTriplets(array) {
    if (array.length < 3) {
        return -1
    }
    array.sort((a,b) => {
        return a - b;
    })

    return Math.max(array[0]*array[1]*array[array.length - 1], array[array.length-3]*array[array.length-2]*array[array.length-1])
}

export default maxOfTriplets