class Node {
  constructor(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
  }
}

class DLL {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
    unshift(val) {
    let newNode = new Node(val);
    if(this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let prevHead = this.head;
      this.head = newNode;
      prevHead.prev = newNode;
      newNode.next = prevHead;
      this.length++;
    }
    return this;
  }
}