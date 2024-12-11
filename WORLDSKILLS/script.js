let memory = 0; // Stores the memory value
let currentOperation = null; // Stores the current operation (+, -, *, /)
let previousValue = null; // Stores the previous number before an operation

// Clear memory (MC button)
function clearMemory() {
    memory = 0;
    updateMemory();
}

// Recall memory (MR button)
function recallMemory() {
    document.getElementById("result").value = memory;
}

// Add to memory (M+ button)
function addMemory() {
    memory += parseFloat(document.getElementById("result").value || 0);
    updateMemory();
}

// Subtract from memory (M- button)
function subtractMemory() {
    memory -= parseFloat(document.getElementById("result").value || 0);
    updateMemory();
}

// Calculate Mark-Up (MU button)
function calculateMarkup() {
    const result = document.getElementById("result");
    const value = parseFloat(result.value);
    result.value = value + (value * 0.1); // Adding a 10% mark-up by default
}

// Update memory display
function updateMemory() {
    document.getElementById("memory").textContent = `M1: ${memory}`;
}

// Append a number to the current input
function appendNumber(number) {
    const result = document.getElementById("result");
    if (result.value === "0" || currentOperation) {
        result.value = number; // Replace current value if it's "0" or after an operation
        currentOperation = null; // Reset current operation
    } else {
        result.value += number; // Append the number
    }
}

// Set the operation (+, -, *, /)
function operate(operation) {
    if (currentOperation !== null) {
        calculate(); // Perform the pending calculation first
    }
    previousValue = parseFloat(document.getElementById("result").value); // Store the previous value
    currentOperation = operation; // Store the current operation
}

// Perform the calculation when "=" is pressed
function calculate() {
    if (!currentOperation || previousValue === null) return; // Exit if no operation or previous value

    const currentValue = parseFloat(document.getElementById("result").value); // Get the current value
    let result;

    // Perform the operation
    switch (currentOperation) {
        case "+":
            result = previousValue + currentValue;
            break;
        case "-":
            result = previousValue - currentValue;
            break;
        case "*":
            result = previousValue * currentValue;
            break;
        case "/":
            result = currentValue !== 0 ? previousValue / currentValue : "Error"; // Avoid division by 0
            break;
        default:
            result = currentValue; // Default to the current value
    }

    document.getElementById("result").value = result; // Display the result
    currentOperation = null; // Clear the operation
    previousValue = null; // Reset the previous value
}

// Clear all inputs (AC button)
function clearAll() {
    document.getElementById("result").value = "0"; // Reset display
    currentOperation = null; // Reset operation
    previousValue = null; // Reset previous value
}

// Clear the current input (C button)
function clearEntry() {
    document.getElementById("result").value = "0"; // Reset display
}

// Delete the last character (→ button)
function backspace() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1) || "0"; // Remove last character or set to "0"
}

// Toggle the sign of the current number (+/- button)
function toggleSign() {
    const result = document.getElementById("result");
    result.value = parseFloat(result.value) * -1; // Multiply by -1 to toggle sign
}

// Calculate the percentage (% button)
function calculatePercentage() {
    const result = document.getElementById("result");
    result.value = parseFloat(result.value) / 100; // Divide by 100
}

// Calculate the square root (√ button)
function squareRoot() {
    const result = document.getElementById("result");
    result.value = Math.sqrt(parseFloat(result.value)); // Use Math.sqrt()
}