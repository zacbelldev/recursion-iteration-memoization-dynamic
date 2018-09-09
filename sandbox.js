function recursion_fibonacci(num) {
    if (num < 0 || num == "")
        return (document.getElementById("output").innerHTML = "Input is blank or negative.");
    else if (num < 2)
        return (document.getElementById("output").innerHTML = num);
    else
        return (document.getElementById("output").innerHTML = recursion_fibonacci(num - 1) + recursion_fibonacci(num - 2));
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
    if (num < 0 || num == "")
        return (document.getElementById("output").innerHTML = "Input is blank or negative.");
    else if (num < 2)
        return (document.getElementById("output").innerHTML = num);
    else
        return (document.getElementById("output").innerHTML = f);
}



var fibonacci = (function() {
  var memo = {};

  function f(n) {
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
