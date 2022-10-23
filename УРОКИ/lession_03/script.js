const name = prompt('Наименование товара: ');
const count = +prompt('Количество товара: ');
const category = prompt('Категория товара: ');
const price = +prompt('Цена товара: ');

console.log(`На складе ${count} единицы товара ${name} на сумму ${count * price} деревянных`);

