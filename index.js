//Reverse string
var string ="India is my country"

//Way -1 
const result = string.split(' ').map ((e)=> {
 return e.split('').reverse().join('')
})

console.log(string);
console.log(result.join(' ')); //aidnI si ym yrtnuoc

//Way - 2
const newResult = string.split('').reverse().join('').split(' ').reverse().join(' ');

console.log(newResult); //aidnI si ym yrtnuoc

//Way - 3 without inbuild functions
let res = '';
for( i= string.length - 1; i>=0 ;i--) {
  res = res + string[i];

}

  console.log(res) //yrtnuoc ym si aidnI