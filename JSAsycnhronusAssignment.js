/** JavaScript Asynchornous Assignment.  */


function getSuperHeroes() {
    // return a new Promise object

    return new Promise((resolve,reject) => {
        // The promoise should resolve with an array of superHero objects
        // after 2.5 seconds
        setTimeout(() => {
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
            // iterate through superHereosArray
            for (element of superHeroesArray) {

            }
            // genrate random number generator of 1-10 inclusively
           const chanceOfFailure = Math.floor((Math.random() * 10) + 1 );

            // Now let's say if the number is not 5, resolve the promise otherwise reject the promise
            if( chanceOfFailure != 5)  {
                resolve(superHeroesArray);
            } else {
                reject(new ("The world is currently unsafe. No superheores"))
            }
        }, 2500);
    });
}

// call the getSuperHeroes to see if the promise object state is fuffliied or not.
// Use example from bro code to help with this one.
getSuperHeroes().then()