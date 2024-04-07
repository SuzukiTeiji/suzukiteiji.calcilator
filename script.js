function appendDecimal() {
    var screen = document.getElementById("currentOperationScreen");
    var currentNumber = screen.textContent;

    // すでに小数点が存在する場合や最初の数値が入力されていない場合は何もしない
    if (currentNumber.includes(".") || currentNumber === "0") {
        return;
    }

    // 小数点を追加して画面に表示
    screen.textContent += ".";
}

// Add event listener to equals button (=)
document.getElementById("equals").addEventListener("click", calculateResult);
function appendDecimal() {
    var screen = document.getElementById("currentOperationScreen");
    var currentNumber = screen.textContent;

    // すでに小数点が存在する場合や最初の数値が入力されていない場合は何もしない
    if (currentNumber.includes(".") || currentNumber === "0") {
        return;
    }

    // 小数点を追加して画面に表示
    screen.textContent += ".";
}
