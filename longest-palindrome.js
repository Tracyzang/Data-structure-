var longestPalindrome = function(s) {
  const map = {};
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (map[s[i]] === 1) {
      map[s[i]] = 0;
      count += 2;
    } else {
      map[s[i]] = 1;
    }
  }

  if (count < s.length) {
    count += 1;
  }

  return count;
};
