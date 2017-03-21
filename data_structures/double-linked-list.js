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

  errorMessage() {
    const message = {failure: "Failure, non existant node"}
    throw new Error(message.failure);
  }

  validate(pos) {
    if (this._length < 0 || pos < 0 || pos > this._length){
      this.errorMessage();
    }
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

  searchNodeAt(position) {
    let currentNode = this.head;
    let foundNode = null;
    let count = 1;

    this.validate(position);

    while (count < position) {
      ++count;
      currentNode = currentNode.next;
    }

    return  currentNode;

  }

  remove(position) {
    let currentNode = this.head;
    let deletedNode = null;
    let count = 1;

    this.validate(position);

    if (currentNode)

  }

}

const list = new DoubleLinkedList();
list.add(10);
list.add(12);
list.add(13);
console.log("search a double linked", list.searchNodeAt(2));
console.log(">>>>>>>>>>>>>>> ", list);
