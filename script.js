let output = document.getElementById("output");

function appendNumber(num){
    output.value +=num;
}
function appendOperator(op){
    output.value +=op;
}
function clearOutput(){
    output.value = "";
}

function result(result){
    try {
        output.value = eval(output.value)
    } catch (error) {
        alert(error);
    }
}

function appendBack() {
    output.value = output.value.slice(0, -1)
}

function appendLog(){
    const num = parseFloat(output.value);
    if(num > 0){
        output.value = Math.log10(num)
    }
    else{
        alert("log is defined only for positive numbers")
    }
}