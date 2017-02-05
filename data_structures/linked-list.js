class LinkedList {
  constructor(){
    this.head = null;
  }

  push(val) {
    const node = {
      value: val,
      next: null
    }

    if(!this.head){
      this.head = node; //list is empty add first element
    }
    else {
      let current = this.head; //current is first element
      while (current.next) {
        current = current.next; //iterate through list until end
      }
      current.next = node; //append new to end of list
    }

  };

  remove(val) {
    let current = this.head;

    if (current.value == val) {
      this.head = current.next;
    }
    else {
      let previous = current;
      while (current.next) {
        if(current.value == val) {
          previous.next = current.next;
          break;
        }
        previous = current;
        current = current.next;
      }

    if(current.value == val ) {
      previous.next = null;
    }
  }

};

}

const list = new LinkedList();

list.push(12);
list.push(13);
list.push(14);
list.push(12);
list.remove(13)


console.log("list ", list)
