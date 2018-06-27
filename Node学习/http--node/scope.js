var gloableVariable = 'This is globle variable';

function globalFunction() {
    var localVariable = 'This is loval variable';

    console.log('Visit global/local variable');
    console.log(gloableVariable);
    console.log(localVariable);

    gloableVariable = "This is change variable";
    console.log(gloableVariable);

    function localFunction() {
        var innerLocalVariable = "This is inner local varibale";

        console.log('Visit global/local/innerLocal variable');
        console.log(gloableVariable);
        console.log(localVariable);
        console.log(innerLocalVariable);
    }
    localFunction();
}

globalFunction()