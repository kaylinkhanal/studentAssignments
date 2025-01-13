function child() {
    debugger
    return 10;
}

function parent() {
    debugger;
    return child() + 30;
}

debugger;
parent();
debugger;