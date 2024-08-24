function operate(operator, num1, num2) {
    switch (operator) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            console.log(`Non-valid operator: ${operator}`);
    }
}

function handleClick(targetContent) {
    switch (targetContent) {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            if (!writeNum2) {
                num1 += targetContent;
                displayedContent = num1;
            } else {
                num2 += targetContent;
                displayedContent = num2;
            }
            break;
        case "+":
        case "-":
        case "*":
        case "/":
            if (!writeNum2) {
                operator = targetContent;
                writeNum2 = true;
                displayedContent = num1;
            } else {
                if (num2.length === 0) {
                    operator = targetContent;
                } else {
                    result = operate(operator, +num1, +num2);
                    num1 = result;
                    num2 = "";
                    displayedContent = result;
                    operator = targetContent;
                }
            }
            break;
        case "=":
            if (writeNum2 && num2.length > 0) {
                result = operate(operator, +num1, +num2);
                num1 = result;
                num2 = "";
                displayedContent = result;
            }
            break;
        case "CLEAR":
            num1 = "";
            num2 = "";
            result = "";
            operator = "";
            displayedContent = "";
            writeNum2 = false;
            break;
        default:
            console.log(`Unforeseen targetContent: ${targetContent}`)
    }
    display.textContent = displayedContent;
}

let num1 = "";
let num2 = "";
let result = "";
let operator = "";
let displayedContent = "";
let writeNum2 = false;

let display = document.querySelector("#display");
let buttons = document.querySelectorAll(".button");
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", e => handleClick(e.target.textContent))
}
