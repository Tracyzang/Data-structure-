/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  //dummy node
  var dummy = new ListNode(0);
  dummy.next = head;
  var length = 0;
  var first = head;
  while (first) {
    length++;
    first = first.next;
  }
  length -= n;
  first = dummy;
  while (length > 0) {
    length--;
    first = first.next;
  }
  first.next = first.next.next;
  return dummy.next;
};
