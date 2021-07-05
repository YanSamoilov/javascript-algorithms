/*
 * Задача 10: «Факториал»
 *
 * Напишите функцию factorial(n), возвращающую факториал неотрицательного
 * целого числа. Факториал — это произведение всех натуральных чисел
 * от 1 до n включительно. Факториал 0 равен 1.
 * 
*/

function factorial(n) {
    if (n >= 0) {
        if ((n === 0) || (n === 1)) {
            return 1;
        } else {
            let multiplier = 1;
            for(let i = 2; i <= n; i++) {
                multiplier *= i;
            }
            return multiplier;
        }
    } else {
        return 'Число меньше 0!';
    }
}

// Протестируйте решение, вызывая функцию с разными аргументами:

console.log(factorial(0)); // 1
console.log(factorial(1)); // 1
console.log(factorial(6)); // 720