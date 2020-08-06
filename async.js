console.log('this is my first file');
console.log('second change');
// Your code here.
function isEven(num) {
  num = Math.abs(num);
  function checkEvenOdd(n) {
    if (num) if (num === n) return 'even';
    if (num > n) return checkEvenOdd(n + 2);
    if (num < n) return 'odd';
  }
  return checkEvenOdd(0);
}
console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??
