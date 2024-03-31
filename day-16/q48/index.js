var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Two arrays containing different prices
var prices1 = [2000, 3000, 4000];
var prices2 = [4500, 2500, 3500];
// Copy the 2 arrays in another array
var allPrices = __spreadArray(__spreadArray([], prices1, true), prices2, true);
// Sort the array in ascending order
allPrices.sort();
console.log(allPrices); // Log the result
