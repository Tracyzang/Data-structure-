var singleNumber = function(nums) {
  //hash map
  var hash = {};
  for (var i = 0; i < nums.length; i++) {
    if (!hash[nums[i]]) hash[nums[i]] = 1;
    else hash[nums[i]]++;
  }

  for (let key in hash) {
    if (hash[key] === 1) return key;
  }
};

var singleNumber = function(nums) {
  //bitwise
  let r = 0;
  for (let i = 0; i < nums.length; i++) {
    r = r ^ nums[i];
  }
  return r;
};
