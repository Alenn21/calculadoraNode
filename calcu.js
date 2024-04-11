function calculadora(num1, num2, operador){
    switch(operador){
        case 'suma':
            return num1+num2;
        break;
        case 'resta':
            return num1-num2;
            break;
        case 'multiplicacion':
            return num1*num2;
            break;
        case 'division':
            if(num2!==0){
                return num1/num2;
            }else{
                return "No se puede dividir entre 0";
            }
            break;
        case 'modulo':
            return num1%num2;
            break;
        default:
            return "Elige una opción válida";
            break;
    }
}
 module.exports = calculadora;