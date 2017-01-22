const curry = require("lodash/curry");
const _ = require("ramda");
var accounting = require('accounting');


const compose = (f, g) => {
  return (x) => {
    return f(g(x));
  }
}

const sayHello = (name) => {
  return `${name} says hello`;
}

const captilize = (x) => {
  return x.toUpperCase();
}

const exclamation = (x) => {
  return `${x}!`;
}

const greeting = compose(exclamation, compose(captilize, sayHello));

console.log(greeting("Anders"));


/////
var head = function(x) {
  return x[0];
};
var reverse = _.reduce(function(acc, x) {
  return [x].concat(acc);
}, []);
var last = compose(head, reverse);

last(['jumpkick', 'roundhouse', 'uppercut']);
//=> 'uppercut'

const lastUpper = _.compose(exclamation, captilize, head, reverse)

console.log(lastUpper(['jumpkick', 'roundhouse', 'uppercut']));


// Example Data
var CARS = [{
  name: 'Ferrari FF',
  horsepower: 660,
  dollar_value: 700000,
  in_stock: true,
}, {
  name: 'Spyker C12 Zagato',
  horsepower: 650,
  dollar_value: 648000,
  in_stock: false,
}, {
  name: 'Jaguar XKR-S',
  horsepower: 550,
  dollar_value: 132000,
  in_stock: false,
}, {
  name: 'Audi R8',
  horsepower: 525,
  dollar_value: 114200,
  in_stock: false,
}, {
  name: 'Aston Martin One-77',
  horsepower: 750,
  dollar_value: 1850000,
  in_stock: true,
}, {
  name: 'Pagani Huayra',
  horsepower: 700,
  dollar_value: 1300000,
  in_stock: false,
}];


// Exercise 1:
// ============
// Use _.compose() to rewrite the function below. Hint: _.prop() is curried.
var isLastInStock = function(cars) {
  var last_car = _.last(cars);
  return _.prop('in_stock', last_car);
};

//answer
const isLastInStock2 = _.compose(_.prop('in_stock'), _.last);

console.log(isLastInStock(CARS));
console.log(isLastInStock2(CARS));

// Exercise 2:
// ============
// Use _.compose(), _.prop() and _.head() to retrieve the name of the first car.
var nameOfFirstCar = _.compose(_.prop('name'), _.head);

console.log(nameOfFirstCar(CARS));

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition.
var _average = function(xs) {
  return _.reduce(_.add, 0, xs) / xs.length;
}; // <- leave be

var averageDollarValue = function(cars) {
  var dollar_values = _.map(function(c) {
    return c.dollar_value;
  }, cars);
  return _average(dollar_values);
};

const tracer = curry((tag, x) => {
  console.log(tag, x);
  return x;
});

const averageDollarValue2 = _.compose(_average, tracer("maped "),_.map(_.prop('dollar_value')));

console.log(averageDollarValue(CARS));
console.log(averageDollarValue2(CARS));

// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored car's names: e.g: sanitizeNames([{name: 'Ferrari FF', horsepower: 660, dollar_value: 700000, in_stock: true}]) //=> ['ferrari_ff'].

var _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

var sanitizeNames = _.compose(_.map(_underscore), _.map(_.toLower), _.map(_.prop('name')));
var sanitizeNames2 = _.map( _.compose(_underscore, _.toLower, _.prop('name')));


console.log(sanitizeNames2(CARS));

// Bonus 1:
// ============
// Refactor availablePrices with compose.

var availablePrices = function(cars) {
  var available_cars = _.filter(_.prop('in_stock'), cars);
  return available_cars.map(function(x) {
    return accounting.formatMoney(x.dollar_value);
  }).join(', ');
};

const formatPrice = _.compose(accounting.formatMoney, _.prop("dollar_value"))
const availablePrices2 = _.compose(_.join(', '), _.map(formatPrice), _.filter(_.prop('in_stock')));

console.log(availablePrices2(CARS));


// Bonus 2:
// ============
// Refactor to pointfree. Hint: you can use _.flip()

var fastestCar = function(cars) {
  var sorted = _.sortBy(function(car) {
    return car.horsepower;
  }, cars);
  var fastest = _.last(sorted);
  return fastest.name + ' is the fastest';
};

const append = _.flip(_.concat)(' is the fastest');
const fastestCar2 =  _.compose(append, _.prop('name'), _.last, _.sortBy(_.prop("horsepower")))


console.log(fastestCar(CARS))
console.log(fastestCar2(CARS))


var Container = function(x) {
  this.__value = x;
}

Container.prototype.inspect = function(x) {
  return `Container(${this.__value})`;
}

Container.of = function(x) { return new Container(x); }

console.log(Container.of("test"))

// (a -> b) -> Container a -> Container b

Container.prototype.map = function(f) {
  return Container.of(f(this.__value));
}

console.log(Container.of(2).map(function(two){
  return two + 2
}))

var results = Container.of("bombs").map(_.concat(' away')).map(_.prop('length'));

console.log(results)
