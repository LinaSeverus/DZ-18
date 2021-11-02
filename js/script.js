'use strict';

//1

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const newArr = arr1.concat(arr2);
console.log(newArr);

//2

// const arr = [1, 2, 3];
// arr.reverse();
// console.log(arr);

//3

// const arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

//4

// const arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

//5 Выведите на экран первый элемент.

// const arr = ['js', 'css', 'jq'];
// const firstItem = arr.shift();
// console.log(firstItem);

//6 Выведите на экран последний элемент.

// const arr = ['js', 'css', 'jq'];
// const lastItem = arr.pop();
// console.log(lastItem);


//7 С помощью метода запишите в новый массив элементы [1, 2, 3].

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(0, 3);
// console.log(newArr);

//8 С помощью метода запишите в новый массив элементы [4, 5].

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(-2);
// console.log(newArr);

//9  С помощью метода преобразуйте массив в [1, 4, 5].

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

//10 С помощью метода запишите в новый массив элементы [2, 3, 4].

// const arr = [1, 2, 3, 4, 5];
// const newArr = arr.slice(1, 4);
// console.log(newArr);

//11 С помощью метода сделайте из него массив [1, 2, 3, 'a', 'b', 'c', 4, 5].

// const arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

//12  С помощью метода сделайте из него массив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

// const arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(-1, 0, 'c');
// arr.push('e');
// console.log(arr);

//13 Отсортировать

// const arr = [3, 4, 1, 2, 7];
// arr.sort();
// console.log(arr);

//14 Найдите сумму этих чисел.

// const arr = [5, 6, 7, 8, 9];
// const sum = arr.reduce(function (start, item) {
//     return start + item;
// }, 0);
// console.log(sum);

//15 Сделайте из него массив, состоящий из квадратов этих чисел.

// const arr = [5, 6, 7, 8, 9];
// arr.forEach(function (item, index, array) {
//     array[index] = item ** 2;
// });
// console.log(arr);

//16 Оставьте в нем только отрицательные числа.

// const arr = [1, -3, 5, 6, -7, 8, 9, -11];

// const newArr = arr.filter(function (item) {
//     return item < 0;
// });
// console.log(newArr);
//или
// console.log(arr.filter((item) => item < 0));

//17 Оставьте в нем только четные числа.

// const arr = [1, -3, 5, 6, -7, 8, 9, -11];

// const newArr = arr.filter(function (item) {
//     return item % 2 === 0;
// });
// console.log(newArr);

//18 Оставьте в нем только те строки, длина которых больше 5-ти символов.

// const arr = ['aaa', 'aaaqqq', 'zzzqq', 'zz', 'qsaa', 'q', 'az'];

// const newArr = arr.filter(function (item) {
//     return item.length > 5;
// })
// console.log(newArr);

//19  Оставьте в нем только подмассивы.

// const arr = [1, 2, [3, 4], 5, [6, 7]];

// const newArr = arr.filter(function (item) {
//     return Array.isArray(item);
// })
// console.log(newArr);

//20 Посчитайте количество отрицательных чисел в этом массиве.

// const arr = [5, -3, 6, -5, 0, -7, 8, 9];

// let newArr = arr.filter(function (item) {
//     return item < 0;
// })
// console.log(newArr.length);


