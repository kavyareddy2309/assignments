function innerFunction() {
    console.log("This is the inner function");
}

function outerFunction() {
    console.log("This is the outer function");
    innerFunction();
}


outerFunction();
