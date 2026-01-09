// Factorial
// 5!
// 5! -> 5 * 4! -> 5 * 24 -> 120
// 4! -> 4 * 3! -> 4 * 6 -> 24
// 3! -> 3 * 2! -> 3 * 2 -> 6
// 2! -> 2 * 1! -> 2 * 1 -> 2
// 1! -> 1

function factorial(n) {
  if (n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
