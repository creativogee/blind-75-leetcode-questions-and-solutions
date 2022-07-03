//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:
// Input: nums = [1,2,3,1]
// Output: true

// Example 2:
// Input: nums = [1,2,3,4]
// Output: false

// Example 3:
// Input: nums = [1,1,1,3,3,4,3,2,4,2]
// Output: true


// solution 1 : 61 ms
var containsDuplicate = function(nums) {
    const unique = [...new Set(nums)]
    return unique.length < nums.length ? true : false
};