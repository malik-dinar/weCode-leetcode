/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const myMap = new Map();
    const mySet = new Set();
    for(let i=0;i<arr.length;i++){
        if(myMap.has(arr[i])){
            let val = myMap.get(arr[i]);
            val++;
            myMap.set(arr[i], val);
        }else{
            myMap.set(arr[i], 1);
        }
    }
    
    for (let value of myMap.values()) {
        if(mySet.has(value)){
            return false;
        }else{
            mySet.add(value);
        }
    }
    return true
};