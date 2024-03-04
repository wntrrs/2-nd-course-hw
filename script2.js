let password = 'пароль';
let userPassword = prompt('Введите пароль');
if (userPassword === password) {
  console.log('Пароль введен верно');
} else {
  console.log('Пароль введен неправильно');
}


let c;
c = 0;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
c = 10;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
c = -3;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}
c = 2;
if (c > 0 && c < 10) {
  console.log('Верно');
} else {
  console.log('Неверно');
}

let number1 = 20;
let number2 = 200;
if (number1 > 100 || number2 > 100) {
  console.log('Верно');
}
else {
  console.log('Неверно');
}

let a = '2';
let b = '3';
alert((Number(a) + Number(b)));

let monthNumber = Number(prompt('Укажите номер месяца'));
switch (monthNumber) {
  case 1:
  case 2:
  case 12:
    console.log('зима');
    break;
  case 3:
  case 4:
  case 5:
    console.log('весна');
    break;
  case 6:
  case 7:
  case 8:
    console.log('лето');
    break;
  case 9:
  case 10:
  case 11:
    console.log('осень');
    break;
  default:
    console.log('ввели что-то не то');
    break;
}