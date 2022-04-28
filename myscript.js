

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')

const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

let selectedOperator = ''

//display clicked numbers
numberButtons.forEach(function (i) {
    i.addEventListener('click', function() {
        value = i.innerHTML
        displayValue(value)
    });
  });

  function displayValue(value) {
    currentOperandTextElement.innerHTML += value;
  };

//clear button
allClearButton.addEventListener('click', function() {
    currentOperandTextElement.innerHTML = ''
    previousOperandTextElement.innerHTML = ''
});

//delete button
deleteButton.addEventListener('click', function() {
    let number = currentOperandTextElement.innerHTML
    let newNum = number.split('')
    newNum.pop()
    let answer = newNum.join('')
    currentOperandTextElement.innerHTML = answer
});


//operation buttons
operationButtons.forEach(function (i) {
    i.addEventListener('click', function() {
        previousOperandTextElement.innerHTML = currentOperandTextElement.innerHTML
        currentOperandTextElement.innerHTML = ''
        selectedOperator = i.innerHTML
        console.log(selectedOperator)
})
})


//equals button
equalsButton.addEventListener('click', function() {
    let previous = previousOperandTextElement.innerHTML
    let current = currentOperandTextElement.innerHTML

    if(selectedOperator == '+') {
        previousOperandTextElement.innerHTML = ''
        currentOperandTextElement.innerHTML = (Number(previous) + Number(current))
    } else if (selectedOperator == '-') {
        previousOperandTextElement.innerHTML = ''
        currentOperandTextElement.innerHTML = (Number(previous) - Number(current))
    } else if (selectedOperator == '*') {
        previousOperandTextElement.innerHTML = ''
        currentOperandTextElement.innerHTML = (Number(previous) * Number(current))
    } else if (selectedOperator == '÷') {
        previousOperandTextElement.innerHTML = ''
        currentOperandTextElement.innerHTML = (Number(previous) / Number(current))
    }
})