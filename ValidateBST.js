// inorder traverse
var isValidBST = function(root) {
  if (!root) return true;
  //using inorder traversal
  var data;
  function inorderTraversal(root) {
    if (!root) return [];

    //left root right
    //divide
    var left = inorderTraversal(root.left);
    var right = inorderTraversal(root.right);

    //conquer
    data = left.concat(root.val).concat(right);
    return data;
  }

  inorderTraversal(root);
  for (var i = 0; i < data.length - 1; i++) {
    if (data[i + 1] <= data[i]) return false;
  }

  return true;
};

//DFS
var isValidBST = function(root) {
  if (!root) return true;
  //DFS
  function helper(root, min, max) {
    if (!root) return true;
    if ((min !== null && root.val <= min) || (max !== null && root.val >= max))
      return false;

    return (
      helper(root.left, min, root.val) && helper(root.right, root.val, max)
    );
  }

  return helper(root, null, null);
};
