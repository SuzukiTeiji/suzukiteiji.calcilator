// script.js
let currentOperation = "";

function updateScreen() {
    document.getElementById("currentOperationScreen").textContent = currentOperation;
}

function clearScreen() {
    currentOperation = "";
    updateScreen();
}

function appendToScreen(value) {
    currentOperation += value;
    updateScreen();
}

function calculateResult() {
    try {
        const sanitizedInput = currentOperation.replace(/[^0-9+\-*/().]/g, "");
        const result = eval(sanitizedInput);
        currentOperation = result.toString();
        updateScreen();
    } catch (error) {
        currentOperation = "Error";
        updateScreen();
    }
}

// Add event listeners to digit buttons (0-9)
for (let i = 0; i <= 9; i++) {
    document.getElementById(`digit${i}`).addEventListener("click", () => {
        appendToScreen(i);
    });
}

// Add event listeners to operator buttons (+, -, *, /)
document.getElementById("add").addEventListener("click", () => {
    appendToScreen("+");
});
document.getElementById("subtract").addEventListener("click", () => {
    appendToScreen("-");
});
document.getElementById("multiply").addEventListener("click", () => {
    appendToScreen("*");
});
document.getElementById("divide").addEventListener("click", () => {
    appendToScreen("/");
});

// Add event listener to equals button (=)
document.getElementById("equals").addEventListener("click", calculateResult);
