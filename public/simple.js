function SimpleOperation() {
    function convertUpperCase(strval){
        return strval.toUpperCase().replace(/-/g, ' ');
    }
    function convertLowerCase(strval){
        return strval.toLowerCase().replace(/-/g, ' ');
    }
    return {convertUpperCase, convertLowerCase};
}
module.exports = SimpleOperation();