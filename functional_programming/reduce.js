

var numbers = [1, 1, 2, 3, 4, 4];

function unique(array) {
  return array.reduce(isUnique,[]);
}

function isUnique(acc,curr){
    if (!acc.find(elem => elem == curr)){
      acc.push(curr);
    }
    return acc
}


console.log(unique(numbers));
