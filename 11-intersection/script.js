/*
 * Задача 11: «Пересечения массивов»
 *
 * Напишите функцию intersection(arr1, arr2). Она должна принимать
 * на вход два массива целых чисел. Функция должна вернуть новый
 * массив чисел, содержащихся в обоих исходных массивах.
 * 
*/

function intersection(arr1, arr2) {
    if ((Array.isArray(arr1)) && (Array.isArray(arr2))) {                           // Проверка, что входящие данные массивы.
        let duplicateNumArray = [];
        arr1.forEach(element => {   
            if (arr2.includes(element) && (!duplicateNumArray.includes(element))) { // Проверка на совпадение числа в двух массивах и его отсутствие в новом массиве.
                duplicateNumArray.push(element);
            }
        });
        return duplicateNumArray;
    } else {
        return 'Введите два массива чисел!';
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(intersection([1, 5, 4, 2], [8, 91, 4, 1, 3])); // [4, 1]
console.log(intersection([1, 5, 4, 2], [7, 12])); // []