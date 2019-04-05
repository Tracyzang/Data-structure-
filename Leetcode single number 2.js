var singleNumber = function(nums) {
  //hash map
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (!map[nums[i]]) map[nums[i]] = 1;
    else map[nums[i]]++;
  }

  for (let key in map) {
    if (map[key] === 1) return key;
  }
};
