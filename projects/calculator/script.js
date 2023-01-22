class Calculator {

    constructor(prevOperandText,currentOperandText) {

        this.prevOperandText = prevOperandText;
        this.currentOperandText = currentOperandText;
        this.clear();

    }

    clear() {

        this.prevOperand = '';
        this.currentOperand = '';
        this.operation = undefined;
        this.updateDisplay();

    }

    delete() {

        if(this.currentOperand === '') {return;}
        this.currentOperand = this.currentOperand.slice(0,-1);
        this.updateDisplay();

    }

    appendNumber(number) {

        if(number ==='.' && this.currentOperand.includes('.')) {return;}
        this.currentOperand = this.currentOperand.toString() + number.toString();
        var secondHalf = '';
        var firstHalf = this.currentOperand;
        this.currentOperand = this.thousands_separators(this.currentOperand);
        this.updateDisplay();

    }

    chooseOperation(operation) {

        if(this.currentOperand === '') {return;}
        if(this.prevOperand !== '') {

            this.compute();

        }this.prevOperand = this.currentOperand.toString() + operation.toString();
        this.currentOperand = '';
        this.updateDisplay();

    }

    compute() {

        //console.log(current+ "  "+prev);
        this.operation = this.prevOperand.slice(-1);
        this.prevOperand = this.prevOperand.split(',').join("");
        this.currentOperand = this.currentOperand.split(',').join("");
        var prev = parseFloat(this.prevOperand.split(this.operation)[0]);
        var current = parseFloat(this.currentOperand);
        if(isNaN(current) || isNaN(prev)) {
            console.log("nan");
            return;
        }
        //console.log("Not nan!!");
        let computeNum = 0;
        switch(this.operation) {

            case '+' : computeNum = prev+current;
                        break;
            case '-' : computeNum = prev-current;
                        break;
            case '*' : computeNum = current * prev;
                        break;
            case '÷' : computeNum = prev/current;
                        break;
            default : return;

        } this.currentOperand = computeNum;
        this.currentOperand = this.thousands_separators(this.currentOperand);
        this.prevOperand = '';
        this.updateDisplay();
        this.operation = undefined;

    }

    updateDisplay() {

        this.currentOperandText.innerText = this.currentOperand;
        this.prevOperandText.innerText = this.prevOperand;

    }  
    
    thousands_separators(num) {

        //console.log("<br>NUM : "+num);
        num = num.toString();
        num = num.split(',').join("");
        var numParts = num.toString().split(".");
        //console.log("numparts : "+numParts);
        numParts[0] = numParts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        //console.log("numparts[0] : "+numParts[0]);
        return numParts.join(".");

    }

}



const numberButtons = document.querySelectorAll('[data-numbers]');
const dataOperators = document.querySelectorAll('[data-operator]');
const prevOperandText = document.querySelector('[data-previous-operand]');
const currentOperandText = document.querySelector('[data-current-operand]');
const allClearButton = document.querySelector('[data-all-clear]');
const deleteButton = document.querySelector('[data-delete]');
const equalsButton = document.querySelector('[data-equals]');

calculator = new Calculator(prevOperandText,currentOperandText);
allClearButton.addEventListener('click',() => {

    calculator.clear();

});

numberButtons.forEach(number => {

    number.addEventListener('click', () => {

        calculator.appendNumber(number.innerText);

    });

});

deleteButton.addEventListener('click', ()=> {

    calculator.delete();

});

dataOperators.forEach(operator=>{

    operator.addEventListener('click', () => {

        calculator.chooseOperation(operator.innerText);

    })

})

equalsButton.addEventListener('click',() => {

    calculator.compute();

})