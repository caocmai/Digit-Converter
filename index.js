var digits = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
};

var tenToNineteen = {
  10: "ten",
  11: "eleven",
  12: "twelve",
  13: "thirteen",
  14: "fourteen",
  15: "fifteen",
  16: "sixteen",
  17: "seventeen",
  18: "eighteen",
  19: "nineteen",
};

var byTens = {
  20: "twenty",
  30: "thirty",
  40: "fourty",
  50: "fifty",
  60: "sixty",
  70: "seventy",
  80: "eighty",
  90: "ninety",
};

var exponents = {
  100: "hundred",
  1000: "thousand",
  1000000: "million",
  1000000000: "billion",
};

function singleDigit(num) {
  return digits[num.toString()];
}

function doubleDigits(num) {
  if (num < 20) {
    return tenToNineteen[num.toString()];
  } else {
    let strNum = num.toString();
    if (strNum[1] == 0) {
      return byTens[num];
    } else {
      return byTens[strNum[0] + "0"] + "-" + digits[strNum[1]];
    }
  }
}

function tripleDigits(num) {
    let strNum = num.toString()
    let hundredsDigit = strNum[0]

    return digits[hundredsDigit] +  " " + exponents["100"] + " and " + doubleDigits(strNum.slice(1))
}

function fourDigits(num) {
    let strNum = num.toString()
    let  thousandsDigit = strNum[0]

    return digits[thousandsDigit] + " " + exponents[1000] + " " + tripleDigits(strNum.slice(1))
}

module.exports = {
  singleDigit,
  doubleDigits,
  tripleDigits,
  fourDigits
};
