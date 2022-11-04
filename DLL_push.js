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
  
  push(val) {
    let newNode = new Node(val);
    if(this.head === null && this.tail === null) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else {
      let temp = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
	  newNode.prev = temp;
      this.length++;
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