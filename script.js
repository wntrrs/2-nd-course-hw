let a;
a = 10;
alert(a);
a = 20;
alert(a);

let firstIphone = 2007;
alert(firstIphone);

let creator = 'Brendan Eich';
alert(creator);

let c = 10;
let d = 2;
alert(c + d);
alert(c - d);
alert(c * d);
alert(c / d);

let result = 2 ** 5;
alert(result);

let e = 9;
let f = 2;
let modulo = e % f;
alert(modulo);

let num = 1;
num = num += 5;
num = num -= 3;
num = num *= 7;
num = num /= 3;
num = num++;
num = num--;
alert(num);

let age = Number(prompt('Сколько вам лет?'));
alert(age);

let user = {
    name: 'abcdef',
    age: 77,
    isAdmin: true
};
user['city of residence'] = 'Moscow';
user.age = 20;
delete user['city of residence'];
let info = prompt('Какую информацию хотите узнать о пользователе?', 'name');
alert(user[info]);

let userName = prompt('Как вас зовут?');
alert(`Привет, ${userName}!`);