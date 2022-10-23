'use strict'

//const income = +prompt('Введите сумму Вашего дохода: ');

const income = 14999;
if(income < 15000) {
    console.log(`Налог составляет: ${(income * 0.13).toFixed(2)} руб.`);
} else if (15000 <= income && income <= 50000){
    console.log(`Налог составляет: ${(income * 0.2).toFixed(2)} руб.`);
} else {
    console.log(`Налог составляет: ${(income * 0.3).toFixed(2)} руб.`);
}


