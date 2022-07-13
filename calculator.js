/* Object Oriented Programming:
    - blueprint for our Calculator object.
*/

class Calculator {
    constructor(secondValueTextElement, firstValueTextElement) {
        (this.secondValueTextElement = secondValueTextElement),
            (this.firstValueTextElement = firstValueTextElement);
        this.clear();
    }

    // clears the screen/display to a blank slate ready for a new entry of numbers
    clear() {
        (this.firstValue = ""),
            (this.secondValue = ""),
            (this.operator = undefined);
    }

    // clears the entry of that value, but not the whole equation.
    clearEntry() {
        this.firstValue = this.firstValue.slice(-1, 0);
    }

    // erases only one number at a time
    // creating turning the numbers into a string so we're able to delete characters one at a time
    delete() {
        this.firstValue = this.firstValue.toString().slice(0, -1);
    }

    // turning the number data into a string to be able to easily append numbers at the end
    // if statements to current user from entering more than one decimal in the display
    appendNumber(number) {
        if (this.firstValue.length > 10) return;
        if (number === "." && this.firstValue.includes(".")) return;
        if (this.firstValue.length > 0 && this.firstValue[0] === "0") {
            // if the number entered is 0 and the user is trying to type more 0's, the calculator won't register the additional zeros to keep the interface neat and tidy
            this.firstValue = this.firstValue.substring(
                1,
                this.firstValue.length,
            );
        }
        this.firstValue = this.firstValue.toString() + number.toString();
    }

    // if the user doesn't choose an operator, then the calculation won't be able to proceed
    chooseOperator(operator) {
        if (this.firstValue === "") return;
        if (this.secondValue !== "") {
            this.calculate();
        }
        this.operator = operator;
        this.secondValue = this.firstValue; // first becomes second so we can enter the next half of the calculation
        this.firstValue = ""; // this firstValue then becomes blank ready to be filled
    }

    // the calculation method
    calculate() {
        let calculation;

        const first = parseFloat(this.secondValue);
        const second = parseFloat(this.firstValue);
        if (isNaN(first) || isNaN(second)) return; //if the second or first operand are somehow not numbers, the user will not be able to continue

        switch (this.operator) {
            case "+":
                calculation = first + second;
                break;

            case "−":
                calculation = first - second;
                break;

            case "×":
                calculation = first * second;
                break;

            case "÷":
                calculation = first / second;
                break;
            default:
                return;
        }

        this.firstValue = calculation.toString().slice(0, 11);
        this.operator = undefined;
        this.secondValue = "";
    }

    // updates display with the values and assigns the text to "this.firstValue"
    updateDisplay() {
        this.firstValueTextElement.innerText = this.firstValue;
        if (this.operator != null) {
            this.secondValueTextElement.innerText = this.secondValue;
        }
    }
}

// Interacting with the dom
const numberButtons = document.querySelectorAll(".number"); // NodeList(11)
const operatorButtons = document.querySelectorAll(".operator"); // NodeList (4)
const equalsButton = document.querySelector(".equals");
const deleteButton = document.querySelector(".backspace");
const clearEntryButton = document.querySelector(".clear-entry");
const firstValueTextElement = document.querySelector(".first-value");
const secondValueTextElement = document.querySelector(".second-value");
// secondValueText a hidden property in the HTML and somewhere to store the other operand so it disappears and increases communication of interactivity
const onC = document.querySelector(".reset");
const gt = document.getElementsByClassName("grand-total");

const calculator = new Calculator(
    secondValueTextElement,
    firstValueTextElement,
);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        calculator.chooseOperator(button.innerText);
        calculator.updateDisplay();
    });
});

equalsButton.addEventListener("click", (button) => {
    calculator.calculate();
    calculator.updateDisplay();
});

clearEntryButton.addEventListener("click", (button) => {
    calculator.clearEntry();
    calculator.updateDisplay();
});

onC.addEventListener("click", (button) => {
    calculator.clear();
    calculator.updateDisplay();
});

deleteButton.addEventListener("click", (button) => {
    calculator.delete();
    calculator.updateDisplay();
});
