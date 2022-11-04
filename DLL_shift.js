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
    shift() {
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
      this.length--;
      return this;
    } else {
      let first = this.head;
      let next = this.head.next;
      first.next = null;
      next.prev = null;
      this.head = next;
      this.length--;
    }
    return this;
  }
}





const list = new DLL();
list.push(4);
list.push(5)
list.push(6);
list.shift();
list.shift();