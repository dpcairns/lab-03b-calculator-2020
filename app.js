// import functions and grab DOM elements
import { handleAddClick, handleSubtractClick } from './clickHandlers.js';

const addButton = document.getElementById('add-button');
const subtractButton = document.getElementById('subtract-button');

// set event listeners to update state and DOM
addButton.addEventListener('click', handleAddClick);
subtractButton.addEventListener('click', handleSubtractClick);

/* 
what if we wanted to add subtraction capability here?
1) make a subtract() function in mathUtils.js
    - write the test first, then the function
1) make the HTML elements we need (button, input, and result section)
1) make a clickHandler in clickHandlers.js
1) import clickHandler in app.js
1) import subtract from mathUtils in clickHandlers.js
1) grab some DOM in clickHandlers.js
1) grab the button in app.js and add the clickHandler
*/