// best time to sell stock
function maxProfit(prices) {
    // two pointer
    // if right pointer > left pointer, shift left and right 1 to the right
    let left = 0, right = 1
    let maxProfit = 0
    while (right < prices.length) {
        maxProfit = Math.max(maxProfit, prices[right] - prices[left])
        if (prices[right] < prices[left]) {
            left = right
        }
        right++
    }
    return maxProfit
};

// best time to sell stock II
function maxProfit(prices) {
    let profit = 0

    let left = 0, right = 1

    while (right < prices.length) {
        if (prices[left] < prices[right]) {
            profit += prices[right] - prices[left]
        }
        left = right
        right++
    }
    return profit
};