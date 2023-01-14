// DOM MANIPULATION: 
// Grab the div of id container.
const container = document.querySelector('#container');

// Add <p> with red text that says "Hey I'm red"
const pOne = document.createElement('p');
pOne.textContent = "Hey I'm red"
pOne.style.color = "red";
container.appendChild(pOne);

// Add <h3> with blue text that says "I'm a blue h3!"
const h3 = document.createElement('h3');
h3.textContent = "Hey I'm a blue h3!"
h3.style.color = "blue";
container.appendChild(h3);

// Create div with a black border and pink background that includes:
//      1. h1 that says "I'm in a div!"
//      2. p that saays "ME TOO!""
const content = document.createElement('div');
content.style.backgroundColor = "pink";
content.style.borderStyle = "solid";
content.style.borderColor = "black";

// Create h1. 
const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";

// Create p. 
const pTwo = document.createElement('p');
pTwo.textContent = "ME TOO!";

// Add h1 and pTwo to content.
content.appendChild(h1);
content.appendChild(pTwo);

// Add content to container.
container.appendChild(content);

// Events: actions that occur on your webpage, and using JS we can make our page listen and react.
// There are three methods to do this: 
//       1. Attach functions onto HTML elements
//       2. "on_event_" property on the DOM object
//       3. Attach event listeners (preferred)

// Method 1 inside html. 

// Method 2. (id's are #, classes are .)
// const btn = document.querySelector('#btn');
// btn.onclick = () => alert("Hello, World!");

// // Method 3.
// const btn = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     alert("Hello, World!");
// });

// // You can use named functions instead. 
// // Replace all of the functions in our methods with alertFunction() instead!
// function alertfunction() {
//     alert("YAY! YOU DID IT!");
// }

// e is an object that references the event itself. 
// With this you have many useful properties and functions such as which mouse/key was clicked, 
// or info on the target.
btn.addEventListener('click', function (e) {
    console.log(e.target);
    e.target.style.backgroundColor = 'blue';
});