const threeSum = function(numbers) {
  // write your code here
  //sort the numbers
  var res = [];
  if (!numbers || numbers.length < 3) return res;
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++) {
    if (i > 0 && numbers[i] === numbers[i - 1]) continue;
    var left = i + 1;
    var right = numbers.length - 1;

    while (left < right) {
      var sum = numbers[i] + numbers[left] + numbers[right];
      if (sum === 0) {
        res.push([numbers[i], numbers[left], numbers[right]]);
        //no duplicate
        while (left < right && numbers[left] === numbers[left + 1]) left++;
        while (left < right && numbers[right] === numbers[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) right--;
      else left++;
    }
  }

  return res;
};
