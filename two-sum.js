// solution 1 : recursive : 95ms
var twoSum = function(nums, target) {
    function addTwo(index, memo) {
        const needed =  target - nums[index]
        const index2 = memo[needed]
        if (index2 >= 0) {
            return [index, index2]
        } else {
            memo[nums[index]] =  index
            return addTwo(index + 1, memo)
        }
    }
    return addTwo(0, {})
};

// solution 2: for loop iteration
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length -1; i++) {
        let j
        const other = target - nums[i]
        j = nums.indexOf(other)
        if(j >= 0 && j != i) {
          return [i, j]  
        }
                
        if(j >= 0 && j == i) {
            const arr = nums.slice(j+1)
            j = arr.indexOf(other)
            if(j>=0) {
            return [i, j+i+1]      
            }
        }
    }
};