


class Node {
  //node:
  //data: stores value, next: points to next object
  constructor(data){
    this.data = data;
    this.next = null;
  };
}

class SinglyList {
  //_length: number of nodes in LinkedList
  //head: the first node in the list
  constructor() {
    this._length = 0;
    this.head = null;
  }

  //add: add a new node with data = value to end of list
  add(value) {
    const node = new Node(value);
    let currentNode = this.head;
    //list is empty
    if (!currentNode) {
      this.head = node;
      ++this._length
      return node;
    }
    //list is not empty
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node
    ++this._length;
    return node;
  };

  searchNodeAt(position) {
    let currentNode = this.head;
    const length = this._length;
    let count = 1;
    const message = {failure: "Failure, non existant node"};

    if (length == 0 || position < 1 || position > length) {
      throw new Error(message.failure);
    }

    while (count < position){
      currentNode = currentNode.next;
      ++count
    }

    return currentNode;
  }

  remove(position) {
    let currentNode = this.head;
    let prevoiusNode = null;
    let deletedNode = null;
    let length = this._length;
    let count = 1;

    const message = {failure: "Failure, non existant node"}

    if (length === 0 || position < 0 || position > length) {
      throw new Error(message.failure);
    }

    if (position === 1) {
      --this._length;
      this.head = currentNode.next;
      deletedNode = currentNode;
      currentNode = null;
      deletedNode.next =  null;
      return deletedNode;
    }

    while (currentNode.next && count < position) {
     prevoiusNode = currentNode;
     currentNode = currentNode.next
     count++
    }

    prevoiusNode.next = currentNode.next;
    deletedNode = currentNode;
    currentNode = null;
    deletedNode.next =  null;
    --this._length;
    return deletedNode;

  }
}


const list = new SinglyList();
list.add(12);
list.add(13);
list.add(14)
list.add(15);
console.log(list.remove(1), "rest of list", list)
