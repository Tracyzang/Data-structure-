var isSymmetric = function(root) {
  function isMirror(root1, root2) {
    if (!root1 && !root2) return true;
    if (!root1 || !root2) return false;
    return (
      root1.val === root2.val &&
      isMirror(root1.left, root2.right) &&
      isMirror(root1.right, root2.left)
    );
  }

  return isMirror(root, root);
};

var isSymmetric = function(root) {
  //Iterative - create two stacks
  function isMirror(p, q) {
    var s1 = [p];
    var s2 = [q];

    //perform preorder traversal root-left-right
    while (s1.length && s2.length) {
      var n1 = s1.pop();
      var n2 = s2.pop();
      if (!n1 && !n2) continue;
      if (!n1 || !n2 || n1.val !== n2.val) return false;

      s1.push(n1.left);
      s1.push(n1.right);
      s2.push(n2.right);
      s2.push(n2.left);
    }

    return true;
  }
  return isMirror(root, root);
};
