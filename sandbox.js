var resultDiv = document.getElementById("output");
//var durationDiv = document.getElementById("outputTime");

function recursion_fibonacci(num) {
    
    if (num < 2) { 
        return (resultDiv.innerHTML = num); 
    } else {
        var result = recursion_fibonacci(num - 1) + recursion_fibonacci(num - 2);        
        return (resultDiv.innerHTML = result);
    }
}

function iteration_fibonacci(num) {
    var a = 0,
        b = 1,
        f = 1;
    for (var i = 2; i <= num; i++) {
        f = a + b;
        a = b;
        b = f;
    }
    if (num < 2)
        return (resultDiv.innerHTML = num);
    else
        return (resultDiv.innerHTML = f);
}

function memoization_fibonacci(num, memo) {
    memo = memo || {};

    if (memo[num]) return memo[num];
    
    if (num < 2)
        return (resultDiv.innerHTML = num);
    else
        return (resultDiv.innerHTML = memo[num] = memoization_fibonacci(num - 1, memo) + memoization_fibonacci(num - 2, memo));
}
