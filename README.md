[![Build Status](https://travis-ci.com/caocmai/Digit-Converter.svg?branch=main)](https://travis-ci.com/caocmai/Digit-Converter)

# Digit Converter
Simple Node module to convert a numeric number from 0 to 999999999999 into their corresponding alphanumeric format.

# Install 
To install run:
`$ npm install digit-number-converter`

# Usage (Not yet published)
```javascript
const converter = require("digit-number-converter")

alphanumericWord = converter.convertNum(2)
// alphanumericWord = two

alphanumericWord = converter.convertNum(123456789)
// alphanumericWord = one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine

```