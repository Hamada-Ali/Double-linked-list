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
  
  remove(index) {
    if (index > this.length || index < 0) {
      return false;
    }
    if (index===0){
       this.shift(index);
      return this;
    } 
    if (index === this.length-1) {
       this.pop(index);
      return this;
    }
    let item = this.get(index);
    let prev = item.prev;
    let next = item.next;
    prev.next = next;
    next.prev = prev;
    length--;
    return this;
  }
  
}
