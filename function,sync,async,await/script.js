  

  //functions
function happy(){
    console.log("haha... i am in josh");
    
};
happy(); 



function happybrithday(username,age){
    
    console.log("many many happy birthday to you");
    console.log("many many happy birthday to you");
    console.log(`happy birthday dear ${username}`);
    console.log(`you are ${age} years old`);
    console.log("many many happy birthday to you");
};
happybrithday("ram","29");
happybrithday("raju",35);
happybrithday("anil",15);
happybrithday("nanda",5);



function add(x,y){
    return(x+y)
}
console.log(add(2,3));



function subtract(x,y){
    return(x-y)
}
console.log(subtract(2,3));


function multiply(x,y){
    return(x*y)
}
console.log(multiply(2,3));


function divide(x,y){
    return(x/y)
}
console.log(divide(2,3));


function isEven(number){
    if(number % 2 === 0){
        return true;
    }
    else{
       return false;
    }
}
console.log(isEven(21));




function Email(email){
    if (email.includes("@")){
        return true;
    }
    else{
        return false;
    }
}
console.log(Email("abc@gmail.com"));




//sync function;

function name() {
 console.log("my name is jcreddy");   
};
 name();


 function name() {
    console.log("my name is jcreddy");   
   }
    name();


    function name() {
        console.log("my name is jcreddy");   
       }
        name();


          
//Async function;




function name() {
    setTimeout(() => console.log("my name is jcreddy"),1000);   
   }
    name();

    function age(){
        setTimeout(() => console.log("i am 31years old"),2000);
    }
    age();


    //callback


    function func(callback){
        setTimeout(() =>console.log("hi..how are you"),2000);
    }
    function func1(){
        console.log("what are you doing");
        console.log("had your dinner?")
    }

    func((func1));




    function fun(callback){
        setTimeout(() =>{callback("hi..where are you from?")},4000);
    }
    function fun1(){
        console.log("hi..where are you from?")
        console.log("what are you doing");
        console.log("had your dinner?")
    }

    fun(fun1);



    //async/await



    function man() {
        return new Promise((resolve, reject) => {
        setTimeout(() => {
            const layingonthebed = true;
            if (layingonthebed) {
                resolve("sleeping");
            }
            else {
                reject("Awake");
            }
        },8000);
    });}

        async function funct(){
            try{
            const manResult = await man();
            console.log(manResult);
        } catch(error){
            console.log(error);
        }
    }
    funct();





    //promises




    const promise1 = new Promise((resolve, reject) =>{
        setTimeout(resolve, 9000, "result of promise1" );}
);

const promise2 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 9800, "result of promise2" );}
);

const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 10000, "result of promise3" );}
);

const promise4 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 11000, "result of promise4" );}
);

Promise.all([promise1,promise2,promise3,promise4]).then((result) =>{
    console.log(result);
})
.catch((error) => {console.log(error)});





const promise5 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 9000, "result of promise1" );}
);

const promise6 = new Promise((resolve, reject) =>{
setTimeout(reject, 9800, "result of promise2" );}
);

const promise7 = new Promise((resolve, reject) =>{
setTimeout(resolve, 10000, "result of promise3" );}
);

const promise8 = new Promise((resolve, reject) =>{
setTimeout(resolve, 11000, "result of promise4" );}
);

Promise.all([promise5,promise6,promise7,promise8]).then((result) =>{
console.log(result);
})
.catch((error) => {console.log(error)});





const promise9 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 9000, "result of promise1" );}
);

const promise10 = new Promise((resolve, reject) =>{
setTimeout(resolve, 9800, "result of promise2" );}
);

const promise11 = new Promise((resolve, reject) =>{
setTimeout(resolve, 10000, "result of promise3" );}
);

const promise12 = new Promise((resolve, reject) =>{
setTimeout(resolve, 11000, "result of promise4" );}
);

Promise.allSettled([promise9,promise10,promise11,promise12]).then((result) =>{
console.log(result);
})
.catch((error) => {console.log(error)});




const promise13 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 9000, "result of promise1" );}
);

const promise14 = new Promise((resolve, reject) =>{
setTimeout(resolve, 800, "result of promise2" );}
);

const promise15 = new Promise((resolve, reject) =>{
setTimeout(resolve, 10000, "result of promise3" );}
);

const promise16 = new Promise((resolve, reject) =>{
setTimeout(resolve, 11000, "result of promise4" );}
);

Promise.race([promise13,promise14,promise15,promise16]).then((result) =>{
console.log(result);
})
.catch((error) => {console.log(error)});




const promise17 = new Promise((resolve, reject) =>{
    setTimeout(reject, 12000, "result of promise1" );}
);

const promise18 = new Promise((resolve, reject) =>{
setTimeout(reject, 12800, "result of promise2" );}
);

const promise19 = new Promise((resolve, reject) =>{
setTimeout(reject, 13500, "result of promise3" );}
);

const promise20 = new Promise((resolve, reject) =>{
setTimeout(reject, 15000, "result of promise4" );}
);

Promise.any([promise17,promise18,promise19,promise20]).then((result) =>{
console.log(result);
})
.catch((error) => {console.log(error)});







        