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
      return byTens[strNum[0] + "0"] + " " + digits[strNum[1]];
    }
  }
}

function tripleDigits(num) {
  let strNum = num.toString();
  let hundredsDigit = strNum[0];

  return (
    digits[hundredsDigit] +
    " " +
    exponents["100"] +
    " and " +
    doubleDigits(strNum.slice(1))
  );
}

function thousandsConvert(num) {
  let strNum = num.toString();
  let thousandsDigit = strNum.slice(0, strNum.length - 3);

  var thousandsWord = "";
  switch (thousandsDigit.length) {
    case 1:
      thousandsWord = singleDigit(thousandsDigit);
      break;
    case 2:
      thousandsWord = doubleDigits(thousandsDigit);
      break;
    case 3:
      thousandsWord = tripleDigits(thousandsDigit);
      break;
  }

  return (
    thousandsWord + " " + exponents[1000] + " " + tripleDigits(strNum.slice(1))
  );
}

function millionConvert(num) {
  let strNum = num.toString();
  let millionDigit = strNum.slice(0, strNum.length - 6);

  var millionWord = "" 
  switch (millionDigit.length) {
    case 1:
      millionWord = singleDigit(millionDigit);
      break;
    case 2:
      millionWord = doubleDigits(millionDigit);
      break;
    case 3:
      millionWord = tripleDigits(millionDigit);
      break;
  }

  let thousandSlice = strNum.slice(millionDigit.length)

  return (
    millionWord + " " + exponents[1000000] + " " + thousandsConvert(thousandSlice)
  );

}

function billionConvert(num) {
  let strNum = num.toString();
  let billionDigit = strNum.slice(0, strNum.length - 9);

  var billionWord = "" 
  switch (billionDigit.length) {
    case 1:
      billionWord = singleDigit(billionDigit);
      break;
    case 2:
      billionWord = doubleDigits(billionDigit);
      break;
    case 3:
      billionWord = tripleDigits(billionDigit);
      break;
  }

  let millionSlice = strNum.slice(billionDigit.length)

  return (
    billionWord + " " + exponents[1000000000] + " " + millionConvert(millionSlice)
  );

}

function convertNum(num) {
  let digitCount = num.toString().length;

  switch (true) {
    case digitCount == 1:
      return singleDigit(num);
    case digitCount == 2:
      return doubleDigits(num);
    case digitCount == 3:
      return tripleDigits(num);
    case digitCount < 7:
      return thousandsConvert(num);
    case digitCount < 10:
      return millionConvert(num)
    case digitCount < 13:
      return billionConvert(num)
      
  }
}

module.exports = {
  // singleDigit,
  // doubleDigits,
  // tripleDigits,
  // thousandsConvert,
  convertNum,
};
