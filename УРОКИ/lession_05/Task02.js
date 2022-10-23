'use strict'
//Задача №2 урок 5
const str = "привеТ Мир";

const modifityString = (str) => {
    return str.toLowerCase().replace(str.charAt(0), str.charAt(0).toUpperCase())
};

const result = modifityString(str);

console.log(result);