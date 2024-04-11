function conversion(numero, operacion) {
    switch (operacion) {
        case 'binario a decimal':
            return parseInt(numero, 2);
            break;
        case 'decimal a binario':
            return numero.toString(2);
            break;
        case 'binario a hexadecimal':
            return parseInt(numero, 2).toString(16);
            break;
        case 'hexadecimal a binario':
            return parseInt(numero, 16).toString(2);
            break;
        case 'decimal a hexadecimal':
            return numero.toString(16);
            break;
        case 'hexadecimal a decimal':
            return parseInt(numero, 16);
            break;
        default:
            return "Operación no válida";
            break;
    }
}
module.exports = conversion;