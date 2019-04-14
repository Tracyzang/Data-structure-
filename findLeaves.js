var findLeaves = function(root) {
  var res = [];
  function helper(root) {
    if (!root) return 0;
    var leftDepth = helper(root.left);
    var rightDepth = helper(root.right);
    var level = Math.max(leftDepth, rightDepth) + 1;
    res[level] = res[level] || [];
    res[level].push(root.val);
    return level;
  }

  helper(root);
  return res;
};

function minWindow(s, t) {
  let map = {};
  let count = t.length;
  let head = 0;
  let tail = -1;
  let minStart = 0;
  let minLen = Infinity;
  let ans = "";

  //Iterate through t and create a hashmap entry for each.
  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]]) map[t[i]] = 1;
    else map[t[i]] = map[t[i]] + 1;
  }

  //To find all substrings we will use a sliding window which will run until the tail is less than the length of the input.
  while (tail < s.length) {
    //If an element of the substring is found and we have not encountered the required amount to satisfy the require of a FULL substring (it's value is > 0), let's decrement count.
    if (map[s[tail]] > 0) {
      count--;
    }
    //Let's keep track of what items we have visited in our hashmap, as soon as we visit something we will decrement it, if it does not exist in the map we will create it and set it's value to -1.
    if (!map[s[tail]]) map[s[tail]] = -1;
    else map[s[tail]]--;

    //Move the tail to the next index.
    tail++;

    //When we find ALL elements in a subarray we can now figure out it's length and do some cleanup.
    while (count == 0) {
      //If this subarray is the smallest so far let's set two variables
      //minStart is used to keep track of the start of the sub-array
      //minLen is used to keep track of the length
      if (tail - head < minEnd) {
        minStart = head;
        minLen = tail - head;
      }

      //While we decrement the value of an item when we encounter it, when we clean up we will increment it.
      map[s[head]]++;

      //If we ever encounter an item with a value greater than 0 we are now missing part of our subarray so we will now break out of this loop and try to find another
      if (map[s[head]] > 0) count++;
      //Move the head to the next index.
      head++;
    }
  }
  if (minEnd != Infinity) {
    for (let i = 0; i < minLen; i++) {
      ans += s[i + minStart];
    }
    return ans;
  } else return "";
}
