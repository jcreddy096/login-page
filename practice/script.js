// //20. dispay no.of factors of given number

// const numbers = 12
// for(let i = 1; i<=numbers; i++)
//     if(numbers %i == 0){
//     console.log(i);}




// // 19. 


// const number =10
// let sum = 0;
// for (let i = 0; i<= number; i++){
//     if(number %i === 0)
//     {
//         sum += i;
//         console.log(i);
//     }
// }
// console.log(sum); 



// //17. palindrome

// function pal(n){
//     reverse = n.split("").reverse().join("")
//    if(reverse === n){
//     return true;
//    }else {
//     return false;
//    }
// }
// console.log(pal("nitin"));




// // 16.factorial

// function factorial(numberss){
// let result = 1
// for(let i = 1; i <= numberss; i++){
//     result *= i;
// }
// return result;
// }
// console.log(factorial(5)); 




// // 15.prime number


// function prime(n){
// if(n <= 0) return false;
// for ( let i = 2; i< n; i++){
//     if(n %i ===0){
//         return false;
//       }  }
//     return true;
// }console.log(prime(2)); 









// const numb= 12;
// for(let i = 0; i <=numb; i++){
//     if(numb %i === 0){
//         console.log(i);
//     }
// };




// const num = 100;
// let sums = 0
// for (let i = 0; i <= num; i++){
//     if(num %i ===0){
//         sums+= i;
//     }
// }console.log(sums);





// function prime(m){
// if (m <= 0) return false;
// for (let i = 2; i < m/2; i++){
//     if(m %i === 0){
//         return false;
//   } 
//  return true;
// }
// }
// console.log(prime(5));



// //14.Write a program that swaps two elements in an array based on their indices using a simple if-else block.

// const array= [1,3,15,14,2,7,9,7];
// let in1 = array.indexOf(15);
// let in2 = array.indexOf(7);
// if(in1 >= 0 && in1 < array.length && in2 >= 0 && in2 < array.length){
//     let temp = array[in1];
//     array[in1] = array[in2];
//     array[in2] = temp;
// }else{
//     console.log("invalid");
// }
// console.log(array); 



// /* const arr = [11,15,25,78,6,1,0,5]
// let index1 = arr.indexOf(11);
// let index2 = arr.indexOf(0);
// if(index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
//     let temp = arr[index1];
//     arr[index1] = arr[index2];
//     arr[index2] = temp;
// } else{
//     console.log("invalid");
// } console.log(arr); */




// // 13.Write a program that checks if a number is prime using a loop.
  
// function  prime(n){
//     if(n <= 0) return false;
//     for(let i = 2; i <= n ; i++){
//       if(n %i=== 0){
//         return false;
//       }
//       return true;
//     }
// }console.log(prime(10));



// function isPrime(x){
//     if( x <=0 ) return false;
//     for(let i = 2; i<= x; i++ ){
//         if(x %i  === 0){
//             return false;
        
//     } return true;
// }

// }console.log(isPrime(2));




// const numss = 12;
// for(let i = 0; i <= numss; i++ ){
//     if(numss %i === 0){
//         console.log(i);} 
//     };



//     const int = 12;
//     let su = 0;
//     for(let i = 0; i<= int; i++){
//         if(int %i === 0 ){
//              su += i; 
//              //console.log(i);
//         }
//     }console.log(su);



// function pal(a){
//     reverse = a.split("").reverse().join("")
// if(reverse === a){
//     return true;
// }else{
//     return false;
// }
//     }
//     console.log(pal("nitish"));



//     function fact(c){
//         let result = 1
//         for(let i = 1; i<= c; i++){
//             result  *= i
//         }return result;
//     }  
            
//     console.log(fact(5));

    



//    /* const ar = [1,12,4,15,22,74,19,18];
//     let index1 = ar.indexOf(4);
//     let index2 = ar.indexOf(19);
//     if(index1 >= 0 && index1 < ar.length && index2 >= 0 && index2 < ar.length){
//      let   temp =ar[index1];
//         ar[index1] = ar[index2];
//         ar[index2] = temp;
//     }else{
// ("invalid")
//     }
//     console.log(ar);*/


//     const factor = 12;
//     for(let i = 1; i <= factor; i++){
//         if(factor % i === 0){
//             console.log(i);
//         };
//     };
    

//     const integer = 100;
//     let total = 0
//     for(let i = 1; i <= integer; i++){
//          if(integer % i === 0){
//          total += i;
//          console.log(i)
//         }
//     }console.log(total);


//     function funs(f){
//         reverse= f.split("").reverse().join("")
//            if( reverse === f){
//             return true;
//            }else{
//             return false
//            }
//         }
//     console.log(funs("rrrm"));

// function facto(x){
//     result = 1
//     for( let i = 1; i <= x; i++){
//         result *= i
//     }
// return result;
//         }
    
// console.log(facto(5));


// function prime(p){
//     if(p<= 0) 
//         return false;
//     for(let i = 2; i<= p; i++){
//         if(p % i === 0){
//             return false;
//         }else{
//             return true;
//         }
//     }
// }console.log(prime(10));



// const swap =[1,5,11,24,51,0,55,71,21];
// let index1 = swap.indexOf(1);
// index2 = swap.indexOf(0);
// if(index1 >= 0 && index1 < swap.length && index2 >= 0 && index2 < swap.length){
//    let temp = swap[index1]
//     swap[index1] = swap[index2]
//     swap[index2] = temp;
// }else{
//     console.log("invalid")
// }
// console.log(swap);



// function pri(v){
//     if(v <= 0) return false;
//     if( v === 2) return true;
//     for(let i = 2; i <= v/2; i++){
//         if(v % i === 0){
//             return false;
//         }
//         return true;
//     }
//     }

// console.log(pri(2));

//  function usPrime(x){
//     if( x <=1 ) return false;
//     if(x === 2 ) return true;
//     for(let i = 2; i<= x/2; i++ ){
//         if(x %i  === 0){
//             return false;
        
//     } return true;}
//  }console.log(usPrime(4)) 



//  function prime(n){
//     if(n <= 0) return false;
//     for ( let i = 2; i< n; i++){
//         if(n %i ===0){
//             return false;
//           }  }
//         return true;
//     }console.log(prime(4)); 
    



// // 12.Write a program that adds an item to the end of an array.

// let arra = [1,2,3,44,1,51,8,9];
// arra.push(100);
// console.log(arra);



// //11.Write a program that checks whether a given number is even or odd using an if-else statement..

// function fun1(a){
//     if(a %2 === 0){
//         return true;
//     }else{
//         return false;
//     }
// } console.log(fun1(9));



// /*10.Write a program that takes a grade (a number) as input and outputs the corresponding grade letter using a switch statement. For example:
// 90 or higher → "A"
// 80-89 → "B"
// 70-79 → "C"
// 60-69 → "D"
// Below 60 → "F".*/

//  function grade(marks){
//  let grade;
//  switch(true){
//     case (marks >= 90):
//     grade = "A";
//     break;
//     case (marks >= 80):
//         grade = "B";
//         break;
//         case (marks >= 70):
//         grade = "C";
//         break;
//         case (marks >= 60):
//         grade = "D";
//         break;
//         case (marks < 80):
//         grade = "F";
//         break;
//  }return grade;
// } console.log(grade(59));


// //9.Write a program to merge two arrays using the spread operator (...).

// let fruits = ["apple","banana","mango","garpes"];
// let vegitables = ["potato","carrot","bringal","tomato"];

// let food = [...fruits, ...vegitables];
// console.log(food);


// //8.Write a program that removes the last element of an array.
// let cooldrinks = ["cocacola","pepsi","thumsup","sprite","fanta"];
//  cooldrinks.pop();
// console.log(cooldrinks);


// //6.Write a program that reverses an array in-place using a loop (without using the reverse() method)


//  function reversed(str){
//  reverse = "";
//  for( let i = str.length -1 ; i >=0; i-- ){
//     reverse += str[i];
//  }return reverse;
// }console.log(reversed("apple"));


// // 5.Write a program to find the sum of all odd numbers in an array using filter and reduce.

// function summ(...a){
// return a
//    .filter(number => number % 2 !== 0)
//  .reduce((acc, number) => acc + number, 0)
// }
// console.log(summ(1,2,3,4,5,6,7,8,9));


// // 4.Write a program to filter out only the even numbers from an array using filter.


// let even = [1,2,3,4,5,6,7,8,9]
// let evenNumbers = even.filter(number => number % 2 === 0)
// console.log(evenNumbers);



// // 3.Write a program that counts how many times a specific element appears in an array. Use a loop.


// /*function ele(arr,element){
//     count = 0
//     for( i = 0; i <= arr.length; i++){
//         if(arr[i] === element){
//             count++;
//         }
//     }
//     return count;
// } let elem = [1,2,3,1,4,5,1,7,1,1,8]
// let countNum = 1;
// console.log(ele(elem,countNum));*/


// function cou(array, element) {
//     return array.filter(num => num === element).length;
// }
// const arr = [1, 2, 3, 2, 2, 4, 1,2, 2];
// const element = 2;
// console.log(cou(arr,element));






// function funn(num, ele){
//     result = 0;
//     for(let i = 0; i<= num.length; i++){
//         if(num[i] === ele){
//             result++
//         }
//     }
// return result;
// } const countNum = [1,2,3,4,2,5,6,2,7,2,8,9];
// check = 2;
// console.log(funn(countNum,check));



// // 2.Write a program that finds the largest number in an array using a loop.

// function large(largeNum){
//    let big = largeNum[0]
//     for(let i = 0; i <= largeNum.length; i++){
//         if(largeNum[i]  >= big){
//             big = largeNum[i];    
//         }
//     }return big;
// }const bigNum = [1,2,3,4,5,6,7,11];
// console.log(large(bigNum));


// // 1.Write a program to find the sum of all numbers in an array using a loop.


// /*function sumNum(all){
//     let result =0
//     for(let i = 0; i< all.length; i++){
//         result += all[i]
        
        
//     }return result;
// }const allaSum = [1,2,3,4,5,6,7,8,9];
// console.log(sumNum(allaSum));*/



// function funny(addSum){
//     let add = 0;
//     for(let i = 0; i < addSum.length; i++){
//         add += addSum[i];
//     }return add
// }const addNum = [11,0,12,0,14,1,4];
// console.log(funny(addNum));



function table(number,multiple){
    let thirdTable = [];
    for(let i = 1; i<=multiple; i++){
        thirdTable.push( `${number} * ${i} = ${number * i}`)
   }


return thirdTable
  }

  const table1 = 3;
   const myTable = table(table1,18);
  console.log(myTable);
  


// const person = {
//     name : "Ravi",
//     age: 20,
//     place: "kadapa"
// };
// console.log(person.toString());