function theHighestValue(arr) {
let highValue = 0;
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > highValue) {
        highValue = arr[i];
      }
    }
return highValue;
}
    module.exports = theHighestValue
