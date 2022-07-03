// Time complexity: O(n²)
function bubbleSort(nums) {
    for(let i=0;i<nums.length;i++){
        let current = nums[i]
        for(let j=i+1;j<nums.length;j++){
            let min = Math.min(current, nums[j])
            let max = Math.max(current, nums[j])
            nums[i] = min
            current = min
            nums[j] = max
        }
    }
}