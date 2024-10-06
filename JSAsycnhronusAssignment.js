/** JavaScript Asynchornous Assignment.  */

// Create the superheroes array below.
const superHeroesArray = [{ name: 'Superman', power: 100, universe: 'DC' },
    { name: 'CaptainAmerica', power: 93, universe: 'Marvel' },
    { name: 'Batman', power: 75, universe: 'DC' },
    { name: 'BlackWidow', power: 78 , universe: 'Marvel' },
    { name: 'DrStrange', power: 91 , universe: 'Marvel' },
    { name: 'Spiderman', power: 90, universe: 'Marvel' },
    { name: 'Ironman', power: 88, universe: 'Marvel' },
    { name: 'WonderWoman', power: 92, universe: 'DC' },
    { name: 'BlackPanther', power: 87 , universe: 'Marvel' },
    { name: 'Flash', power: 80, universe: 'DC' },
    { name: 'Hulk', power: 83, universe: 'Marvel' },
    { name: 'Thor', power: 95, universe: 'Marvel' }
];

function getSuperHeroes() {
    // return a new Promise object

    return new Promise((resolve,reject) => {
        // The promise should resolve with an array of superHero objects
        // after 2.5 seconds upon it not generating the random value of 5.
        setTimeout(() => {
            
            // iterate through superHereosArray
            //for (element of superHeroesArray) {

            //}
            // generate random number generator of 1-10 inclusively
           const chanceOfFailure = Math.floor((Math.random() * 10) + 1 );

           //console.log(chanceOfFailure)
            // Now let's say if the number is not 5, resolve the promise function will be executed. 
            // Where the resolve function will take one param (can be anything of any data type, typically a message)
            // signifying sucess of an action.
            //otherwise reject the promise will be executed will take one param (can be anything of any data type, typically an error object)
            // signifying failure of an action or promise.
            if(chanceOfFailure != 5)  {
                // pass in super heroes array when the promise if fullfilled
                resolve(superHeroesArray);
            } else {
                reject(new Error("The world is currently unsafe. No superheores"))
            }
        }, 2500);
    });
}

// call the getSuperHeroes to see if the promise object state is fullfied or not.
// then and catch function take in any 1 parmeter function that will be exectued when the .then or catch is evaluted only
// if circumstances ask for it.
// .then will only be called when the promise object returned from getSuperHeroes function is resolved
// otherwise .catch function will be called when the state of the promise object is rejected.

// We want to manipulate the intial superHeroes array more if the promise is fullfilled otherwise
// throw the error message.
// message refers to input arugment passed into the Promise resolve nad reject methods 
getSuperHeroes().then((message) => {
    // applying to the superHeroesArray inplace, use the for each function to iterate through the superHeroesArray elements
    // and each element (a super hero object) it's universe property will be checked to see if it is DC or Marvel and add the
    // appropiate new team property for each of the elements objects. 
    superHeroesArray.forEach((element,index,array) => {
     if(element.universe == "DC") {
        // add new property of team to array of super hero objects
        element.team = "Justice League";
     } else {
        element.team = "Avengers";
     }
    });

    // Print superHeores array with the team property added
    console.log("Printing out list of superheroes after adding team property!\n");
    for (let newElements of superHeroesArray) {
        console.log(newElements);
    }

   // call the map function now that will create a newArrayWithRank array that will include the all the same elements from the
   // orginal array, with an additional rank property added if the .power attribute is condition is met.
   let newArrayWithRank = superHeroesArray.map((element,index) => {
    if (element.power > 90) {
        element.rank = "Top Tier";
    } else {
        element.rank = "Second Tier"; 
    }
    return element;
   });
   console.log("\nPrinting out list of superheroes after adding rank property!\n");
   for (let newElements of newArrayWithRank) { 
        console.log(newElements);
    }
   // Now use filter function
    // call the filtwe function now that will create a marvelSuperHeroes array that will include the elements from the newArrayWithRank
   // that each of their elements objects universe property will be 'Marvel'
   let marvelSuperHeroes = newArrayWithRank.filter((element) => {
    if(element.universe == "Marvel") {
        return element;
    }
   });

   console.log("\nPrinting out  the filtered list of Marvel superheroes!\n");
   for (let newElements of marvelSuperHeroes) { 
        console.log(newElements);
    }

    // Time to sort the list of superheores by power.
    // descendingOrder function will take to adjecnet elements in the array calling object and will compare their power attributes
    // in such a way where power of second adjacent element will be sorted before first adject element.
    function descendingOrder(elementA,elementB) {
        return elementB.power - elementA.power;
    }
    // sort function arrays will iterate through calling array elements and pass into 2 adject array elements, from the calling array,
    // on each iteration for comparing.
    marvelSuperHeroes.sort(descendingOrder);
    console.log("\nPrinting out the sorted list of Marvel superheroes!\n");
    for (let newElements of marvelSuperHeroes) { 
        console.log(newElements);
    }
}).catch((message) => console.log(message));