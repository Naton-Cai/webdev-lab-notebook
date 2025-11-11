// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
let input = document.querySelector('#userInput1');
let copy = document.querySelector('#copy');
let output = document.querySelector('.output');



// add an event listener on the target element
copy.addEventListener('click', eventClick);

// callback function to handle event
function eventClick(event){
    output.textContent = input.value;
}
// Exercise #2:
// when the user enters input text, copy the user input to the output area
let input2 = document.querySelector('#userInput2');

// fetch JavaScript objects representing specific elements in the DOM
input2.addEventListener('input', eventInput);
let section = document.querySelector('#inputEventExample');
let newElement = document.createElement('div');
section.append(newElement);

// add an event listener on the target element
function eventInput(event){
    newElement.textContent = input2.value;
    
}
// callback function to handle event
