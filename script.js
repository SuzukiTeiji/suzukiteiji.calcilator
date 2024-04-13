function clearScreen() {
    document.getElementById('currentOperationScreen').innerText = '0';
}

function appendDecimal() {
    // Decimal logic goes here
}

function appendDigit(digit) {
    var currentScreen = document.getElementById('currentOperationScreen').innerText;
    if (currentScreen === '0') {
        document.getElementById('currentOperationScreen').innerText = digit;
    } else {
        document.getElementById('currentOperationScreen').innerText += digit;
    }
}




// // appendDecimal() 関数の 2 回定義を修正
// function appendDecimal() {
//     var screen = document.getElementById("currentOperationScreen");
//     var currentNumber = screen.textContent;

//     // すでに小数点が存在する場合や最初の数値が入力されていない場合は何もしない
//     if (currentNumber.includes(".") || currentNumber === "0") {
//         return;
//     }

//     // 小数点を追加して画面に表示
//     screen.textContent += ".";
// }

// // Add event listener to equals button (=)
// document.getElementById("equals").addEventListener("click", calculateResult);

// // Add event listeners to digit buttons (0-9)
// for (let i = 0; i <= 9; i++) {
//     document.getElementById(`digit${i}`).addEventListener("click", () => {
//         appendToScreen(i);
//     });
// }

// // Add event listeners to operator buttons (+, -, ×, ÷)
// document.getElementById("add").addEventListener("click", () => {
//     appendToScreen("+");
// });
// document.getElementById("subtract").addEventListener("click", () => {
//     appendToScreen("-");
// });
// document.getElementById("multiply").addEventListener("click", () => {
//     appendToScreen("×");
// });
// document.getElementById("divide").addEventListener("click", () => {
//     appendToScreen("÷");
// });
