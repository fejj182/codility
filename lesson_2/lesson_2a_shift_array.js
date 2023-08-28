function solution(array, rotations) {

    if (array.length === 0) {
        return array;
    }

    while(rotations--) {
        console.log({array});
        const last = array.pop()
    
        console.log({last, array});
        array.unshift(last)
    }

    return array
}

module.exports = solution