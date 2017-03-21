
// Set:Int => Boolean
const Set = (elem) => (x) => x === elem;

const s = Set(1);

const contains = (s, elem) => s(elem);

const union = (s, t) => (elem) => s(elem) || t(elem);

const intersect = (s, t) => (elem) => s(elem) && t(elem);

const diff = (s, t) => (elem) => s(elem) && !t(elem);
