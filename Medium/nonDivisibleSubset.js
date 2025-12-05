
// URL: https://www.hackerrank.com/challenges/non-divisible-subset/problem


const nonDivisibleSubset = (k, s) => {

  let counts = new Array(k).fill(0)
  let result = 0;

  for (let i in s) {
    const mod = s[i] % k
    counts[mod]++
  }

  // Special case, remainder 0
  if (counts[0] > 0) {
    result += 1
  }

  for (let r = 1; r <= Math.floor(k / 2); r++) {
    let a = counts[r]
    let b = counts[k - r]
    if (k % 2 == 0 && r == Math.floor(k / 2) && counts[r] > 0) {
      result++
    } else {
      result += Math.max(a, b)
    }
  }

  return result;
}

const s = [19, 10, 12, 10, 24, 25, 22]
const k = 4

// const s = [1, 7, 2, 4]
// const k = 3

console.log(nonDivisibleSubset(k, s))