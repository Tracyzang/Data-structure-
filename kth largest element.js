//quick seletced

//built-in function
var findKthLargest = function(nums, k) {
  nums.sort(function(a, b) {
    return a - b;
  });
  return nums[nums.length - k];
};

var findKthLargest = function(nums, k) {
  var actualIndex = nums.length - k;
  let index = partision(nums, 0, nums.length - 1);
  while (index !== actualIndex) {
    if (index < actualIndex) {
      index = partision(nums, index + 1, nums.length - 1);
    } else {
      index = partision(nums, 0, index - 1);
    }
  }
  return nums[index];
};

function partision(nums, left, right) {
  var pivot = nums[right];
  var slow = left - 1;
  for (let i = left; i < right; i++) {
    if (nums[i] <= pivot) {
      slow++;
      swap(nums, slow, i);
    }
  }
  // swap the pivot back to its place
  swap(nums, slow + 1, right);
  return slow + 1;
}

function swap(nums, m, n) {
  var temp = nums[m];
  nums[m] = nums[n];
  nums[n] = temp;
}
