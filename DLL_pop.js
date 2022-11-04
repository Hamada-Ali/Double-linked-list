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
    pop() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    } else {
      let prevNode = this.tail.prev;
      prevNode.next = null;
      this.tail.prev = null;
      this.tail = prevNode;
      this.length--;
    }
      return this;
  }
}
