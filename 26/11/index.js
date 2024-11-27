let a = "jcreddyvennapusa"
console.log(a["1"] + a["3"]);

console.log(a.length);

console.log(a. concat (" hi"));

console.log(a.toUpperCase());

console.log(a.toLowerCase());

console.log(a. indexOf("d"));

console.log(a.charAt("5"));

console.log(a.split(''));

console.log(a.replaceAll('d','x'));

console.log(a.slice(1,8));



function name()
{
    console.log("my name is jcreddy")
}
console.log("hello world")
name();


function display(n)
{
    console.log(`i am from ${n}`)
}
display("plvd");


function fruits(a,...b)
{
    console.log(a,b)
}
fruits("apple","orange","banana","mango");



function fruit(a,...b)
{
 let newarr = [a,...b, "pineapple"]
 console.log(newarr)
}
fruit("apple","orange","banana","mango");




let arr1 = [5,6,8,9,1];
arr1.push(7);
console.log(arr1);

let arr2 = [5,6,8,9,1];
arr2.pop()
console.log(arr2);


let arr3 = [5,6,8,9,1];
arr3.unshift(11,15,18)
console.log(arr3);


let arr4 = [5,6,8,9,1,21,15,18];
arr4.shift()
console.log(arr4);


let arr5 = [5,6,8,9,1,15,12,18,22,1,7];
arr5.splice(4,5)
console.log(arr5);


let arr6 = [5,6,8,9,1];
console.log(arr6.concat(" jcreddy"));



let num = [5,6,7,8];
num.forEach(function(a,b)
{
    console.log(a*a+" "+b)
});











