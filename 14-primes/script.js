/*
 * Задача 14: «Простые числа»
 *
 * Напишите функцию primes(n). Её единственный аргумент — целое число n.
 * Функция должна возвращать массив простых чисел от 2 до n.
 * 
*/

function primes(num) {
    if (num > 1) {
        if (num === 2) {
            return 2;
        } else if (num === 3) {
            return [2, 3];
        } else {
            let primesArray = [2, 3];
            // Цикл начинаем с проверки цифры 4 на принадлежность к простому числу, т.к. 2 и 3 уже в массиве.
            firstLoop:
            for (let i = 4; i <= num; i++) {   
                const sqrtNumLoop = Math.floor(Math.sqrt(i));
                for (let j = 2; j <= sqrtNumLoop; j++) {
                    // Если верно, то число не i является простым и инструкцией continue возвращаемся к первой итерации без добавления числа в массив.
                    if (i % j === 0) {       
                        continue firstLoop;                     
                    }
                }
                primesArray.push(i);
            }
            return primesArray;
        }
    } else {
        return [];
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(primes(6)); // [2, 3, 5]
console.log(primes(17)); // [2, 3, 5, 7, 11, 13, 17]