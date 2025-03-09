/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let k=0;
    let l=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i] === 0){
            k++;
        }else{
            nums[l] = nums[i]
            l++;
        }
    }     
    let c = nums.length-k
    for(let i=c;i<nums.length;i++){
        nums[i] = 0
    }
    return nums
};
