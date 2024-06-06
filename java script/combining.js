function innerFunction() {
    console.log("This is the inner function");
}

function outerFunction(shouldDisplay) {
    console.log("This is the outer function");
    
    if (shouldDisplay) {
        innerFunction();
    } else {
        console.log("The inner function won't be called.");
    }
}


outerFunction(true); 
outerFunction(false); 