for (let i = 0; i < 2; i++) {
    console.log('Привет');
}

for (let i = 1; i <= 5; i++) {
    console.log(i);
}

for (let i = 7; i <= 22; i++) {
    console.log(i);
}

let obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
}
for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}

let q = 0;
let n;
for (n = 1000, i = 1; n >= 50; i++) {
    n /= 2;
    q++;
}
console.log(n);
console.log(q);

for (n = 7, i = 1; n <= 31; i++) {
    console.log(`Сегодня пятница, ${n}-е число. Необходимо подготовить отчет.`);
    n += 7;
}