var sortedArrayToBST = function(nums) {
  if (!nums.length) return null;
  var mid = Math.floor(nums.length / 2);
  var root = new TreeNode(nums[mid]);

  //mid is the root

  root.left = sortedArrayToBST(nums.slice(0, mid)); // not include mid
  root.right = sortedArrayToBST(nums.slice(mid + 1));

  return root;
};
