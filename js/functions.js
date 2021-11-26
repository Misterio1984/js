"use strict";

// Функция инициализируется перед выполением скрипта, можно вызывать в любом месте кода
function calc(a, b){
    return (a+b);
}
console.log(calc(4, 3));

// Функция инициализируется в момент ее объявления, можно вызывать только после ее инициализации
const calcFunc = function(a, b){
    return (a*b);
};
console.log(calcFunc(10, 13));

// Стрелочная функция
const calc2 = (a, b) => { return a * b};
console.log(calc2(11, 130));