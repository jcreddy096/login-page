function mul (a,b)
{
    console.log (a*b)
}
mul(2,3);


 var mul = function (a,b)
 { 
    console.log (a*b)
 }
 mul(5,6);



let a = 3 ** 2 ** 3;
console.log(a);


let movieData = [
    {
    name: "rrr",
    year:2020
},
{
    name: "kgf",
    year:2021
},
{
    name: "bahubali",
    year:2018
}
]
function printmovies ()
{
movieData.forEach
((m) => console.log(m.name+" "+m.year))
}
printmovies()


let x = 5
let y = 3
console.log(x + y);

console.log(x - y);

console.log(x * y);

console.log(x / y);

console.log(x % y);

console.log(x ** y);

let p = 8;
p += 7;
console.log(p);

let q = 4;
q -= 2;
console.log(q);

let r = 7;
r *= 4;
console.log(r);

let s = 9;
s /= 3;
console.log(s);

let t = 9;
t %= 4;
console.log(t);

let u = 8;
u **= 2;
console.log(u);

var x1 = 10;
console.log(++x1);
console.log(x1);

var x1 = 8;
console.log(--x1);
console.log(x1);


var x1 = 19;
console.log(x1++);
console.log(x1);


var x1 = 25;
console.log(x1--);
console.log(x1);



var x2 =15;
y2 = 20;
console.log(x2 < y2);
console.log(x2 > y2);
console.log(x2 <= y2);
console.log(x2 >= y2);
console.log(x2 == y2);
console.log(x2 != y2);
console.log(x2 === y2);
console.log(x2 !== y2);

var x2 =20;
y2 = "20";
console.log(x2 == y2);
console.log(x2 === y2);
console.log(x2 !== y2);

//logical opearation;

var a1 = 10;
b1 = 15;
console.log(a1 > 0 || b1 > 0);
console.log(a1 < 0 || b1 > 0);
console.log(a1 > 0 || b1 < 0);
console.log(a1 < 0 || b1 < 0);


console.log(a1 > 0 && b1 > 0);
console.log(a1 < 0 && b1 > 0);
console.log(a1 > 0 && b1 < 0);
console.log(a1 < 0 && b1 < 0);

let yes = false
no = true
console.log(!yes);
console.log(!no);

console.log("hello"+"world");
console.log("hello"+"  "+"world");
console.log("hello "+"world");






let fruits = ["apple","orange","banana","mango"];
vegitables = ["carraot","keera","potato","onion"];
food = [...fruits, ...vegitables];
console.log(food);

let username = "jayachandra";
 word = [...username];
console.log(word);






let numbers = [1,2,3,4,5,6,7,8,9];
 oddnums = numbers.filter(isodd);
console.log(oddnums);

function isodd(element){
  return element %2 !== 0;
}


var number = [11,12,13,14,15,16,17,18,19];
 evennums = number.filter(iseven);
 console.log(evennums);
 function iseven(element){
    return element %2 === 0;
 }

 



let ages = [11,15,18,19,22,24,28,26,33];
 adult = ages.filter(isadult);
 console.log(adult);
 function isadult(element) {
    return element >= 18
 }



 let age = [10,16,17,12,23,25,21,27,31];
 children = age.filter(ischildren);
 console.log(children);
 function ischildren(element) {
    return element <= 18;
 }

let fruitwords = ["apple","orange","banana","mango","pineappale","watermelon"];
shortlength = fruitwords.filter(word => word.length >= 6);
console.log (shortlength);

