const pinRegex = RegExp("^([1-9])(\\S){2}(\\s)?\\S{2}[0-9]$")

function pinCodeTest(pinCode){
    if(pinRegex.test(pinCode)) console.log("Valid PinCode!")
    else throw "Invalid PinCode!"
}

try{
    pinCodeTest("400088");
}catch(e){
    console.error(e);
}

try{
    pinCodeTest("400 088");
}catch(e){
    console.error(e);
}