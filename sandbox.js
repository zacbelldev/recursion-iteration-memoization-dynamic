function recursion_fibonacci(num) {
    if (num <= 1) return 1;
    var s = [];
    s.push(recursion_fibonacci(num - 1) + recursion_fibonacci(num - 2) + ", ");
//    s.reverse();

    return (document.getElementById("output").innerHTML = s);




    //    var s = "1, ";
    //
    //    s += f + ", ";
    //    if (!num <= 1)
    //        s += recursion_fibonacci(num - 1) + recursion_fibonacci(num - 2);
    //    
    //    if (num < 0)
    //        return ;
    //    else if (num == 0)
    //        return 0;
    //    else
    //        return (document.getElementById("output").innerHTML = s.replace(/,\s*$/, ""));
}

function iteration_fibonacci(num) {
    var a = 0,
        b = 1,
        f = 1;
    var s = "1, ";
    for (var i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
        s += f + ", ";
    }
    if (num < 0)
        return;
    else if (num == 0)
        return 0;
    else
        return (document.getElementById("output").innerHTML = s.replace(/,\s*$/, ""));
}


//function memoization_fibonacci(num) {
//    var a = 0,
//        b = 1,
//        f = 1;
//    var s = "1, ";
//    for (var i = 2; i <= num; i++) {
//        f = a + b;
//        a = b;
//        b = f;
//        s += f + ", ";
//    }
//    if (num < 0)
//        return;
//    else if (num == 0)
//        return 0;
//    else
//        return (document.getElementById("output").innerHTML = s.replace(/,\s*$/, ""));
//}







var fibonacci = (function () {
    var memo = {};

    function memoization_fibonacci(num) {
        var value;

        if (n in memo) {
            value = memo[n];
        } else {
            if (n === 0 || n === 1)
                value = n;
            else
                value = f(n - 1) + f(n - 2);

            memo[n] = value;
        }

        return value;
    }

    return f;
})();
