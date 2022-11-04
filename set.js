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
    set(index, val) {
    
    let theNode = this.get(index);
    if (theNode) {
      theNode.val = val;
      return theNode;
    } else {
      return false;
    }
  }
  
}
