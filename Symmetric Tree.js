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

var isSymmetric = function(root) {
  //recursive
  function isMirror(t1, t2) {
    if (!t1 && !t2) return true;
    if (t1 == null || t2 == null) return false;
    return (
      t1.val === t2.val &&
      isMirror(t1.left, t2.right) &&
      isMirror(t2.left, t1.right)
    );
  }

  return isMirror(root, root);
};
