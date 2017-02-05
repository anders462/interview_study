// ES5

function Stack() {
  this.size = 0;
  this._storage = {};
};


Stack.prototype.push = function(data){
  var size = ++this.size;
  this._storage[size] = data;
};

Stack.prototype.pop = function(){
  var size = this.size,
   deletedData;

   if(size) {
     deletedData = this._storage[size];
     delete this._storage[size];
     return deletedData
   }
};


var stack = new Stack();

stack.push(12);
stack.push(13);
stack.push("hello");
stack.push({foo: "bar"});

console.log(stack);
// Stack {size: 4,  _storage: { '1': 12, '2': 13, '3': 'hello', '4': { foo: 'bar' } } }

console.log(stack.pop())
//Stack { foo: 'bar' }

console.log(stack);
// Stack { size: 4, _storage: { '1': 12, '2': 13, '3': 'hello' } }

//ES6 Implementation

class Stack2 {
  constructor(){
    this.size = 0;
    this._storage = {};
  }

  push(data){
    const size = ++this.size;
    this._storage[size] = data;
  };

  pop(){
    const size = this.size
    let deletedData = null;

    if(size){
      deletedData = this._storage[size];
      delete this._storage[size];
      return deletedData;
    }
  };
}
