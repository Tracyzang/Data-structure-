/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  //doubly linked list + hashmap
  this.capacity = capacity;
  this.map = new Map();
  this.head = {};
  this.tail = {};
  this.head.next = this.tail;
  this.tail.prev = this.head;
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map[key]) {
    let value = this.map[key].value;
    //move this to head:
    //1. created a new node;
    //2.remove existing node;
    //3.attach this to head;
    let node = new this.Node(key, value);
    this.remove(key);
    this.setHead(node);
    return value;
  } else {
    return -1;
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */

LRUCache.prototype.put = function(key, value) {
  let node = new this.Node(key, value);

  if (this.map[key]) {
    this.map[key].value = value; //set the new value;
    this.remove(key);
  } else {
    if (this.size > this.capacity) {
      if (this.tail) {
        delete this.map[this.tail.key];
        this.size--;
        this.tail = this.tail.prev;
        this.tail.next = null;
      }
    }
  }
  this.setHead(node);
};

//doubly linked list used to traverse the element
LRUCache.prototype.Node = function(key, value) {
  if (typeof key !== "undefined" || key !== null) {
    this.key = key;
  }

  if (typeof value !== "undefined" || key !== null) {
    this.value = value;
  }

  this.prev = null;
  this.next = null;
};

//setHead: set what element is called to beginning of the loop
LRUCache.prototype.setHead = function(node) {
  node.next = this.head;
  node.prev = null;

  if (this.head !== null) {
    this.head.prev = node;
  }
  this.head = node;
  this.size++;
  this.map[node.key] = node;
};

//remove element;
LRUCache.prototype.remove = function(key) {
  let node = this.map[key];

  if (node.prev === null) {
    //when node at the head, reset the head to next
    this.head = node.next;
  } else {
    node.prev.next = node.next;
  }

  if (node.next === null) {
    this.tail = node.prev;
  } else {
    node.next.prev = node.prev;
  }

  //reduce the capacity and remove the key off
  this.size--;
  delete this.map[key];
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
