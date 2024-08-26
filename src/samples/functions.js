(function (window, document) {

    sayHello('friend');
    sayHello();

    let fibonacci = fibonacci(10);
    let fibonacci2 = fibonacci2(10);

    console.log(fibonacci);
    console.log(fibonacci2);

})(window, document);

function sayHello(name) {
    if (name) {
        console.log(`Hello, ${name}!`);
    } else {
        console.log('Hello, stranger!');
    }
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacci2 = (n) => {
    if (n <= 1) return n;
    return fibonacci2(n - 1) + fibonacci2(n - 2);
}