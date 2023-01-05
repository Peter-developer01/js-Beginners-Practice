function myModule() {
    this.hello = function() {
        return "Hello";
    };

    this.goodbye = function() {
        return 'goodbye!';
    };
}

module.exports = myModule;

export let one = 1;

let two = 2;

export {two};

export function sayHi() {
    console.log('Hello!');
}