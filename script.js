function clearScreen() {
    document.getElementById('currentOperationScreen').innerText = '0';
}

function appendDecimal() {
    var currentScreen = document.getElementById('currentOperationScreen').innerText;
    if (!currentScreen.includes('.')) {
        document.getElementById('currentOperationScreen').innerText += '.';
    }
}

function appendDigit(digit) {
    var currentScreen = document.getElementById('currentOperationScreen').innerText;
    if (currentScreen === '0') {
        document.getElementById('currentOperationScreen').innerText = digit;
    } else {
        document.getElementById('currentOperationScreen').innerText += digit;
    }
}

function calculateResult() {
    var expression = document.getElementById('currentOperationScreen').innerText;
    var result = evaluateExpression(expression);
    document.getElementById('currentOperationScreen').innerText = result;
}

function evaluateExpression(expression) {
    try {
        return Function('return ' + expression)();
    } catch (error) {
        return 'Error';
    }
}

// Add event listener to equals button (=)
document.getElementById("equals").addEventListener("click", calculateResult);

// Add event listeners to digit buttons (0-9)
for (let i = 0; i <= 9; i++) {
    document.getElementById(`digit${i}`).addEventListener("click", () => {
        appendDigit(i);
    });
}

// Add event listeners to operator buttons (+, -, ×, ÷)
document.getElementById("add").addEventListener("click", () => {
    appendOperator("+");
});
document.getElementById("subtract").addEventListener("click", () => {
    appendOperator("-");
});
document.getElementById("multiply").addEventListener("click", () => {
    appendOperator("*");
});
document.getElementById("divide").addEventListener("click", () => {
    appendOperator("/");
});
