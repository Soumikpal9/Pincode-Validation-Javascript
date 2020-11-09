const pinRegex = RegExp("^\\S{6}$")

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
    pinCodeTest("40008878");
}catch(e){
    console.error(e);
}