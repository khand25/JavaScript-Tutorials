// How to accept user input

//1. EASY WAY = window prompt
//2. PROFESSION


         //You can still write browser realted JS code in an external 
        // JS file, BUT MAKE SURE NOT TO RUN IT USING VS CODE, BUT RATHER SEE THE OUTPUT UNDER DEVLOPER TOOLS IN THE EXTERNAL
        // JS FILE. This will not cause the exeception now.
let username;
    // Code to manipulate the DOM, such as document.getElementById
//username = window.prompt("What's your username?");


// Pulls up a window with text 'What's your username?' and stores the user entered response in the username variable.
username = window.prompt("What's your username?");

console.log(username);

// let's execute some code when someone clicks the button!

/**
 * Code below get the element from the UserInputIntrohtml file that has the id of "mySubmit". It is the submit button so when
 * refering to the onclick feature of this button, when someone clicks on the submit button, then the function defined below
 * assigned to this statement will get run.
 */
document.getElementById("mySubmit").onclick = function () {
    /**
     * Code below will get the element from the UserInputIntrohtml file that has the id of "myText" and specifically takes
     * it's value and assigns it to the username varaible. Then the document.getElementById("myH1").textContent, will 
     * retireve the element from the UserInputIntrohtml file that has the id of "myH1" and OVERRIDE it's textual content to 'Hello
     * username' value
     */
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
    //console.log("Your username is: "+username);
}

