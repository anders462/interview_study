class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  };
}

class SinglyList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    let currentNode = this.head;
    //list is empty
    if (!currentNode) {
      this.head = node;
      ++this.length

      return node;
    }
    //list is not empty
    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    currentNode.next = node
    ++this.length;
    return node;
  };

  searchNodeAt(position) {
    let currentNode = this.head;
    const length = this.length;
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
    let length = this.length;
  }
}


const list = new SinglyList();
list.add(12);
list.add(13);
list.add(14)
console.log(list.searchNodeAt(2))
