'use strict'
//Задача №3 урок 5

const modifyString = (str) => {
    let str2 = ''
    for(let i = str.length-1; i >= 0; --i){
        str2 += str[i];  
    }
    return str2   
}
console.log(modifyString("Привет мир"))
console.log(modifyString("Тук тук Дима"))