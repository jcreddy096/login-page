
/*Use the forEach() method to print each number in the array to the console.
Use the map() method to create a new array that contains each number squared.
Use the filter() method to create a new array with numbers greater than or equal to 10.
Use the reduce() method to sum all the numbers in the array.
Use the find() method to find the first number in the array that is greater than 10.*/

const numbers = [31, 2, 11, 130, 8, 44];


square = numbers.map(numbers => numbers*2)
console.log(square);




numbers.forEach(function(number)
{console.log(number)} );




greater = numbers.filter(numbers => numbers >= 10)
console.log(greater);




sum = numbers.reduce((sum,numbers) => sum + numbers);
console.log(sum, "hi");


num = numbers.find(numbers => numbers > 10)
console.log(num)


function sum1(...numbers) {
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  console.log(sum1(1, 2, 3, 4));
  
  
  const numbers15 = [2, 4, 6, 8, 10];
  let nums15 = numbers15.map(numbers15 => numbers15*2);
  console.log(nums15);
  
  
  
  const fruits10 = ["apple", "banana", "cherry"];
   fruits10.push("orange","mango")
  console.log(fruits10);
  
  
  const animals = ["lion", "tiger", "elephant", "zebra", "giraffe"];
  let ani = animals.slice(1,4)
  console.log(ani);
  
  const colors5 = ["red", "green", "blue", "yellow", "purple"];
  let color5 = colors5.splice(2,2,"orange","pink")
  console.log(colors5);
  
  
  const numbers1 = [10, 20, 30, 40, 50];
  let nums1 = numbers1.pop()
  console.log(numbers1)
  
  
  
  const names = ["Alice", "Bob", "Charlie", "David"];
  let name = names.forEach(name =>{
  console.log(`hello, ${name}`)});
  
  
  
  const animals1 = ["cat", "dog", "rabbit", "elephant"];
  let animal = animals1.shift()
  console.log(animals1);
  
  
  const fruits2 = ["apple", "banana", "cherry"];
  let fruty = fruits2.unshift("mango","cherry")
  console.log(fruits2);
  
  
  
  const numbers2 = [5, 10, 15, 20, 25];
  let numbe22 = numbers2.includes(15)
  console.log(numbe22);
  
  
  
  
   let number = 7
  if(number % 2 === 0){
    console.log("even");
  }else{
    console.log("odd");
  };
  
  
  
  
  for(i = 0; i<=10; i++){
    console.log(i)
  };
  
  
  
  
  
  let a = 1;
  while(a <=5){console.log(a); a++};
  
  
  
  let x = 15;
  do{
    console.log(x);
    x++
  }
  while(x<=20);
  
  
  
  for(b = 32; b<= 38; b++){
    if (b===35){
      break;}
    console.log(b)
  };
  
  for (c = 50; c<=60; c++){
    if(c == 55){continue;}
  
    console.log(c)};
  
  
  
  function add(x,y){
    return (x + y)
  }console.log(add(5, 3));
  
  
  
  
  
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const friut10 = fruits.slice(1,3);
console.log(friut10);





const colors = ["red", "green", "blue", "yellow", "purple"];
const color = colors.splice(1, 2,  "pink", "orange")
console.log(color);
console.log(colors);




const nums = [40, 100, 1, 5, 25, 10];
console.log(nums.sort((a,b)=>(a-b)));



const numbe = [10, 20, 30, 40, 50];
const numb = numbe.reduce((acc, curr) => acc + curr);
console.log(numb);


const numbers13 = [5, 12, 8, 130, 44];
const nums13 = numbers13.filter(numbers13 => numbers13 > 10)
console.log(nums13);



