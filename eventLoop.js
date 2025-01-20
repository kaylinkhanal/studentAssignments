debugger;   
function child(){
    debugger;
    return 20;
}

    function parent(){
        debugger;
        return child() + 10;
    }
   

debugger;
parent();