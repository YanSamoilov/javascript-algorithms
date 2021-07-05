/*
 * Задача 7: «Анаграмма»
 *
 * Два слова называют анаграммами, если они состоят из одних и тех же букв.
 * Напишите функцию, проверяющую, являются ли две строки анаграммами друг друга
 * (регистр букв не имеет значения). Для простоты примите, что в этих строках
 * нет пробелов и знаков препинания.
 * 
*/

function anagram(str1, str2) {
    if ((typeof str1 === 'string') && (typeof str2 === 'string')) { // Исключение попадания в аргументы не строки.
        let isAnagram = true;
        str1 = str1.toLowerCase();
        str2 = str2.toLowerCase();
        if ((str1 === str2) || (str1.length != str2.length)) {      // Если слова одинаковые или разной длины, то это не анаграммы.
            return isAnagram = false;
        }
        const str1Array = str1.split('').sort();                    // Перевод строки в отсортированный массив символов для удобства перебора.
        const str2Array = str2.split('').sort();
            for(let ind = 0; ind < str1Array.length; ind++) {       
                if (str1Array[ind] != str2Array[ind]) {
                    return isAnagram = false;
                }
            }
        return isAnagram;
    } else {
        return 'Где-то не строка!';
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(anagram('finder', 'Friend')); // true
console.log(anagram('hello', 'bye')); // false