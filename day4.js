/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {
    let max = 0;
    let current = 0;
    for(let i=0;i<gain.length;i++){
        current = current + gain[i];
        if(current > max){
            max = current
        }
    }
    return max
};