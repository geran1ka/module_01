'use strict'
//задача №5 урок 4
//const income = +prompt('Введите сумму Вашего дохода: ');
/*
const income = 14999;
if(income < 15000) {
    console.log(`Налог составляет: ${(income * 0.13).toFixed(2)} руб.`);
} else if (15000 <= income && income <= 50000){
    console.log(`Налог составляет: ${(income * 0.2).toFixed(2)} руб.`);
} else {
    console.log(`Налог составляет: ${(income * 0.3).toFixed(2)} руб.`);
}
*/
//Задача №6 урок 4
const income = 60055;
let nalog = NaN;
if(income < 15000) {
    nalog = income * 0.13;
    console.log(`Налог составляет: ${nalog.toFixed(2)} руб.`);
} else if (15000 <= income && income <= 50000){
    nalog = 15000 * 0.13 + (income - 15000) * 0.2
    console.log(`Налог составляет: ${nalog.toFixed(2)} руб.`);
} else {
    nalog = 15000 * 0.13 + 35000 * 0.2 + (income - 50000) * 0.3
    console.log(`Налог составляет: ${nalog.toFixed(2)} руб.`);
}
