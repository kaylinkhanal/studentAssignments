function parent(){
    debugger;
    let a  = 20

    function haha(){
        x = 20
        return x
    }

    function child(){
        return a + haha()       //closure is all the reference to the components(variables and functions) in surrounding state/lexical environment
        // lexical environment is the environment in the block scope of which this function is part of. Here its parent functions local envioronment of which function child is a part of
        // it provides security and protection to variable
    }

    return child()
}

x = parent()

console.log(x)