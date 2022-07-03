var maxProduct = function(nums) {
    let min = nums[0]
    let max = nums[0]
    let global = nums[0]
    
    if(nums.length === 1) return nums[0]
    
    for(let i=1; i<nums.length; i++){
        const potentialMax = max * nums[i]
        max = Math.max(potentialMax, min * nums[i], nums[i])
        min = Math.min(potentialMax, min * nums[i], nums[i])
        global = Math.max(max, global)
    }
    
    return global
};