// import functions and grab DOM elements
const addInput1 = document.getElementById('add-input-1');
const addInput2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');

// set event listeners to update state and DOM
addButton.addEventListener('click', () => {
    // - What happens in the event listener?
    // - Apply the sum operation to the inputs
    //     - Get the values (as strings) of the inputs
    const value1 = addInput1.value;
    const value2 = addInput2.value;
    //         - log out the values
    console.log(value1, value2);
    //     - Turn these strings into numbers
    const value1AsNumber = Number(value1);
    const value2AsNumber = Number(value2);
    //         - log out the NUMBER values
    console.log(typeof value1AsNumber, typeof value2AsNumber);
    //     - Add them together
    const sum = value1AsNumber + value2AsNumber;
    //         - log out the sum
    console.log(sum);
    // - "Output the result" - show the answer to the user
    //     - change the textContent property of the results section
    addResults.textContent = sum;
});