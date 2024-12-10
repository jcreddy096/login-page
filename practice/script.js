/*20. dispay no.of factors of given number

const numbers = 12
for(let i = 1; i<=numbers; i++)
    if(numbers %i == 0){
    console.log(i);}*/




/* 19. display sum of factors of a given integer 

const number =100
let sum = 0;
for (let i = 1; i<= number; i++){
    if(number %i === 0){
        sum += i;
        console.log(i);
    }
}
console.log(sum); */



/*17. palindrome

function pal(n){
    reverse = n.split("").reverse().join("")
   if(reverse === n){
    return true;
   }else {
    return false;
   }
}
console.log(pal("nitin"));*/




/* 16.factorial

function factorial(numberss){
let result = 1
for(let i = 1; i <= numberss; i++){
    result *= i;
}
return result;
}
console.log(factorial(5)); */




/* 15.prime number


function prime(n){
if(n <= 0) return false;
for ( let i = 2; i< n; i++){
    if(n %i ===0){
        return false;
      }  }
    return true;
}console.log(prime(17)); */









/*const number= 12;
for(let i = 0; i <=number; i++){
    if(number %i === 0){
        console.log(i);
    }
};*/




/*const num = 100;
let sum = 0
for (let i = 0; i <= num; i++){
    if(num %i ===0){
        sum+= i;
    }
}console.log(sum);*/





/*function prime(m){
if (m <= 0) return false;
for (let i = 2; i < m/2; i++){
    if(m %i === 0){
        return false;
  } 
 return true;
}
}
console.log(prime(50));*/



/*14.Write a program that swaps two elements in an array based on their indices using a simple if-else block.

const array= [1,3,15,14,2,7,9,7];
let index1 = array.indexOf(15);
let index2 = array.indexOf(7);
if(index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length){
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}else{
    console.log("invalid");
}
console.log(array); 

const arr = [11,15,25,78,6,1,0,5]
let index1 = arr.indexOf(11);
let index2 = arr.indexOf(0);
if(index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
} else{
    console.log("invalid");
} console.log(arr); */




//13.Write a program that checks if a number is prime using a loop.
  
function  prime(n){
    if(n <= 0) return false;
    for(let i = 2; i <= n ; i++){
      if(n %i=== 0){
        return false;
      }
      return true;
    }
}console.log(prime(10))





