[![Build Status](https://travis-ci.com/caocmai/Digit-Converter.svg?branch=main)](https://travis-ci.com/caocmai/Digit-Converter)
![npm bundle size](https://img.shields.io/bundlephobia/min/digit-number-converter)
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)


# digit-number-converter
A simple Node module to convert a numeric number from 0 to 999999999999 into their corresponding English word format.

# Install 
To install run: <br>
`$ npm install digit-number-converter`

# Usage
```javascript
const converter = require("digit-number-converter")

numberWord = converter.convertNum(2)
// numberWord = two

numberWord = converter.convertNum(123456789)
// numberWord = one hundred twenty three million four hundred fifty six thousand seven hundred eighty nine

```

# API
**convertNum(int)** <br>
Returns the English word representation string of the integer. 

# License
The MIT License (MIT)

Copyright © 2021, Cao Mai

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.