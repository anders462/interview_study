class Node {
  constructor(data) {
    this.value = data;
    this.next = null;
    this.prev = null;
  }
}


class DoubleLinkedList {
  constructor(){
    this._length = 0;
    this.head = null;
    this.tail = null;
  }

  add(data) {
    const node = new Node(data);
    let currentNode = this.head;
    let prevNode = null;

    if(this._length) {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node

    } else {
      this.head = node;
      this.tail = node;
    }

    ++this._length;
    return node
  }

}

const list = new DoubleLinkedList();
list.add(10);
list.add(12);
list.add(13);
console.log(list.tail.prev.prev)
