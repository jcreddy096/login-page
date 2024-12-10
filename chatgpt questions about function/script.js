/*Write a function in JavaScript that takes two numbers as input and returns their sum.
Name the function addNumbers.*/

function add(x, y){
return(x + y)}
    console.log(add(2,3));


    /* Write a function named greet that takes a person's name as input and returns a string saying, "Hello, [name]!". */
  function greet(name)
 {
    return `hello, ${name}!`;
 } console.log(greet("john"));


 /* Write a function called multiply that takes two numbers as arguments and returns their product.

For example:*/

function multiply(x, y){
    return (x * y)
}
console.log(multiply(4,5));


/* Write a function named reverseString that takes a string as input and returns the string reversed. */

let names = "hello"
 let reverseString = ""
for(let i = names.length -1; i >= 0; i--){
    reverseString += names[i]
}
console.log(reverseString);




/*Write a function named countVowels that takes a string as input and returns the number of vowels (a, e, i, o, u) in the string. */

let vowel = "hello";
let countVowels = ""
for (let i = vowel.length -1; i >= 0; i--) {
    if ("aeiou".includes(vowel[i].toLowerCase())) {
         countVowels++;}}
console.log(countVowels);

/* Write a function named factorial that takes a number as input and returns its factorial. */

function factorial (n) {
if (n == 0){
    return 1 }
   let  result = 1
   for( let i = 1; i <= n; i++){
     result *= i
   }
        return  result;
    } 
 console.log(factorial(5));


 function power  (x, y){
  return (x**y)}
  console.log(power(5,4));


  

  function palindrom(str) {
    let reversestr = str.split("").reverse().join('');
   return str === reversestr}
  console.log(palindrom("madam"))
  console.log(palindrom ("kAK"));





function fabonocci(n){
  let str1 = [0,1]
  for(let i = 2; i < n; i++){
   str1.push(str1[i - 1]+ str1[i - 2]);
  }return str1.slice(0,n)
    
}console.log(fabonocci(5));






function factorial(n){
  if((n===0) || (n===1)){
    return 1}
   return n  * factorial(n-1)
                    }
console.log(factorial(5));





function anagram(name1,name2){
  let sortname1 = name1.split("").sort().join("")
  let sortname2= name2.split("").sort().join("")
  return sortname1 === sortname2
  
} console.log(anagram("lift", "filt"));
console.log(anagram("card", "curd"));








function isPrime(m){
if(m<=1){
  return false
}
  for (let i = 2; i <m; i++){
    if(m % i===0)
{
  return false;}
  }
    return true;}

 console.log(isPrime(7));





function sum(arr){
  let sum = 0
   for(let i = 0; i < arr.length; i++){
     sum += arr[i]
}
  return sum}
console.log(sum([1, 2, 3, 4, 5]));



function reverseWords(str) {
    return str.split("").reverse().join(' ');
}
console.log(reverseWords("Hello world"));







function vowels(names){
let count = 0
for(let i = 0; i < names.length; i++){
  if("aeiouAEIOU". includes(names[i]))
  {count++}}
    return count
    }
console.log(vowels("hElloAEIA"));


function duplicate(numbers){
 let number = []
 for (let i = 0; i < numbers.length; i++){
   if(!number.includes(numbers[i])) {
     number.push(numbers[i])}
  
 }
    return number
}
console.log(duplicate([1,2,2,3,4,4,7,6]));


const numb = [1,2,3,4,5]
const sumss = numb.reduce((acc, num) => acc + num, 0)
console.log(sumss);





for( let i = 0; i<=10; i++){
 let mul= 3*i
  console.log(`3*${i} = ${mul}`)};


const word = "hi.. how are you?"
const lastWord = word.split("").slice(0,-4).join("");
console.log(lastWord);






const words = ["apple", "guava", "grape", "banana","pineappale", "cherry","mango", "date"];
const sortedWords = words.sort(); 
console.log(sortedWords); 

const numberss = [1,32,35,28,5,19,11,9,22]
const sortNumbers = numberss.sort((a,b) => a-b)
console.log(sortNumbers);










