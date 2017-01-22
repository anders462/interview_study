const curry = require("lodash/curry");
const _ = require("ramda");

const add = (x) => {
  return (y) => {
    return x + y;
  }
}

const add1 = add(1);
const add10 = add(10);

console.log(add1(3));
console.log(add10(3))

var sub = curry((x, y) => y - x );

sub1 = sub(1);

console.log(sub1(12));

///////CURRY from lodash //////
const match = curry((what, str) => str.match(what));

const replace = curry((what, replacement, str) => {
  return str.replace(what, replacement);
});

const filter = curry((f, any) => {
  return any.filter(f);
})

const map = curry((f, any) => {
  return any.map(f);
});

///////

console.log(match(/\s+/g, "hello world"));

matchSpace = match(/\s+/g);
console.log(matchSpace("this works to"));

console.log(match(/\S+/g)("maybe this?"));

console.log(filter(matchSpace, ["mlf  feflf", "eflfllfl"]));

const replaceSpace = replace(/\s+/g);
const replaceSpaceWith = replaceSpace("oops");
console.log(replaceSpaceWith("fjgnj gkgkgkrmk fkdkfmkfmk"))

///Excersizes using Ramda///////

// Exec 1

const words = (str) => {
  return _.split(' ', str);
}

console.log(words("hfh kdkdk kdkdk"));

const words2 = _.split(' ');

console.log(words2("kjfjkf fjfj"))


//Exec 1a

const sentences = _.map(words2);

console.log(sentences(["dkfk fkfkfk ", "jdj fjfj", "kdkdk kkks"]));

//Exec 2
var filterQs = function(xs) {
  return _.filter(function(x) {
    return match(/q/i, x);
  }, xs);
};

const filterQs2 = _.filter(match(/q/i));
console.log(filterQs2(["hhgghhq", "jjjjj", "kfjfjjq"]))

//Exec 3

// LEAVE BE:
var _keepHighest = function(x, y) {
  return x >= y ? x : y;
};

// REFACTOR THIS ONE:
var max = function(xs) {
  return _.reduce(function(acc, x) {
    return _keepHighest(acc, x);
  }, -Infinity, xs);
};

const max2 = _.reduce(_keepHighest, -Infinity);

console.log(max2([1,4,6,7,8,7]))

// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)

const slice = _.curry((start, end, xs) => xs.slice(start, end));

slice2 = slice(0, 2);
console.log(slice2([1,3,5]))

// Bonus 2:
// ============
// Use slice to define a function "take" that takes n elements from the beginning of the string. Make it curried.
// // Result for "Something" with n=4 should be "Some"
var take = slice(0);
console.log(take(4, "Something"))
