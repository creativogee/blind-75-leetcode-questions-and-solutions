// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]


// solution 1 (failed) : nonperformant
const productExceptSelf = function(nums) {
    const answer = []
    function compute(index, nums) {
        const butIndex =  nums.filter((num, idx) => idx !== index)
        const ans = butIndex.reduce((curr, prev) => {
           return curr * prev 
        }, 1)
        
        answer.push(ans)
        if (index === nums.length - 1) return answer
        return compute(index + 1, nums)
    }
    
    return compute(0, nums)
};

// solution 2 (passed): recursion : performant 144 ms
var productExceptSelf2 = function(nums) {
    const answer = []
    function compute(index, nums, memo) {
        if (index > nums.length - 1) return answer
        if(memo[nums[index]]) {
            answer.push(memo[nums[index]])
            return compute(index + 1, nums, memo)
        }
        const butIndex = [...nums]
        butIndex.splice(index, 1)
        const ans = butIndex.reduce((curr, prev) => {
           return curr * prev 
        }, 1)
        
        memo[nums[index]] = ans
        answer.push(ans)
        return compute(index + 1, nums, memo)
    }
    
    return compute(0, nums, {})
};