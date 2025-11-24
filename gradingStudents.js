

// O(n)
// O(n) space

const gradingStudents = (grades) => {

  let results = []

  for (const grade of grades) {

    if (grade < 38) {
      results.push(grade)
    } else if ((grade % 5) == 0) {
      results.push(grade)
    } else {
      const mod = grade % 5

      if (mod > 2) {
        results.push(grade + (5 - mod))
      } else {
        results.push(grade)
      }
    }
  }
  return results
}


const example1 = [73, 67, 38, 33]
const example2 = [78, 65, 66, 67, 68, 69, 80, 37, 33]

console.log(`Input: ${example1} -> Output: ${gradingStudents(example1)}`)
console.log(`Input: ${example2} -> Output: ${gradingStudents(example2)}`)