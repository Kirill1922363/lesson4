function calculateSquare() {
    const num = document.getElementById("number1").value;
    const square = num * num;
    document.getElementById("result1").innerHTML = 'Квадрат числа: ' + num + ' = ' + square;
}
function calculateCube() {
    const num = document.getElementById("number2").value;
    const square = num * num * num;
    document.getElementById("result2").innerHTML = "Kуб числа: " + num + " = " + square;
}
function calculateRemainder() {
    const num = document.getElementById("number3").value;
    const remainder = num % 5;
    document.getElementById("result3").innerHTML = "Залишок від ділення " + num + " на 5 =" + remainder;
}
function checkEven() {
    const num = document.getElementById("number4").value;
    const isEven = num % 2 === 0;
    
    if (isEven) {
        document.getElementById("result4").innerHTML = "Число " + num + " є парним";
    } else {
        document.getElementById("result4").innerHTML = 'Число ' + num + " є непарним";
    }
}
function checkNumbers() {
    let result = "";
    
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            result += "Число " + i +  " є парним ";
        } else {
            result += "Число " + i +  " є непарним ";
        }
    }
    
    document.getElementById("result5").innerHTML = result;
}
const colors = ["red", "blue", "green", "yellow", "purple"];
let currentColorIndex = -1;

function changeBackgroundColor() {
    currentColorIndex++;
    
    if (currentColorIndex >= colors.length) {
        currentColorIndex = 0;
    }
    
    document.body.style.backgroundColor = colors[currentColorIndex];
}