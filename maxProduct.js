var maxProduct = function(nums) {
  // write your code here
  if (nums == null || nums.length == 0) {
    return 0;
  }
  let minPre = nums[0],
    maxPre = nums[0];
  let max = nums[0],
    min = nums[0];
  let res = nums[0];
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(nums[i], Math.max(maxPre * nums[i], minPre * nums[i]));
    min = Math.min(nums[i], Math.min(maxPre * nums[i], minPre * nums[i]));
    res = Math.max(res, max);
    maxPre = max;
    minPre = min;
  }
  return res;
};
