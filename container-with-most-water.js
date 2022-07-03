/**
 * @param {number[]} height
 * @return {number}
 */
// i = 1, 2, 3, 4, 5, 6, 7, 8
// width = 8, 7, 6, 5, 4, 3, 2, 1
// maxVolume = 0, 8, 49, 49, 49, 49, 49, 49
// rightHeight = 7, 7, 3, 8, 4, 5, 2, 6
// leftHeight = 1, 8, 8, 8, 8, 8, 8, 8
// lowestHeight = 1, 7, 3, 8, 4, 5, 2, 6


// [1,8,6,2,5,4,8,3,7]
var maxArea = function(height) {
    let maxArea = 0
    let j = 0
    let k = height.length - 1
    
    for(let i = 1; i < height.length; i++){
        let lowestHeight = Math.min(height[j], height[k])
        maxArea = Math.max((lowestHeight * (height.length - i)), maxArea)
        
        if(height[k] === lowestHeight) {
            k--
        } else {
            j++
        }
    }
    return maxArea
};