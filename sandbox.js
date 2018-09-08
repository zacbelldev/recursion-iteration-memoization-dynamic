function factorial(num) {
    document.getElementById("output").innerHTML = "Answer:";
    var count = 0;
    if (num === 0) {
        return 1;
    }
    count += num * factorial(num - 1);
    return (document.getElementById("output").innerHTML = count);
}


//function fibonacci(num) {
//    var a = 1,
//        b = 0,
//        temp;
//
//    while (num >= 0) {
//        temp = a;
//        a = a + b;
//        b = temp;
//        num--;
//    }
//
//    console.log(b);
//    return (document.getElementById("output").innerHTML = b);
//}


function fibonacci(num) {
    if (num <= 1) return (document.getElementById("output").innerHTML = 1);

    return (document.getElementById("output").innerHTML = fibonacci(num - 1) + fibonacci(num - 2));
}
