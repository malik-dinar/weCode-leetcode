/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let maxSum = 0;
    let maxAlter = 0;
    for(let i=0;i<k;i++){
        maxSum = maxSum + nums[i];
    }
    maxAlter = maxSum
    for(let i=k;i<nums.length;i++){
        maxAlter = maxAlter + (nums[i]-nums[i-k])
        if(maxSum < maxAlter){
            maxSum = maxAlter
        }
    } 
    return maxSum/k
};