function prime(n) {
  for (var i = 2; i !== n; i++)
    if (n === 1 || n % i === 0) return false;
  return true;
}

function primes(start, end) {
  var numbers = [];
  for (var i = start; i <= end; i++)
    if (prime(i)) numbers.push(i);
  return numbers;
}

console.log(primes(1, 1000));
