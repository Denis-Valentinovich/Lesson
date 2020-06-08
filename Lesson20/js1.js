var rndNumber; //случайное число о 1 до 9999
var number; //число вводимое пользователем
var n; // колличество попыток

n = 0;

rndNumber = Math.round(Math.random(0 - 9999) * 1000);

alert(rndNumber);
alert(
  "Поиграем в игру угадай число. Угадайте какое число я загадал от 1 до 1000"
);
findNumber();

function findNumber() {
  n = n + 1; // считаем попытки

  number = undefined; // обнуляем

  number = prompt(""); // просим ввести попытку

  if (number > rndNumber) {
    alert("Загадонное число меньше Вашего, попробуйте еще");
    findNumber();
  } else if (number < rndNumber) {
    alert("Загаданное число больше Вашего, попробуйте еще");
    findNumber();
  } else return;
 
}
alert("Поздравляю вы угадали, количество попыток " + (n));