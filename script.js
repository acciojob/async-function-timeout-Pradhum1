//your JS code here. If required.
async function displayMessageWithDelay() {
    const textInput = document.getElementById('text').value;
    const delayInput = document.getElementById('delay').value;
    const outputDiv = document.getElementById('output');

    // Convert delayInput to a number and use a default of 1000ms if no value is provided
    const delay = parseInt(delayInput) || 1000;

    // Clear previous output
    outputDiv.textContent = '';

    // Wait for the specified delay
    await new Promise((resolve) => {
        setTimeout(() => {
            // Display the user-provided text after the delay
            outputDiv.textContent = textInput;
            resolve();
        }, delay);
    });
}

// Add event listener to the button
document.getElementById('btn').addEventListener('click', displayMessageWithDelay);