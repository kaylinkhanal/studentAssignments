debugger;
function child(){   // function made like this is created using var. So not so efficient. So, Use arrow function with const.
    debugger;
    return 10;
}

function parent(){
    debugger;
    return child() + 30;
}

debugger;
parent();
debugger;

// review callstack by inspecting in browser



// HW
// Study closures in js