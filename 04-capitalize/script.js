/*
 * Задача 4: «С большой буквы»
 *
 * Напишите функцию capitalize(str). Функция должна возвращать новую
 * строку каждое слово в которой начинается с прописной буквы.
 *
*/

function capitalize(str) {
    if ( typeof str === 'string') {
        let arrayFromStr = str.split(' ');  // Преобразование строки в массив слов.
        for(let i = 0; i < arrayFromStr.length; i++) {
            // Замена элеменета в массиве с помощью метода replace, в котором изымается первая буква, делается заглавной.
            arrayFromStr[i] = arrayFromStr[i].replace(arrayFromStr[i][0], arrayFromStr[i].charAt(0).toUpperCase());
        }
        return arrayFromStr.join(' ');      // Создание и возвращение строки из массива.
    }
    else {
        return 'Это не строка!';
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(capitalize('молодость всё простит')); // "Молодость Всё Простит"