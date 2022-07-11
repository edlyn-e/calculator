/* Object Oriented Programming:
    - blueprint for our Calculator object.
*/

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        (this.previousOperandTextElement = previousOperandTextElement),
            (this.currentOperandTextElement = currentOperandTextElement);
        this.clear();
    }

    // clears the screen/display to a blank slate ready for a new entry of numbers
    clear() {
        (this.currentOperand = ""),
            (this.previousOperand = ""),
            (this.operation = undefined);
    }

    // erases only one number at a time
    // creating turning the numbers into a string so we're able to delete characters one at a time
    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    // turning the number data into a string to be able to easily append numbers at the end
    // if statements to prevent user from entering more than one decimal in the display
    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand =
            this.currentOperand.toString() + number.toString();
    }

    // if the user doesn't choose an operator, then the calculation won't be able to proceed
    chooseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.calculate();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand; // prev becomes current so we can enter the next half of the calculation
        this.currentOperand = ""; // this currentOperand then becomes blank ready to be filled
    }

    // the calculation method
    calculate() {
        let calculation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return; //if the current or previous operand are somehow not numbers, the user will not be able to continue

        switch (this.operation) {
            case "+":
                calculation = prev + current;
                break;

            case "−":
                calculation = prev - current;
                break;

            case "×":
                calculation = prev * current;
                break;

            case "÷":
                calculation = prev / current;
                break;
            default:
                return;
        }

        this.currentOperand = calculation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    // updates display with the values and assigns the text to "this.currentOperand"
    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = this.previousOperand;
        }
    }
}

// Interacting with the dom
const numberButtons = document.querySelectorAll(".number"); // NodeList(11)
const operationButtons = document.querySelectorAll(".operator"); // NodeList (4)
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".backspace");
const clearEntryButton = document.querySelector(".clear-entry");
const currentOperandTextElement = document.querySelector(".current-operand");
const previousOperandTextElement = document.querySelector(".previous-operand"); // a hidden property in the HTML and somewhere to store the previous operand so it disappears and increases communication of interactivity
const onCE = document.querySelector(".reset");
const gt = document.getElementsByClassName("grand-total");

const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement,
);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperation(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener("click", (button) => {
    calculator.calculate();
    calculator.updateDisplay();
});

clearEntryButton.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
});

onCE.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
});
