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
  get(index) {
    let head = this.head;
    let tail = this.tail;
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
            let tempHead = this.head;
            this.head = head;
              return tempHead;
          }
          this.head = this.head.next;
        }
    } else {
      for(let i=(this.length-1);i>linkMid;i--) {
           if (i=== index) {
             let tempTail = this.tail;
             this.tail = tail;
             return tempTail;
           }
          this.tail = this.tail.prev;
      }
    }
  }
  insert(index, val) {
    if(index > this.length || index < 0) {
      return false;
    } if (index === 0) {
      return this.unshift(val);
    } 
    if (index = this.length - 1) {
      return this.push(val);
    }
    let newNode = new Node(val);
    let prevNode = this.get(index);
    let nextNode = this.get(index + 1);
      prevNode.next = newNode;
      newNode.next = nextNode;
      newNode.prev = prevNode;
      nextNode.prev = newNode;
      this. length++;
      return newNode;
  }
  
}
