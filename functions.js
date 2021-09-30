console.log(Math.random());
// function call becuase it has open and close paraenthesis ()

console.log(Date.now());

console.log('information to log');

// Math.floor rounds down
console.log(Math.floor(5.324141));

// Return Values
const myRandomNum = Math.random();
console.log(myRandomNum);

const myButton = document.getElementById('button');

function helloWorld(){
    // console.log('Hello world!');
    return 'Hello World';
}

const helloWorldArrow = () => {
    console.log('hello world! <=');
};

// return goes to console log below why
const hello = helloWorld();
console.log(hello);
// Below does not run the function, but pulls it.
console.log(helloWorld);

helloWorldArrow();
