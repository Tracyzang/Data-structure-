var copyRandomList = function(head) {
  let curr = head;
  const dummyHead = new Node(0, null, null);
  let copycurr = dummyHead;
  var map = new Map();

  while (curr !== null) {
    copycurr.next = new Node(curr.val, curr.next, curr.random);
    curr = curr.next;
    copycurr = copycurr.next;
    map.set(copycurr.val, copycurr);
  }

  copycurr = dummyHead.next;

  while (copycurr !== null) {
    curr = copycurr.random;
    if (curr !== null && map.has(curr.val)) {
      copycurr.random = map.get(curr.val);
    }
    copycurr = copycurr.next;
  }
  return dummyHead.next;
};

var isValidBST = function(root) {
  //dfs
  if (!root) return true;
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

//levelorder
var levelOrder = function(root) {
  if (!root) return [];
  // var queue = [root];
  var queue = [];
  //console.log(queue);
  queue.push(root);
  console.log(queue);
  var result = [];
  while (queue.length) {
    let size = queue.length;
    let current = [];
    for (var i = 0; i < size; i++) {
      var head = queue.shift();
      current.push(head.val);
      if (head.left) queue.push(head.left);
      if (head.right) queue.push(head.right);
    }
    result.push(current);
  }
  return result;
};

//zigzag levelorder
var zigzagLevelOrder = function(root) {
  //base case
  if (!root) return [];
  if (!root.left && !root.right) return [[root.val]];
  let res = [];

  //zigzag
  var normalOrder = true;

  //BFS Using queue
  var queue = [root];
  while (queue.length) {
    var level = [];
    var size = queue.length;
    for (let i = 0; i < size; i++) {
      var node = queue.shift();
      var left = node.left;
      var right = node.right;
      level.push(node.val);
      if (left) queue.push(left);
      if (right) queue.push(right);
    }
    if (!normalOrder) level.reverse();
    res.push(level);
    normalOrder = !normalOrder;
  }
  return res;
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

//reserve nodes in k-group
function reverseKGroup(head, k) {
  if (!head) return null;
  var tail = head;
  for (var i = 1; i < k; i++) {
    tail = tail.next;
    if (!tail) return head;
  }
  var next = tail.next;
  tail.next = null;
  reverse(head);
  head.next = reverseKGroup(next, k);
  return tail;
}

function reverse(curr) {
  var prev = null;
  while (curr) {
    var next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}

function reverseKGroup(head, k) {
  const stack = [],
    preHead = new ListNode();
  preHead.next = head;
  let lastTail = preHead;
  while (head) {
    for (let i = 0; i < k && head; i++) {
      stack.push(head);
      head = head.next;
    }
    if (stack.length === k) {
      while (stack.length > 0) {
        lastTail.next = stack.pop();
        lastTail = lastTail.next;
      }
      lastTail.next = head;
    }
  }

  return preHead.next;
}
