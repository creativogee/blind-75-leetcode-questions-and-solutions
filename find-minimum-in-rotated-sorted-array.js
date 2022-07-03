var findMin = function(nums) {
    const sorted = nums.sort((a, b) => a - b)
    return sorted[0]
};