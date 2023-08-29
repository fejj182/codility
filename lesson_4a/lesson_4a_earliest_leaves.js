function earliestLeaves(position, leaves) {
    let timeWhenPositionFound = -1;
    let found

    for(let i=1; i <= position; i++) {
        if (found !== false) {
            found = false
            for(let l=0; l < leaves.length; l++) {
                if (leaves[l] === i) {
                    found = true
                    if (l > timeWhenPositionFound) {
                        timeWhenPositionFound = l
                    }
                    break;
                }
            }
        }
    }
    return found ? timeWhenPositionFound : -1
}

module.exports = earliestLeaves