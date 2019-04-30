var copyRandomList = function(head) {
  // use map to store the copied pair;
  const map = new Map();
  const newHead = new RandomListNode(0);
  let temp = newHead;
  while (head !== null) {
    let current;
    if (map.has(head)) {
      current = map.get(head);
    } else {
      current = new RandomListNode(head.label);
      map.set(head, current);
    }
    if (head.random !== null) {
      if (map.has(head.random)) {
        current.random = map.get(head.random);
      } else {
        const r = new RandomListNode(head.random.label);
        map.set(head.random, r);
        current.random = r;
      }
    }

    temp.next = current;
    temp = temp.next;
    head = head.next;
  }
  return newHead.next;
};

var copyRandomList = function(head) {
  let curr = head;
  const dummyHead = new Node(0, null, null);
  let copyCurr = dummyHead;
  const lookup = new Map();

  while (curr != null) {
    copyCurr.next = new Node(curr.val, curr.next, curr.random);

    curr = curr.next;
    copyCurr = copyCurr.next;

    lookup.set(copyCurr.val, copyCurr);
  }

  copyCurr = dummyHead.next;

  while (copyCurr != null) {
    curr = copyCurr.random;

    if (curr != null && lookup.has(curr.val)) {
      copyCurr.random = lookup.get(curr.val);
    }

    copyCurr = copyCurr.next;
  }

  return dummyHead.next;
};


var copyRandomList = function(head) {
    //copynext
    function RandomListNode(label) {
        this.label = label;
        this.next = this.random = null;
    }

    var newNode = new Node();
    function copyNext(head) {
        while(head !== null) {
            newNode.random = head.random;
            newNode.next = head.next;
            head.next = newNode;
            head = head.next.next;
        }
    }
    //copyRandom
    function copyRandom(head) {
        while(head !== null) {
            if(head.next.random){
                head.next.random = head.random.next;
            }
        }
        head = head.next.next;
    }

    //splitList
    function splitList(head){
        var newHead = head.next;
        while(head !== null) {
            var temp = head.next;
            head.next = temp.next;
            head = head.next;
            if(temp.next){
                temp.next = temp.next.next;
            }
        }
        return newHead;
    }

    //copyRandomList
    if(head === null) return null;
    copyNext(head);
    copyRandom(head);
    return splitList(head);


};
