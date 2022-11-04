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
    get(index) {
    if (index < 0) {
      return false;
    }
    
    if(index > this.length) {
      return false;
    }
    let linkMid = Math.floor(this.length / 2);
    if (index <= linkMid) {
        for(let i=0;i<= linkMid;i++) {
          if (i === index) {
              return this.head;
          }
          this.head = this.head.next;
        }
    } else {
      for(let i=this.length - 1;i>linkMid;i--) {
           if (i=== index) {
             return this.tail;
           }
          this.tail = this.tail.prev;
      }
    }
  }
}