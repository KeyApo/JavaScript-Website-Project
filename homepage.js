/* Homepage JavaScript */


// Function to get name from viewer //

var viewerName = prompt("What is your name?");

//Greet User
alert("Welcome " + viewerName + "!");

// Update the name element with the user's name
document.getElementById("name").innerText = "Hello, " + viewerName + "!";