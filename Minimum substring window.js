var minWindow = function(s, t) {
  //sliding window
  //right => expand; left => contract
  if (!s.length || !t.length) return "";
  var ans = "";
  var left = 0;
  var right = 0;
  var map = {};
  var count = t.length;
  let minLen = Infinity;
  let minStart = 0;

  //create a map contains char in t;
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) map[t[i]] = 1;
    else map[t[i]]++;
  }

  while (right < s.length) {
    if (map[s[right]] > 0) count--;
    if (!map[s[right]]) map[s[right]] = -1;
    else map[s[right]]--;
    right++;

    while (count === 0) {
      if (right - left < minLen) {
        minStart = left;
        minLen = right - left;
      }
      map[s[left]]++;
      if (map[s[left]] > 0) count++;
      left++;
    }
  }

  if (minLen !== Infinity) {
    for (let i = 0; i < minLen; i++) {
      ans += s[i + minStart];
    }
    return ans;
  } else return "";
};
