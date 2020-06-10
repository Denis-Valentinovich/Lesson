/*
С этого урока начинаем работать с функционалом интернет-магазина. 
Предположим, есть сущность корзины. Нужно реализовать функционал подсчета стоимости корзины 
в зависимости от находящихся в ней товаров. 
       Товары в корзине хранятся в массиве. Задачи:
         Организовать такой массив для хранения товаров в корзине;
          Организовать функцию countBasketPrice, которая будет считать стоимость корзины.
             */

let priceOne = +prompt("цена1", "");
let quantityOne = +prompt("Колличество1", "");
let priceTwo = +prompt("цена2", "");
let quantityTwo = +prompt("Колличество2", "");
let basket = [
  [+priceOne, +quantityOne],
  [+priceTwo, +quantityTwo],
];

console.log(basket);

function countBasketPrice(array) {
  let summ = 0;
  for (let p = 0; p < array.length; p++) {
    summ = summ + array[p][0] * array[p][1];
  }
  return summ;
}
console.log(countBasketPrice(basket));
