# _Tamagotchi Application_

#### _A web application that determines a user’s age based on a planet’s solar years, 11/15/2019_

#### By _**Kyle Wymer**_

## Description

<!-- _This project demonstrates my current skills and understanding of Test Driven Development. The application consists of a series of functions that calculate a user's age and life expectancy on a given planet. The application also breaks down each process into specifications and determines if code was written correctly by testing with Jest. The user's age is set to 29 and currently does not allow user to enter a specific age to be calculated._ -->

## Specifications

|  Behavior | Input  | Output  |
|---|---|---|
| Should correctly create an age object with a name and food level | "Kutchipatchi", 10 | "Kutchipatchi", 10 |
| Should correctly create an average life expectancy object with worldwide average life expectancy  | 71 | 71 |
| Should correctly determine if age types are numbers | 29 | 'number' |
| Should correctly divide user age by 0.24 to determine age on Mercury | 29 | 121 |
| Should correctly divide user age by 0.62 to determine age on Venus | 29 | 48 |
| Should correctly divide user age by 1.88 to determine age on Mars | 29 | 15 |
| Should correctly divide user age by 11.86 to determine age on Jupiter | 29 | 15 |
| Should correctly subtract user age from life expectancy on Earth | 29 | 42 |
| Should correctly subtract user age from life expectancy and divide result by .24 to determine life left on Mercury | 29 | 175 |
| Should correctly subtract user age from life expectancy and divide result by .62 to determine life left on Venus | 29 | 68 |
| Should correctly subtract user age from life expectancy and divide result by 1.88 to determine life left on Mars | 29 | 22 |
| Should correctly subtract user age from life expectancy and divide result by 11.86 to determine life left on Jupiter| 29 | 4 |
| If user is older than 71, should correctly subtract life expectancy (71) by user age to determine years lived past life expectancy| 80 | 9 |


## Setup/Installation Requirements
* _Clone or download the repository from GitHub_
* _Download Node.js from the official Node.js web site: (https://nodejs.org)_
* _Navigate to the root of the super-galactic directory via terminal_
* _Run the following command in terminal: npm install_


## Known Bugs

_No known bugs_

## Support and contact details

_Please contact Kyle Wymer, at wymerkd@gmail.com if support is needed_

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _NPM_
* _Jest_


### License

*Copyright <2019> <Kyle Wymer, Epicodus>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.*
