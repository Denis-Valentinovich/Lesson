var basketPrices = []; //создаём пустой массив

basketPrices.push(1, 2, 3, 4, 5); //заполняем какими-то ценами
console.log(basketPrices);

function countBasketPrice(array) {
  let sum = 0;
  for (let i4 = 0; i4 < array.length; i4++) {
    sum = sum + array[i4];
  }
  return sum;
}

console.log(countBasketPrice(basketPrices));
