let myModule = require('./script');

let moduleCustom = new myModule();

console.log(moduleCustom.hello());
console.log(moduleCustom.goodbye());

import {one, two} from "./index";

console.log(one);
console.log(two);
console.log(one + two);