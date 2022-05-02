'use strict' // строгий режим

// Практика на условия if-else в JavaScript

// Задача 1
// В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
// variant 1
// let month = 12;
// if (month >= 12 || month <= 2) {
// 	console.log('зима');
// } if (month >= 3 && month <= 5 ) {
// 	console.log('весна');
// } if (month >= 6 && month <= 8) {
// 	console.log('лето');
// } if (month >= 9 && month <= 11) {
// 	console.log('осень');
// }

// variant 2
// let month = 3;
// if (month >= 12 || month <= 2) {
// 	console.log('зима');
// } if (month >= 3 && month <= 5 ) {
// 	console.log('весна');
// } if (month >= 6 && month <= 8) {
// 	console.log('лето');
// } if (month >= 9 && month <= 11) {
// 	console.log('осень');
// }

// variant 3
// let month = 6;
// if (month >= 12 || month <= 2) {
// 	console.log('зима');
// } if (month >= 3 && month <= 5 ) {
// 	console.log('весна');
// } if (month >= 6 && month <= 8) {
// 	console.log('лето');
// } if (month >= 9 && month <= 11) {
// 	console.log('осень');
// }

// // variant 4
// let month = 10;
// if (month >= 12 || month <= 2) {
// 	console.log('зима');
// } if (month >= 3 && month <= 5 ) {
// 	console.log('весна');
// } if (month >= 6 && month <= 8) {
// 	console.log('лето');
// } if (month >= 9 && month <= 11) {
// 	console.log('осень');
// }

// Задача 2
// Дана строка, состоящая из символов, например, 'abcde'. Проверьте, что первым символом этой строки является буква 'a'. Если это так - выведите 'да', в противном случае выведите 'нет'.
//variant 1
// let str = 'abcde';
// if (str[0] === 'a') {
// 	console.log('привет, я буква а');
// } else {
// 	console.log('привет, я другая буква')
// }

//variant 2
// let str = 'abcde';
// if (str[0] === 'b') {
// 	console.log('привет, я буква а');
// } else {
// 	console.log('привет, я другая буква')
// }

// Задача 3
// Дано число, например, 12345. Проверьте, что первым символом этого числа является цифра 1, 2 или 3. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let num = 12345;
// let str = String(num);
// let sum = Number(str[0])
// if (sum === 1) {
// 	console.log('является первым символом числа');
// } else {
// 	console.log('не является первым символом числа');
// }

// Задача 4
// Дано трехзначное число. Найдите сумму цифр этого числа.
// let num = 551;
// let str = String(num)
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
// if (sum === 11) {
// 	console.log('сумма чисел равна 11')
// } else {
// 	console.log('сумма чисел меньше или больше 11-ти')
// }


// Задача 5
// Дано число из 6-ти цифр. Проверьте, что сумма первых трех цифр равняется сумме вторых трех цифр. Если это так - выведите 'да', в противном случае выведите 'нет'.

// let num = 456735;
// let str = String(num);
// let sum = Number(str[0]) + Number(str[1]) + Number(str[2]);
// let sum1 = Number(str[3]) + Number(str[4]) + Number(str[5]);

// if (sum === sum1) {
// 	console.log('сумма первых трех цифр равняется сумме вторых трех цифр.')
// } else {
// 	console.log('сумма первых трех цифр не равняется сумме вторых трех цифр.')
// }