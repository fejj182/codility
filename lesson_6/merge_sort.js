function mergeSort(array) {
    if (array.length === 1) {
        return array
    }

    let left = []
    let right = []

    for (let i=0; i < array.length; i++) {
        if (i < (array.length / 2)) {
            left.push(array[i])
        } else {
            right.push(array[i])
        }
    }

    left = mergeSort(left)
    right = mergeSort(right)
    
    return merge(left, right)
}

function merge(left, right) {
    const result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            const firstLeft = left.shift()
            result.push(firstLeft)
        } else {
            const firstRight = right.shift()
            result.push(firstRight)
        }
    }

    while (left.length > 0) {
        const firstLeft = left.shift() 
        result.push(firstLeft)
    } 
    while (right.length > 0) {
        const firstRight = right.shift() 
        result.push(firstRight)
    }
    return result
}

export default mergeSort