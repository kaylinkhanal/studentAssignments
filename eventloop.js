let a = 10 //global
debugger;
function parent(){
    let b = 20 // local<--- parent
    function d(){
        let f = 50
        function z(){
            return 30
        }
        return 40 + f
    }
    function child(){
        let c = 30 // local<----child
        return  a + b + c + d() + f + z()
    }
    return child()  
}
parent()


// //Closures:
// 1. Feature of Js where outer function can used in inner function.
// 2. 








