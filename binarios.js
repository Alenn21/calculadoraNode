function conversion(numero, operacion) {
    switch (operacion) {
        case 'binario a decimal':
            return parseInt(numero, 2);
        case 'decimal a binario':
            return numero.toString(2);
        case 'binario a hexadecimal':
            return parseInt(numero, 2).toString(16);
        case 'hexadecimal a binario':
            return parseInt(numero, 16).toString(2);
        case 'decimal a hexadecimal':
            return numero.toString(16);
        case 'hexadecimal a decimal':
            return parseInt(numero, 16);
        default:
            return "Operación no válida";
    }
}
module.exports = conversion;