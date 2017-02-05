const nextCharForNumberString = str => {
  const trimmed = str.trim()
  const number = parseInt(trimmed);
  const nextNumber = number + 1;
  return String.fromCharCode(nextNumber);
}

// console.log("Next Char ", nextCharForNumberString(" 65"));

const Box = x =>
({
  map: f => Box(f(x)),
  fold: f => f(x),
  inspect: () => `Box(${x})`
})

const nextCharForNumberStringFP = str =>
  Box(str)
   .map(s => s.trim())
   .map(s => parseInt(s))
   .map(n => n + 1)
   .map(n => String.fromCharCode(n))
   .fold(c => c)


// console.log("Next Char FP", nextCharForNumberStringFP(" 66 "));

const moneyToFloat = str =>
  parseFloat(str.replace(/\$/g, ""));

const percentToFloat = str => {
  const replaced = str.replace(/\%/g, "");
  const number = parseFloat(replaced);
  return number * 0.01
}

const applyDisscount = (price, discount) => {
  const cost = moneyToFloat(price);
  const savings = percentToFloat(discount);
  return cost - cost*savings;
}

// console.log(applyDisscount("$23", "20%"))

const moneyToFloatFP = str =>
  Box(str)
    .map(s => s.replace(/\$/g, ''))
    .map(r => parseFloat(r))

const percentToFloatFP = str =>
  Box(str.replace(/\%/g, ''))
    .map(r => parseFloat(r))
    .map(n => n * 0.01);


const applyDiscountFP = (price, discount) =>
  moneyToFloatFP(price)
    .fold(cost =>
      percentToFloatFP(discount)
      .fold(savings =>
         cost - cost * savings))


console.log(applyDiscountFP("$22", "20%"))
