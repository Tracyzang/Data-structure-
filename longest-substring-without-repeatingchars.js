var lengthOfLongestSubstring = function(s) {
  //using sliding window;
  //abcabcbb
  var map = {};
  var ans = 0;
  var i = 0;
  var j = 0;

  while (j < s.length) {
    if (map[s[j]]) {
      i = Math.max(i, map[s[j]]);
    }
    ans = Math.max(ans, j - i + 1);
    map[s[j]] = j + 1;
    j++;
  }
  return ans;
};
