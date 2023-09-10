function countSort(array, range) {
    const count = []

    for (let i=0; i < array.length; i++) { 
        if (!count[array[i]]) {
            count[array[i]] = 0
        }
        count[array[i]] += 1
    }

    let p = 0

    for (let i=0; i < range + 1; i++) {
        for (let j=0; j < count[i]; j++) {
            array[p] = i
            p += 1
        }
    }
    
    return array

}

module.exports = countSort