// Kadane's algorithm
// says that the maximum subarray at each element is either 
// the current element itself, or the current element 
// plus the maximum subarray ending at the previous element.

// 0(n)
var maxSubArray = function(nums) {
    let sum = [nums[0]]
    
    for(let i = 1; i < nums.length; i++) {
        sum.push(Math.max(nums[i], nums[i] + sum.at(-1)))
    }

    return sum.sort((a,b) => a - b).at(-1)
};