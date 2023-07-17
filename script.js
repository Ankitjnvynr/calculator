
function clearResult() {
    document.getElementById("result").value = '';
}

function deleteLastCharacter() {
    var currentResult = document.getElementById("result").value;
    document.getElementById("result").value = currentResult.slice(0, -1);
}

function appendCharacter(character) {
    var currentResult = document.getElementById("result").value;
    document.getElementById("result").value = currentResult + character;
}

function calculateResult() {
    var currentResult = document.getElementById("result").value;
    try {
        var result = eval(currentResult);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = 'Error';
    }
}


function myFunction() {
    console.log("hii i am toofaan")
    var element = document.getElementById("myDIV");
    element.classList.toggle("calculator-dark");
    bb.classList.toggle("bg-black");
}
