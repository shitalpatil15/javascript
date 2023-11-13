//currying
function sum(a) {
  return function (b) {
    if (!b) {
      return a;
    }
    return sum(a + b);
  }
}
console.log(sum(1)(2)(3)(4)(5)(6)());

//Infinite curryung for both simple and currying function

const sum = (...args) => {
  const total = args.reduce((acc, cur) => acc + cur, 0);

  return (...args2) => {
    if (args2.length > 0) {
      const total1 = args2.reduce((acc, cur) => acc + cur, 0);
      return sum(total, total1)
    }

    return total;
  }

}

console.log(sum(2, 3, 4)(2, 3)(1)()); // 15

console.log(sum(1, 2, 3)(2)())

console.log(sum(1)(2)(3)())


//input : [1,2,[3,4],[5,6,7,[8,9]],10]
//  output: [1,2,3,4,5,6,7,8,9,10];

const arr = [1, 2, [3, 4], [5, 6, 7, [8, 9]], 10];
//console.log(arr.flat(2))
const result = [];


const flatArr = (arr) => {
  arr.forEach(e => {
    if (Array.isArray(e)) {
      flatArr(e);
    } else {
      result.push(e)
    }
  })
}

flatArr(arr)
console.log(result)



/* implement below 
const test = async () => {
console.log("hello");
await sleep(2);
console.log("world");
}
*/
const sleep = (x) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(); }, 2000)
  })
}

test();
////////


const x = () => {

  for (var i = 0; i < 5; i++) {

    function close(x) {
      console.log("x", x)
      setTimeout(() => {
        console.log(x)
      }, x * 1000)
    }
    console.log("i", i)
    close(i);
  }

}


x(); //0  1  2  3  4  

const y = () => {

  for (var i = 0; i < 5; i++) {



    setTimeout(() => {
      console.log("y", i)
    }, i * 1000)


  }

}


y(); //5  5   5   5  5
//************* */



class Animal {
  static belly = [];
  eat() { Animal.belly.push("food"); }
}

let a = new Animal();
a.eat();

console.log(/* Snippet Here */); //Prints food /
//Ans: Animal.belly[0]
///// **

let cat = Object.create({ type: "lion" });
cat.size = "large";

let copyCat = { ...cat };
cat.type = "tiger";

console.log(copyCat.type, copyCat.size); //undefined 'large'


//Count occurrences of all items in an array in JavaScript
const count = (str) => {
  const counter = {};
  str.split(' ').forEach((ele) => {
    if (counter[ele]) {
      counter[ele] += 1;
    } else {
      counter[ele] = 1;
    }
  })
  console.log(counter)
}
count("Welcome Welcome toProgramiz!"); //{ Welcome: 2, 'toProgramiz!': 1 }


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

//same seq reverse
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

console.log(res1 + word);
//aidnI si ym yrtnuoc

//way2
var str = "India is my country";
console.log(str)

let res = '', word = '';
for (let i = str.length - 1; i >= 0; i--) {
  if (' ' === str[i]) {
    res = word + ' ' + res;
    word = '';
  } else {
    word = word + str[i]
  }
}

console.log(word, res) //aidnI si ym yrtnuoc

//How to sort an array based on the length of each element? without inbuild functions
var arr = ['yrtnuoc', 'ym', 'si', 'aidnI'];

const bubbleSort = (arr) => {
  let swapped = true;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      console.log(arr[i].length, arr[i + 1].length)
      if (arr[i].length < arr[i + 1].length) {

        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped)

  return arr;
}

console.log(bubbleSort(arr)); //[ 'yrtnuoc', 'aidnI', 'ym', 'si' ]


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



/*ABCEC => CEC

EDEFG => EDE

AA => AA*/


const isPalindrome = (str) => {
    const reverseStr = str.split('').reverse().join('');
 
   if(str === reverseStr) return str;
}

const fun = (str ) => {
     const n = str.length;
    for (let i = 0; i < n; i++) {
        for (let len = 3; i + len <= n; len += 3) {
           const res = isPalindrome(str.substr(i, len))
           console.log("===>",res )     //return EDE;
            
        }
    }
}




console.log(fun('EDEFG'));
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

// =====================================================c ===========================================================================================================================
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


//star pattern

let str = "";
for (i = 1; i <= 5; i++) {

  for (j = 1; j <= i; j++) {
    str += "*";
  }

  str += "\n";
}

console.log(str)

Output:

*
**
***
****
*****


  let str = "";
for (i = 1; i <= 5; i++) {
  str += " ";
  for (j = 1; j <= 5; j++) {
    str += "*";
  }

  str += "\n";
}

console.log(str)
Output:

 *****
 *****
 *****
 *****
 *****

  let num = 5;
let str = "";
// External loop
for (let i = 1; i <= num; i++) {

  for (j = i; j <= num; j++) {
    str += " "
  }

  for (j = 1; j <= 2 * i - 1; j++) {
    str += "*"
  }

  str += "\n";
}
console.log(str);

Output:

     *
    ***
   *****
  *******
 *********

 //https://www.tutorialstonight.com/js/javascript-star-pattern?expand_article=1#google_vignette

// ================================================================================================================================================================================
// Make alternate character to upper case

 const altCharUpperCase = (str) => {
  let result = str.split('').map((e, index) => {
    return index % 2 == 0 ? e.toUpperCase() : e.toLowerCase();
  })
  return result.join("");
}

console.log(altCharUpperCase("Shital patil"))


// ================================================================================================================================================================================
// To find all the subsets of the set
function findAllSubsetsoOfGivenSet(arr) {
  const result = arr.reduce((acc, cur) => acc.concat(acc.map(e => [cur, ...e]))
    , [[]])

  return result;
}
console.log(findAllSubsetsoOfGivenSet([8, 9]));

// ================================================================================================================================================================================
// To find the maximum repetation of the character in a string  


const maxRepeating = (str) => {
  let arr = [];
  let maxArr = [];
  const input = str.split('')
  input.map((e, index) => {
    if (input.indexOf(e) !== index) {
      arr.push(e)

    } else {
      maxArr = [...arr]
      arr.length = 0;
    }

  })
  return maxArr;
}

console.log(maxRepeating("aaaabbaaccccccccccccccccccde"));


// ================================================================================================================================================================================
// To find all the missing numbers from an array

function MissingElements(arr) {
  const missing = []

  for (i = 0; i <= arr.length; i++) {
    if (arr[i] + 1 !== arr[i + 1]) {
      let min = arr[i];
      while (min < arr[i + 1] - 1) {
        min++;
        missing.push(min)
      }
    }
  }
  return missing;
}

console.log(MissingElements([1, 2, 6])); //3,4,5

// ================================================================================================================================================================================


//From the String below, find the number of "e" characters.
 
const str = `Hospitality & Specialty Communications company was the first to introduce the wireless drive-thru headset system to the quick-service restaurant industry.`;

let count = 0;
for(let i=0; i <= str.length; i++){
 if(str.charAt(i) === "e") {
     count++
   
 }
}
 console.log(count)

 
// ================================================================================================================================================================================
