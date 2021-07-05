/*
 * Задача 1: «Палиндром»
 *
 * Палиндром — это слово, предложение или последовательность символов,
 * которая читается слева направо так же, как и справа налево. Например,
 * «топот» и «Анна» — палиндромы, а «привет» и «Витя» — нет.
 *
 * Напишите функцию palindrome(str), принимающую как аргумент строку.
 * Функция должна вернуть true, если строка — палиндром, и false, если нет.
 * 
 * Считайте, что на вход всегда передаётся слово: то есть знаков препинания
 * и пробелов в аргументе быть не может.
 * 
*/

function palindrome(str) {
    let strArray = [], versaStrArray = [];
    if ( typeof str === 'string') {
        const strLowerCase = str.toLowerCase();
        let isPalindrom = true;
        const marks = ['.', ',', ';', ':', '!', '?', ' ', '-']; // Массив знаков препинания к исключению.
        for (let ind = 0; ind < strLowerCase.length; ind++) {   // Перебор строки и, заполняя массив символов, исключая знаки препинания.
            if (!marks.includes(strLowerCase[ind])) {
                strArray.push(strLowerCase[ind]);
            }
        }
        versaStrArray = strArray.concat().reverse();             // Копирование второго массива из первого и переворачивание его.
        for (let ind= 0; ind < strArray.length; ind++) {        // Перебор и сравнение символов в двух массивах на равенство.
            if (strArray[ind] != versaStrArray[ind]) {
                isPalindrom = false;
                break; 
            }

        }
        return isPalindrom;      
    } else {
        return 'Это не текст!';
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(palindrome('топот')); // должно быть true
console.log(palindrome('Saippuakivikauppias')); // true
console.log(palindrome('привет')); // false
console.log(palindrome('О, лета тело!')); // true

/*
 * Бонус. Задача для любознательных. Пусть функция принимает на вход любую строку,
 * но пробелы и знаки препинания не учитывает. Например:
 * 
 * palindrome('О, лета тело!'); // true
 * 
*/