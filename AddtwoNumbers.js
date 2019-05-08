var addTwoNumbers = function(l1, l2) {
  var list = new ListNode(0);
  var head = list;
  var sum = 0;
  var carry = 0;

  while (l1 || l2 || sum > 0) {
    if (l1) {
      sum = sum + l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum = sum + l2.val;
      l2 = l2.next;
    }

    if (sum >= 10) {
      carry = 1;
      sum = sum - 10;
    }

    head.next = new ListNode(sum);
    head = head.next;
    sum = carry;
    carry = 0;
  }

  return list.next;
};

//merge two linked list
var mergeTwoLists = function(l1, l2) {
  var l3 = new ListNode(); // dummy node
  var current = l3;
  while (l1 && l2) {
    if (l1.val < l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  current.next = l1 || l2;

  return l3.next;
};

//merge k list
var mergeKLists = function(lists) {
  //merge
  function mergeLists(a, b) {
    const dummy = new ListNode();
    let temp = dummy;
    while (a !== null && b !== null) {
      if (a.val < b.val) {
        temp.next = a;
        a = a.next;
      } else {
        temp.next = b;
        b = b.next;
      }
      temp = temp.next;
    }
    temp.next = a || b;
    return dummy.next;
  }

  //priority queue
  if (!lists.length) return null;
  while (lists.length > 1) {
    let a = lists.shift();
    let b = lists.shift();
    const h = mergeLists(a, b);
    lists.push(h);
  }

  return lists[0];
};
