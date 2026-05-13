function calculate() {
    let firstnumber = parseInt(document.getElementById("number1").value)
    let secondnumber = parseInt(document.getElementById("number2").value)
    let operation = document.getElementById("operacion").value
    console.log(operation)

    let result

    document.getElementById("result").textcontent = result

    switch (operation) {
        case "suma":
            result = firstnumber + secondnumber
            break;
        
            
        case "resta":
        result = firstnumber - secondnumber
        break;  
        
        case "multiplicacion":
            result = firstnumber * secondnumber
            break;

            case "division":
                result = firstnumber / secondnumber
                break;
    }
console.log(`El resultado es ${result}`)
document.getElementById("result").textContent = `El resultado es ${result}`
}
const getNum = (id) => parseInt(document.getElementById(id).value)//esta primera linea nos ayuda a obtener el valor del input 
const getOperation = () => documento.getElementById("operacion").value// en esta segunda linea nos ayuda a que no se valla a devolver a llamar el valor de input cada que uno hace la operacion//
const calculate = () => {
    
}