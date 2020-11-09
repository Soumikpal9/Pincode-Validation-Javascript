const pinRegex = RegExp("^([1-9])(\\S){5}$")

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
    pinCodeTest("A00088");
}catch(e){
    console.error(e);
}