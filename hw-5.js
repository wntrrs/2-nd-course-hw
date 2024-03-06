const min = (a, b) => {
    if (a > b) {
        return (b);
    }
    else if (a === b) {
        return (a);
    }
    else {
        return (b);
    }
}

console.log(min(8, 4));
console.log(min(6, 6));

const isEven = number => {
    if (number % 2 === 0) {
        return ('Число четное');
    }
    else {
        return ('Число нечетное');
    }
}

console.log(isEven(4));
console.log(isEven(5));

const squareNumber = number => number ** 2;
const squareVar = number => {
    let square = number ** 2;
    return (square);
}
console.log(squareNumber(2));
console.log(squareVar(4));

const askAge = userAge => {
    userAge = Number(prompt('Сколько вам лет?'));
    if (userAge < 0) {
        console.log('Вы ввели неправильное значение');
    }
    else if (userAge >= 0 && userAge <= 12) {
        console.log('Привет, друг!');
    }
    else {
        console.log('Добро пожаловать!');
    }
}
askAge();

const checkNumber = (number1, number2) => {
    number1 = prompt('Введите число');
    number2 = prompt('Введите второе число');
    if (isNaN(number1) === true || isNaN(number2) === true) {
        return ('Одно или оба значения не являются числом');
    }
    else {
        return (number1 * number2);
    }
}
console.log(checkNumber());

const tripleNumber = number => {
    number = prompt('Введите число');
    if (isNaN(number) === true) {
        return ('Переданный параметр не является числом');
    }
    else {
        result = number ** 3;
        return (`${number} в кубе равняется ${result}`);
    }
}
console.log(tripleNumber());

circle1 = {
    radius: 12,
    getArea(area) {
        area = 12 ** 2 * 3.14;
        return (area);
    },
    getPerimeter(perimeter) {
        perimeter = 2 * 3.14 * 12;
        return (perimeter);
    }
}

circle2 = {
    radius: 4,
    getArea(area) {
        area = 4 ** 2 * 3.14;
        return (area);
    },
    getPerimeter(perimeter) {
        perimeter = 2 * 3.14 * 4;
        return (perimeter);
    }
}

console.log(circle1.getArea);
console.log(circle1.getPerimeter);
console.log(circle2.getArea);
console.log(circle2.getPerimeter);