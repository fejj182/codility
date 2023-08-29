function earliestLeaves(position, leaves) {
    let timeWhenPositionFound;

    for(let i=1; i <= position; i++) {
        if (timeWhenPositionFound !== -1) {
            timeWhenPositionFound = -1
            for(let l=0; l < leaves.length; l++) {
                if (leaves[l] === i) {
                    timeWhenPositionFound = l
                    break;
                }
            }
        }
    }
    return timeWhenPositionFound
}

module.exports = earliestLeaves