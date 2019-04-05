var intersection = function(nums1, nums2) {
  var res = [];
  var map = {};
  for (var i = 0; i < nums1.length; i++) {
    if (!map[nums1[i]]) map[nums1[i]] = 1;
    else map[nums1[i]]++;
  }

  for (var i = 0; i < nums2.length; i++) {
    if (map[nums2[i]]) res.push(nums2[i]);
  }

  //delete same number in res;
  res.sort(function(a, b) {
    return a - b;
  });

  for (var i = 0; i < res.length; i++) {
    while (res[i] === res[i + 1]) {
      res.splice(i, 1);
    }
  }

  return res;
};

var intersection = function(nums1, nums2) {
  //two pointers
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  var i = 0;
  var j = 0;
  var index = 0;
  var res = [];
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] === nums2[j]) {
      if (index === 0 || res[index - 1] !== nums1[i]) {
        res[index] = nums1[i];
        index++;
      }
      i++;
      j++;
    } else if (nums1[i] < nums2[j]) {
      i++;
    } else {
      j++;
    }
  }

  return res;
};
