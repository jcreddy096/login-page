//20. dispay no.of factors of given number

const numbers = 12
for(let i = 1; i<=numbers; i++)
    if(numbers %i == 0){
    console.log(i);}




// 19. display sum of factors of a given integer 

const number =10
let sum = 0;
for (let i = 1; i<= number; i++){
    if(number %i === 0)
    {
        sum += i;
        console.log(i);
    }
}
console.log(sum); 



//17. palindrome

function pal(n){
    reverse = n.split("").reverse().join("")
   if(reverse === n){
    return true;
   }else {
    return false;
   }
}
console.log(pal("nitin"));




// 16.factorial

function factorial(numberss){
let result = 1
for(let i = 1; i <= numberss; i++){
    result *= i;
}
return result;
}
console.log(factorial(5)); 




// 15.prime number


function prime(n){
if(n <= 0) return false;
for ( let i = 2; i< n; i++){
    if(n %i ===0){
        return false;
      }  }
    return true;
}console.log(prime(17)); 









const numb= 12;
for(let i = 0; i <=numb; i++){
    if(numb %i === 0){
        console.log(i);
    }
};




const num = 100;
let sums = 0
for (let i = 0; i <= num; i++){
    if(num %i ===0){
        sums+= i;
    }
}console.log(sums);





function prime(m){
if (m <= 0) return false;
for (let i = 2; i < m/2; i++){
    if(m %i === 0){
        return false;
  } 
 return true;
}
}
console.log(prime(50));



//14.Write a program that swaps two elements in an array based on their indices using a simple if-else block.

/*const array= [1,3,15,14,2,7,9,7];
let index1 = array.indexOf(15);
let index2 = array.indexOf(7);
if(index1 >= 0 && index1 < array.length && index2 >= 0 && index2 < array.length){
    let temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}else{
    console.log("invalid");
}
console.log(array); */



/* const arr = [11,15,25,78,6,1,0,5]
let index1 = arr.indexOf(11);
let index2 = arr.indexOf(0);
if(index1 >= 0 && index1 < arr.length && index2 >= 0 && index2 < arr.length) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
} else{
    console.log("invalid");
} console.log(arr); */




// 13.Write a program that checks if a number is prime using a loop.
  
function  prime(n){
    if(n <= 0) return false;
    for(let i = 2; i <= n ; i++){
      if(n %i=== 0){
        return false;
      }
      return true;
    }
}console.log(prime(10));



function isPrime(x){
    if( x <=0 ) return false;
    for(let i = 2; i<= x; i++ ){
        if(x %i  === 0){
            return false;
        
    } return true;
}

}console.log(isPrime(7));




const numss = 12;
for(let i = 0; i <= numss; i++ ){
    if(numss %i === 0){
        console.log(i);} 
    };



    const int = 12;
    let su = 0;
    for(let i = 0; i<= int; i++){
        if(int %i === 0 ){
             su += i; 
             //console.log(i);
        }
    }console.log(su);



function pal(a){
    reverse = a.split("").reverse().join("")
if(reverse === a){
    return true;
}else{
    return false;
}
    }
    console.log(pal("nitish"));



    function fact(c){
        let result = 1
        for(let i = 1; i<= c; i++){
            result  *= i
        }return result;
    }  
            
    console.log(fact(5));

    



   /* const ar = [1,12,4,15,22,74,19,18];
    let index1 = ar.indexOf(4);
    let index2 = ar.indexOf(19);
    if(index1 >= 0 && index1 < ar.length && index2 >= 0 && index2 < ar.length){
     let   temp =ar[index1];
        ar[index1] = ar[index2];
        ar[index2] = temp;
    }else{
("invalid")
    }
    console.log(ar);*/


    const factor = 12;
    for(let i = 1; i <= factor; i++){
        if(factor % i === 0){
            console.log(i);
        };
    };
    

    const integer = 100;
    let total = 0
    for(let i = 1; i <= integer; i++){
         if(integer % i === 0){
         total += i;
         console.log(i)
        }
    }console.log(total);


    function funs(f){
        reverse= f.split("").reverse().join("")
           if( reverse === f){
            return true;
           }else{
            return false
           }
        }
    console.log(funs("rrrm"));

function facto(x){
    result = 1
    for( let i = 1; i <= x; i++){
        result *= i
    }
return result;
        }
    
console.log(facto(5));


function prime(p){
    if(p<= 0) 
        return false;
    for(let i = 2; i<= p; i++){
        if(p % i === 0){
            return false;
        }else{
            return true;
        }
    }
}console.log(prime(10));



const swap =[1,5,11,24,51,0,55,71,21];
let index1 = swap.indexOf(1);
index2 = swap.indexOf(0);
if(index1 >= 0 && index1 < swap.length && index2 >= 0 && index2 < swap.length){
   let temp = swap[index1]
    swap[index1] = swap[index2]
    swap[index2] = temp;
}else{
    console.log("invalid")
}
console.log(swap);



function pri(v){
    result = 1 
    for(let i = 2; i <= v; i++)
        if(v % i === 0){
            return false;
        }else{
        return true;
    }
    }

console.log(pri(7));



// 12.Write a program that adds an item to the end of an array.

let arra = [1,2,3,44,1,51,8,9];
arra.push(100);
console.log(arra);



//11.Write a program that checks whether a given number is even or odd using an if-else statement..

function fun1(a){
    if(a %2 === 0){
        return true;
    }else{
        return false;
    }
} console.log(fun1(9));



/*10.Write a program that takes a grade (a number) as input and outputs the corresponding grade letter using a switch statement. For example:
90 or higher → "A"
80-89 → "B"
70-79 → "C"
60-69 → "D"
Below 60 → "F".*/

 function grade(marks){
 let grade;
 switch(true){
    case (marks >= 90):
    grade = "A";
    break;
    case (marks >= 80):
        grade = "B";
        break;
        case (marks >= 70):
        grade = "C";
        break;
        case (marks >= 60):
        grade = "D";
        break;
        case (marks < 80):
        grade = "F";
        break;
 }return grade;
} console.log(grade(59));


//9.Write a program to merge two arrays using the spread operator (...).

let fruits = ["apple","banana","mango","garpes"];
let vegitables = ["potato","carrot","bringal","tomato"];

let food = [...fruits, ...vegitables];
console.log(food);


//8.Write a program that removes the last element of an array.
let cooldrinks = ["cocacola","pepsi","thumsup","sprite","fanta"];
 cooldrinks.pop();
console.log(cooldrinks);


//6.Write a program that reverses an array in-place using a loop (without using the reverse() method)


 function reversed(str){
 reverse = "";
 for( let i = str.length -1 ; i >=0; i-- ){
    reverse += str[i];
 }return reverse;
}console.log(reversed("apple"));


// 5.Write a program to find the sum of all odd numbers in an array using filter and reduce.

function summ(...a){
return a
   .filter(number => number % 2 !== 0)
 .reduce((acc, number) => acc + number, 0)
}
console.log(summ(1,2,3,4,5,6,7,8,9))



