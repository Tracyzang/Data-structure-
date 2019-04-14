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
