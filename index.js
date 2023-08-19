//Reverse string
var string = "India is my country"

//Way -1 
const result = string.split(' ').map((e) => {
  return e.split('').reverse().join('')
})

console.log(string);
console.log(result.join(' ')); //aidnI si ym yrtnuoc

//Way - 2
const newResult = string.split('').reverse().join('').split(' ').reverse().join(' ');

console.log(newResult); //aidnI si ym yrtnuoc

//Way - 3 without inbuild functions
let res = '';
for (i = string.length - 1; i >= 0; i--) {
  res = res + string[i];

}

console.log(res) //yrtnuoc ym si aidnI


var string = "India is my country";
console.log(string)
let res1 = '';
let word = '';

for (c of string) {
  console.log(c)
  if (c === ' ') {

    res1 = res1 + word + ' ';
    word = '';
  } else {
    word = c + word;
  }
  console.log(word);

}

console.log(res1 + word); ////yrtnuoc ym si aidnI



//Factorial
function findFactorial(num) {
  let factorial = 1
  for (let i = num; i > 0; i--) {
    console.log(factorial, i)
    factorial = factorial * i

  }
  return factorial
}

console.log(findFactorial(5)) // 120

//with recurcive method
function factorial(n) {

  if (n === 0) return 1;

  return n * factorial(n - 1);
}

console.log(factorial(5))



//Anagram

function anagarm(first, second) {
  const firstString = first.split('').sort().join('');
  const secondString = second.split('').sort().join('');

  if (firstString === secondString) {
    return true;
  } else {
    return false;
  }
}

console.log(anagarm("earth", "heart"))


//================================================================================================================================================================================
//Swapping of 2 numbers with third variable

let a = 10;
let b = 20;

let temp = b;

b = a;
a = temp;

console.log(a, b)


//================================================================================================================================================================================
//Swapping of 2 numbers without third variable

let a = 10;
let b = 20;

a = a + b; //30
b = a - b; //10
a = a - b; //20

console.log(a, b)

// ================================================================================================================================================================================
// To check the string or number is palindrome or not( ex: 121,madam,anna) using reverse method

const checkPalidrom = (str) => {

  const reverse = str.split('').reverse().join('');

  if (str == reverse) return "String is palidrom";

  return "String is not palidrom";

}

console.log(checkPalidrom("eye"));

//================================================================================================================================================================================
//To find longest word from a string 

const str = "This is my longgggest str";

let longgest = "";

str.split(" ").forEach((e) => {
  if (longgest.length < e.length) longgest = e;
})

console.log(longgest)

//Way 2
const str = "This is my longgggest str";

let longgest = "";

const res = str.split(" ").sort((a, b) => a.length - b.length);
loggest = res[res.length - 1]


// ================================================================================================================================================================================
// To find common prefix string from array of strings

const array = ["meena", "meethu", "meetali"];
const arr = array.sort();
const first = arr[0];
var i = 0;

while (first.charAt(i) === arr[arr.length - 1].charAt(i)) {
  i++;
}

const result = first.slice(0, i);
console.log(result); // mee

// ================================================================================================================================================================================
//  To find vowels and its count in a given string

let str = "This is a test to test vowels";

str = str.split('');

const vowels = ["a", "e", "i", "o", "u"]

let count = 0
str.forEach((e) => {
  if (vowels.includes(e)) count++;
})

console.log(count)

// ================================================================================================================================================================================
// To find character occurance fro the string
let str = "This is a test to test vowels";

str = str.split(' ');
//way 2 for string chars and not words => str = str.split('');
const arr1 = [];
str.forEach((e, index, arr) => {

  if (index !== arr.indexOf(e)) {
    arr1.push(e)

  }
})

console.log(arr1)

// ================================================================================================================================================================================
// To find a first pair whose sum is zero

function getSumPairZero(array) {
  for (num of array) {
    for (i of array) {
      if (num + i === 0) return [num, i]
    }
  }
}
const result = getSumPairZero([-9, -7, -8, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
console.log(result)

// ================================================================================================================================================================================
//  Fibonacci Series (0,1,1,2,3,5,8,13....)

//way 1 without for loop
const arr = [0, 1];

function Fibonacci() {

  res = arr[arr.length - 2] + arr[arr.length - 1]

  arr.push(res)

  if (arr[arr.length - 2] < 100) Fibonacci()
  return arr
}
const result = Fibonacci()
console.log(result)

//way 2 - with for loop


const arr = [0, 1];
num1 = arr[0]
num2 = arr[1]
function Fibonacci(n) {

  for (let i = 0; i < n; i++) {
    res = num1 + num2
    num1 = num2
    num2 = res
    arr.push(res)
  }
  return arr;

}
const result = Fibonacci(20);
console.log(result)

//Way 3 - with For, without temp var

const arr = [0, 1];

function Fibonacci(n) {

  for (let i = 0; i < n; i++) {
    arr.push(arr[i] + arr[i + 1])
  }
  return arr;

}
const result = Fibonacci(20);
console.log(result)

// ================================================================================================================================================================================
//  getTheLonggestNonRepeatingChars


function getTheLonggestNonRepeatingChars(n) {
  const arr = [];
  n.split('').forEach((e, index) => {

    console.log(n.indexOf(e), index)
    if (n.indexOf(e) !== index) {
      arr.length = 0
      arr.push(e)
    } else {

      arr.push(e)
    }

  })

  return arr; //DEFGHI
}

console.log(getTheLonggestNonRepeatingChars('ABCDDDEFGHI'))


// ================================================================================================================================================================================
// Sorting of an string/character
function sorting(arr) {
  return arr.sort()
}
console.log(sorting(["d", "g", "y", "e", "r", "p"]))
// ================================================================================================================================================================================
// Sorting of an number
function sorting(arr) {
  return arr.sort((a, b) => { return a - b })
}
console.log(sorting([1, 23, 34, 2, 76, 78])) //[1, 2, 23, 34, 76, 78]

// ================================================================================================================================================================================
// To check if given number is prime or not

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;

  }
  return true;
}

console.log(isPrime(5))

//===============================
// To Print odd/even numbers

const printNumbers = () => {

  for (let i = 2; i <= 100; i++) {

    // if(i % 2 === 0 ) { //even
    if (i % 2 !== 0) { //odd
      console.log(i)
    }
  }

}

printNumbers();

// ================================================================================================================================================================================
// To find unique values from 2 arrays and keep into one array.


const findUnique = (arr1, arr2) => {
  const mergedArr = [...arr1, ...arr2];

  //way 1 - const result = [...new Set(mergedArr)];
  //way 2
  const result = [];
  mergedArr.forEach((e, index, arr) => {
    if (arr.indexOf(e) === index) {
      result.push(e)

    }

  })


  return result;

}

const arr1 = [3, 5, 6, 7];
const arr2 = [4, 5, 6, 7];

console.log(findUnique(arr1, arr2));
// ================================================================================================================================================================================
// First letter upper case

const str = "India is my contry";

const result = str.split(" ").map((e) => {
  return e[0].toUpperCase() + e.slice(1)

})

console.log(result.join(" "))

// ================================================================================================================================================================================
// To check ending of the string with given character/s using custom

function confirmEnding(str, target) {

  //way 1  return str.slice(-target.length)===target
  //Way 2
  return str.substr(-target.length) === target
}
console.log(confirmEnding("Shital", "al"))

// ================================================================================================================================================================================
//  To find the largest elements from the 2 dimensional array


const largestFromArray = (arr) => {
  const res = [];
  arr.forEach((e) => {

    res.push(e.sort((a, b) => b - a)[0])

  })

  console.log(res) //[ 4, 9, 76, 90 ]
}


largestFromArray([[1, 2, 3, 4], [5, 6, 7, 9], [45, 76, 2, 1], [89, 90, 87, 9]])

//   ================================================================================================================================================================================
//  To find only truthy values

const removeFalseValue = (arr) => {


  return arr.filter(e => e)
}

console.log(removeFalseValue(["Shital", 0, "", false, null, undefined, "ate", NaN, 9])) //["Shital","ate",9]

//  ================================================================================================================================================================================
// Checking all letters of second words should present in first word, in the same order using include function

function characterPresent(arr) {
  var first = arr[0].toLowerCase()
  var second = arr[1].toLowerCase()
  //way 2 console.log(first.indexOf(second))
  return first.includes(second)

}
console.log(characterPresent(["hello", "heo"]))

// ================================================================================================================================================================================
// Spiral Matrix Printing | Print the elements of a matrix in spiral form

const input = [[1, 2, 3, 4],
[5, 6, 7, 8],
[9, 10, 11, 12],
[13, 14, 15, 16]];



const spiral = (input) => {

  const result = [];
  let top = 0; left = 0;
  let right = input[0].length - 1;
  let bottom = input.length - 1;
  let direction = 'right';

  while (top <= bottom && left <= right) {

    if (direction == 'right') {
      for (let i = left; i <= right; i++) {
        result.push(input[top][i])
      }
      direction = 'down'; top++;
    }
    else if (direction == 'down') {

      for (let i = top; i <= bottom; i++) {
        result.push(input[i][right])
      }
      direction = 'left'; right--;
    }

    else if (direction == 'left') {

      for (let i = right; i >= left; i--) {
        result.push(input[bottom][i])
      }
      direction = 'up'; bottom--;
    }

    else if (direction == 'up') {

      for (let i = bottom; i >= top; i--) {

        result.push(input[i][left])
      }
      direction = 'right'; left++;
    }
  }

  return result;
}

console.log(spiral(input))
/* output [
  1,  2,  3,  4, 8, 12,
 16, 15, 14, 13, 9,  5,
  6,  7, 11, 10
]*/

//reduce

let arr = [1, 2, 3, 4, 5];

const sum = arr.reduce((accum, current) => accum + current);

const sum1 = arr.reduce((acc, cur) => acc + cur, 5)

const product = arr.reduce((acc, cur) => acc * cur)


let average = arr.reduce((accum, curr, index, array) => {
  let total = accum + curr;
  if (index === array.length - 1) {
    console.log(total)
    return total / array.length
  }
  return total
})
console.log(average)

//flat
const arr = [
  ['a', 'b'],
  ['c', 'd'],
  ['e', 'f', ['e', 'f', ['e', 'f']]],
];


console.log(arr.flat(4)) //[  'a', 'b', 'c', 'd',  'e', 'f', 'e', 'f',  'e', 'f']

console.log(arr.reduce((acc, cur) => acc.concat(cur))) //[ 'a', 'b', 'c', 'd', 'e', 'f', [ 'e', 'f', [ 'e', 'f' ] ] ]

// ================================================================================================================================================================================
// Reverse of a nuber using converting into string
const reverseNumber = (input) => {
  return input.toString().split('').reverse().join('')
}

console.log(reverseNumber(123.34)) //43.321
//armstrong number
const amrstrong = (str) => {


  return str === str.toString().split('').reverse().join('') ? true : false;

}

console.log(amrstrong(1234321)) //true

//second largest
const secondLargestNum = (arr) => {

  return arr.sort((a, b) => b - a)[1];


}

console.log(secondLargestNum(['1', '2', '3', '4', '9']))


