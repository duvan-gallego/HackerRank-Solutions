



const extraLongFactorials = (n) => {

  if (typeof n != 'number' || n <= 0 || n >= 100) return;

  let result = BigInt(n)

  for (let i = 1; i < n; i++) {
    result *= BigInt(n - i)
  }
  console.log(result.toString())
}


extraLongFactorials(3)