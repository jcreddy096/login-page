// setTimeout(() => console.log("task 1"),2000);
//     console.log("task 2");
//     console.log("task 3");
//     console.log("task 4");






// function fun(callback){
//     setTimeout(() => {
//     console.log("hello");
//     callback();
//  }, 2000);
// }

// function fun1(){
//     console.log("task1");
//     console.log("task2");
// } 
// fun(fun1);  






// function ramwalk(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() => {
//         const ramwalked = true;
//     if(ramwalked){
//         resolve("ram walking with dog");
//     }else{
//         reject("ram not walked");
//     }
//  }, 2000);
//     });
// }
// async function func(){
//     try{
//     const ramwalkResult = await ramwalk();
//     console.log(ramwalkResult);
// } catch(error){
//     console.error("error in ");
// }
// }
// func();






// function data(){
//     return new Promise((resolve, reject) =>{
//         setTimeout(() =>{
//             const newData = true;
//             if(newData){
//                 resolve("data fetched");
//             }else{
//                 reject("not fetched");
//             }

//             },3000)
//         })
//     }
// data()
//     .then(dataNew => {
//         console.log(dataNew);
//     })
//     .catch(error => {
//     console.error("error, data not fetched")
// })







// function loadData(callback) {
//     setTimeout(() => {
//         const message = "dataLoaded";
//         console.log("loadData")
//         callback(message)
//     },2000)
// }

// function handleData(message) {
//     console.log(message);
// }

// // Example usage
// loadData(handleData);





// function getUser() {
//     return new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//         const message = true;
//         if(message){
//             resolve("user data received")
//         }else{
//             reject("not received")}
        
//     }, 3500);}
// )};

// getUser().then(message => {
//     console.log(message); 
// });





// function getUser() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             const message = true;
//             if(message){
//                 resolve("user data received");
//             }else{
//                 reject("not received");
//             }
//         },2000)
//     })
// }
// async function fetchUser() {
//     const userResult = await getUser();
//     console.log(userResult);
// }

// fetchUser();







// function fetchOrders() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = true;
//             if(data){
//                 resolve("order fetched");
//             }else{
//                 reject("rejected");
//             }
//         },2000)
//     })
// }

// fetchOrders()
//     .then(data => {
//         console.log(data); 
//         return 'Processing orders';
//     })
//     .then(processedData => {
//         console.log(processedData); 
//         return 'Orders processed';
//     })
//     .then(finalData => {
//         console.log(finalData); 
//     });






// function loadUserData(callback) {
//     setTimeout(() => {
//         const message = "User data loaded with callback"
//         console.log(message);
//         callback(message);
//     },2000);
// };

// function fetchUserData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = true;
//         if(data){
//             resolve("User data loaded with promise");
//         }else{
//             reject("not loaded");
//         }
//         },3000);
//     });
// };


// loadUserData(data => {
//     console.log(data); 
// });


// fetchUserData().then(data => {
//     console.log(data); 
// });


// async function getUserData() {
//     const data = await fetchUserData();
//     console.log(data); 
// }

// getUserData();





function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const message = true;
            if (message) {
                resolve("it is working");
            } else {
                reject("not working");
            }
        }, 2000);
    });
}

async function fetchWithErrorHandling() {
    try {
        const result = await fetchData();
        console.log(result); 
    } catch (error) {
        console.error(error); 
    }
}


fetchWithErrorHandling();

