let current = ''
let previous = ''
let operation =''
const numberButtons = document.querySelectorAll('#num');
const operatorButtons = document.querySelectorAll('#op')
const clearButton = document.querySelector('.clear')
const deleteButton = document.querySelector('.delete')
clearButton.addEventListener('click',clear)
deleteButton.addEventListener('click', del)

numberButtons.forEach(button=>button.addEventListener('click',(e)=>{
    updateNumber(e.target.value)
}))
operatorButtons.forEach(button=>{
    button.addEventListener('click',(e)=>{
        chooseOperation(e.target.value)
    })
})
const display = document.querySelector('.display')
const equals = document.querySelector('.equals')
equals.addEventListener('click',sum)
window.addEventListener('keydown',e=>{
    switch(e.key){
        case '0':
            document.querySelector('#num0').click()
            break;
        case '1':
            document.querySelector('#num1').click()
            break;
        case '2':
            document.querySelector('#num2').click()
            break;
        case '3':
            document.querySelector('#num3').click()
            break;
        case '4':
            document.querySelector('#num4').click()
            break;
        case '5':
            document.querySelector('#num5').click()
            break;
        case '6':
            document.querySelector('#num6').click()
            break;
        case '7':
            document.querySelector('#num7').click()
            break;
        case '8':
            document.querySelector('#num8').click()
            break;
        case '9':
            document.querySelector('#num9').click()
            break;
        case 'Backspace':
            document.querySelector('.delete').click()
            break;
        case 'Enter':
            document.querySelector('.equals').click()
            break;
        case '+':
            document.querySelector('#add').click()
            break;
        case '-':
            document.querySelector('#sub').click()
            break;
        case '/':
            document.querySelector('#divide').click()
            break;
        case '*':
            document.querySelector('#multi').click()
            break;
    }
})
function updateNumber(num){
    current= current + num
    display.textContent = current
}
function clear(){
    current = ''
    previous = ''
    operation = ''
    display.innerHTML= ''
}
function chooseOperation(op){
    if(current == '')return
    if(previous !== ''){
        sum()
    }
    operation = op
    previous = current
    current = ''
}
function updateDisplay (){
    display.textContent = `${current}`
}
function sum(){
    let sum
    
    let prevNum = parseInt(previous);
    let currNum = parseInt(current);
    if(isNaN(prevNum)|| isNaN(currNum))return
    
    if(operation === '+'){
        sum = prevNum + currNum
    }
    if(operation === '-'){
        sum = prevNum - currNum
    }
    if(operation === '*'){
        sum = prevNum * currNum
    }
    if(operation === '/'){
        if(prevNum || currNum === 0){
            sum = 'LMAO'
        }
        if(prevNum && currNum > 0){
        sum = prevNum / currNum
        }
    };
    if(!Number.isInteger(sum)){
        sum = sum.toFixed(2)
    }
    current = sum
    operation = undefined
    previous = ''
    updateDisplay()
    
 
}
function del(){
    if(current == '')return
    let stop =current.length - 1
    current=current.slice(0,stop)
    updateDisplay()
}