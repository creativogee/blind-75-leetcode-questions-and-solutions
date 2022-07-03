// solution 1 :  recursion
var maxProfit = function(prices) {
    function getProfit(i, min, profit){
        if(i === prices.length) return profit
        if(min > prices[i]) {
            return getProfit(i+1, prices[i], profit)
        } else {
            return getProfit(i+1, min, Math.max(prices[i] - min,  profit))
        }
    }
    
    return getProfit(0, prices[0], 0)
};

// solution 2 :  iterative
var maxProfit = function(prices) {
    let min = prices[0]
    let profit = 0
    for(let i = 0; i < prices.length; i++) {
        if(min > prices[i]) {
            min = prices[i]
        } else {
            profit = Math.max(prices[i] - min,  profit)
        }
    }
    return profit
};