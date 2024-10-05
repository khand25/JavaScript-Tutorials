// Promise = An object that manages asynchronus operations.
//      Wrap a Promise Object around (asynchronous code)
//     "I promise to return a value"
//     PENDING -> RESOLVED or REJECTED
//     new Promise((resolve,reject) -> {asynchronous code}) 

// DO THESE CHORES IN ORDER

// 1. WALK THE DOG
//2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

// resolve nad reject are two functions part of any Promise object
function walkDog() {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const dogWalked = true;
            if(dogWalked == true) {
                resolve('You walked the dog');
            } else {
                reject('You didnt walk the dog');
            }
        }, 1500);
    });
}

function cleanKitchen() {

    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const kitchenCleaned = true;
            if (kitchenCleaned == true) {
            resolve('You cleaned the kitchen');
            } else {
                reject('You didnt clean the kitchen');
            }
            
        }, 2500);
    })
}

function takeOutTrash() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const trashTakenOut = true;
            if (trashTakenOut == true) {
            resolve('You took out the trash');
            } else {
                reject('You didnt take out the trash');
            }
            
        }, 2500);
    })
}

// call the walkDog function, then do what
walkDog().then((value) => {
    console.log(value);
    return cleanKitchen()
}).then((value) => {
    console.log(value)
    return takeOutTrash()
}).then((value) => {
    console.log(value);
    console.log('You finished all the tasks');
}
).catch((error) => console.log(error));