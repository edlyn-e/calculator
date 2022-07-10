class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        (this.previousOperandTextElement = previousOperandTextElement),
            (this.currentOperandTextElement = currentOperandTextElement);
        this.clear();
    }

    clear() {
        (this.currentOperand = "0"),
            (this.previousOperand = ""),
            (this.operation = undefined);
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        if (this.currentOperand.toString() < 1) {
            this.clear();
        }
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand =
            this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.compute();
        }
        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computation;
        const prev = parseFloat(this.previousOperand);
        const current = parseFloat(this.currentOperand);
        if (isNaN(prev) || isNaN(current)) return;

        switch (this.operation) {
            case "+":
                computation = prev + current;
                break;

            case "−":
                computation = prev - current;
                break;

            case "×":
                computation = prev * current;
                break;

            case "÷":
                computation = prev / current;
                break;
            default:
                return;
        }

        this.currentOperand = computation;
        this.operation = undefined;
        this.previousOperand = "";
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.currentOperand;
        if (this.operation != null) {
            this.previousOperandTextElement.innerText = this.previousOperand;
        }
    }
}

const numberButtons = document.querySelectorAll(".number"); // NodeList(11)
const operationButtons = document.querySelectorAll(".operator"); // NodeList (4)
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".backspace");
const clearEntryButton = document.querySelector(".clear-entry");
const previousOperandTextElement = document.querySelector(".previous-operand");
const currentOperandTextElement = document.querySelector(".current-operand");
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
    calculator.compute();
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
