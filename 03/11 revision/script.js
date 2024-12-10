let number = [1,2,3,4]
let squeres = number.map(number =>number*3)
console.log(squeres);


var fruits = [ {name:"apple",color:"red", calaroies:"50"},
              {name:"banana",color:"yellow", calaroies:"105"},
              {name:"mango",color:"green", calaroies:"88"},
              {name:"orange",color:"orange", calaroies:"32"}
             ];
var juice = fruits.map(fruits => fruits.name)
console.log(juice);

var juice = fruits.map(fruits => fruits.calaroies)
console.log(juice);

var juice = fruits.map(fruits => fruits.color)
console.log(juice);


var students = ["raju","ravi","ramu","sunny"]
var upper = students.map(students => students.toUpperCase())
console.log(upper);


var ages = [15,13,12,18,22,25,33];
var adults = ages.map(ages => ages > 18)
console.log(adults);


var ages = [15,13,12,18,22,25,33];
var adults = ages.filter(ages => ages > 18)
console.log(adults);


var numbers = [1,2,5,8,12,15,14,18,17];
odd = numbers.filter(numbers => numbers%2 !== 0)
console.log(odd);
 

function combine(firstNames,...otherNames){
return `${firstNames} ${otherNames.join(" ")}`;
}
console.log(combine("john", "deo", "smith"));


function combineNames(firstNames,...otherNames){
return `${firstNames} ${otherNames.join(", ")}`;
}
console.log(combineNames("hello", "john", "deo", "smith"));




function findMax(...numbers)
{ return Math.max(...numbers);
  
}
 console.log(findMax(3,5,8,9,11))
 
 
 
 var fruits = ["apple","orange","banana"];
 var vegitables = ["tomato", "brinjal", "potato"]
 food = [...fruits, ...vegitables]
 console.log(food);
 
 var name = ["jcreddy"]
 letters = [...name]
 console.log(letters);

var name = ["jcreddy"]
 letters = [...name].join(" - ")
 console.log(letters);




var fruits = [ {name:"apple",color:"red", calaroies:"50"},
              {name:"banana",color:"yellow", calaroies:"105"},
              {name:"mango",color:"green", calaroies:"88"},
              {name:"orange",color:"orange", calaroies:"32"}
             ];

fruits.push({name:"pineapple",color:"yellow", calaroies:"150"})
console.log(fruits);





var fruits = [ {name:"apple",color:"red", calaroies:"50"},
              {name:"banana",color:"yellow", calaroies:"105"},
              {name:"mango",color:"green", calaroies:"88"},
              {name:"orange",color:"orange", calaroies:"32"},
              {name:"pineapple",color:"yellow", calaroies:"150"}
             ];

fruits.splice(1,2);
console.log(fruits);




var fruits = [ {name:"apple",color:"red", calaroies:"50"},
              {name:"banana",color:"yellow", calaroies:"105"},
              {name:"mango",color:"green", calaroies:"88"},
              {name:"orange",color:"orange", calaroies:"32"},
              {name:"pineapple",color:"yellow", calaroies:"150"}
             ];

fruits.pop();
console.log(fruits);


var fruits = [ {name:"apple",color:"red", calaroies:"50"},
              {name:"banana",color:"yellow", calaroies:"105"},
              {name:"mango",color:"green", calaroies:"88"},
              {name:"orange",color:"orange", calaroies:"32"},
              {name:"pineapple",color:"yellow", calaroies:"150"}
             ];

fruits.forEach(fruits => console.log(fruits.name));
fruits.forEach(fruits => console.log(fruits.calaroies));
fruits.forEach(fruit => console.log(fruit.color));




var fruits = [ {name:"apple",color:"red", calories:50},
              {name:"banana",color:"yellow", calories:105},
              {name:"mango",color:"green", calories:88},
              {name:"orange",color:"orange", calories:32},
              {name:"pineapple",color:"yellow", calories:150}
             ];

var maxFruit = fruits.reduce((max, fruit) => fruit.calories > max.calories ? fruit : max);
console.log(maxFruit);



var fruits = [ 
  {name: "apple", color: "red", calories: 50},
  {name: "banana", color: "yellow", calories: 105},
  {name: "mango", color: "green", calories: 88},
  {name: "orange", color: "orange", calories: 32},
  {name: "pineapple", color: "yellow", calories: 150}
];

var minFruit = fruits.reduce((min, fruit) => fruit.calories < min.calories ? fruit : min);
console.log(minFruit);


var numbers = [1,2,3,4,5];
var sum = numbers.reduce((acc,num) => acc + num, 0);
console.log(sum);




const products = [
  { name: 'Product 1', price: 10 },
  { name: 'Product 2', price: 20 },
  { name: 'Product 3', price: 30 },
];

const price = products.reduce((acc, product) => acc + product.price, 0);
console.log(price)




const words = ['Hello', 'World', 'JavaScript', 'is', 'awesome'];
const word = words.join(" ");
console.log(word);

var Words = ['Hello', 'World', 'JavaScript', 'is', 'awesome'];
var joint = Words.reduce((acc, Words) => acc +" "+ Words, "");
console.log(joint);




var fruits = ["apple","orange","banana","mango","sapota"];
 fruits.shift();
console.log(fruits);


var fruits = ["apple","orange","banana","mango","sapota"];
 name = fruits.unshift("aaaaa");
console.log(name);
console.log(fruits);





var sunc = ['Hello', 'World', 'JavaScript', 'is', 'awesome'];
console.log(sunc.includes('JavaScript'));

var sun = ['Hello', 'World', 'JavaScript', 'is', 'awesome'];
var res = sun.includes('J S');
console.log(res);


var func = ['Hello', 'World', 'JavaScript', 'is', 'awesome'];
console.log(func.includes('JavaScript'));

  if(func.includes('JavaScript')){
  console.log("it is using for dynamic webpages")
}
else {
  console.log("i dont know...")
};


var sun = ['Hello', 'World', 'JavaScript', 'is', 'awesome'];
var res = sun.includes('J S');
console.log(res);
if(res){
  console.log("it is using for dynamic webpages")
}
else {
  console.log("i dont know...")
};





var age = 17;
if(age >= 18){
  console.log("you are yelder")
}
else{
  console.log("you are younger")
};



var a = 20 + 34
console.log(a);

var a = 15;
b = 20; 
console.log(a + b);



var a = 15;
b = 20; 
console.log(a - b);



var a = 15;
b = 20; 
console.log(a * b);




var a = 15;
b = 20; 
console.log(a / b);



var a = 15;
b = 20; 
console.log(a % b);



var a = 15;
b = 3; 
console.log(a ** b);



var a = 15;
b = 20; 
console.log(a + b);


var a = 10;
console.log(a++);
console.log(a++);

var a = 20;
console.log(++a);
console.log(++a);


var a = 35;
console.log(a--);
console.log(--a);



var a = 150;
b = 175; 
console.log(a > b);




var a = 150;
b = 175; 
console.log(a < b);



var a = 150;
b = 175; 
console.log(a >= b);



var a6 = 150;
b6 = 175; 
console.log(a6 <= b6);



var a5 = 150;
b5 = 175; 
console.log(a5 == b5);




var a4 = 150;
b4 = 175; 
console.log(a4 === b4);




var a3 = 150;
b3 = "175"; 
console.log(a3 === b3);




var a2 = 150;
b2 = 175; 
console.log(a2 != b2);




var a1 = 150;
b1 = "175"; 
console.log(a1 !== b1);


var x2 = 15;
y2 = 20; 
console.log( x2>0 && y2>0);
console.log( x2<0 && y2<0);
console.log( x2>=0 && y2<=0);
console.log( x2<=0 && y2>=0);





var x1 = 15;
y1 = 20; 
console.log( x1>0 || y1>0);
console.log( x1<0 || y1<0);
console.log( x1>=0 || y1<=0);
console.log( x1<=0 || y1>=0);



let yes = true
let no = false

console.log(!yes);
console.log(!no);




console.log("hello "+" "+" world")

console.log("hello "+"world")



 var ex = 2+5*3
 console.log(ex)
 
  var ex = 2+5**3
 console.log(ex);






 var user = ['Hello', 'World', 'JavaScript', 'is', 'awesome','1','2','3'];
for(let i = 0; i < user.length; i++){
  console.log(user[i]);}



  let i = 0;
while (i < 5) {
    console.log(i);
    i++;
};


let x = 10;
do {
    console.log(x);
    x++;
} while (x < 20);


let y = 10;
do {
    console.log(y);
    y++;
} while (y < 5);



for (let i = 0; i < 5; i++) {
    if (i === 3) {
        break; 
    }
    console.log(i);
};



for (let i = 1; i < 8; i++) {
    if (i == 3) {
        continue; 
    }
    console.log(i);
}



  
  
 
 
 
 
  
  
  
  
 












