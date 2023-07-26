/**
 * canIOrderItem - A function that checks if a specified dish is available in stock.
 *
 * @param {string} dishName - The name of the dish to be checked
 * @param {Array<{[dish: string]: number}>} stockArray - An array of objects, each object having a dish name as the key and the stock as the value
 * @returns {boolean} - True if there is stock available for the specified dish, false otherwise
 *
 * Usage:
 * const stockArray = [{ "Pizza": 5 }, { "Burger": 3 }];
 * const result = canIOrderItem("Pizza", stockArray);
 * Output: true
 */
function canIOrderItem(dishName, stockArray) {
        for (let dish = 0; dish < stockArray.length; dish++) {
                if (stockArray[dish].hasOwnProperty(dishName)) {
                        return true;
                }
        }
        return false
}

function riceTrck(trackRice) {
        if (trackRice.Rice < 1){
                console.log(trackRice.Rice)
                trackRice.Rice += 5;
                console.log(trackRice.Rice)
        }
}

// Test cases
const stockArray = [{ "Pizza": 5 }, { "Burger": 3 }, {"Rice": 0}];
var trackRice = stockArray[2];
console.log(canIOrderItem("Burger", stockArray));