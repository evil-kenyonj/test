/**
 * Generates a FizzBuzz sequence for numbers from 1 to n.
 * Returns "Fizz" for multiples of 3, "Buzz" for multiples of 5,
 * "FizzBuzz" for multiples of both 3 and 5, and the number itself otherwise.
 * 
 * @param n - The upper limit of the sequence (inclusive)
 * @returns An array of strings representing the FizzBuzz sequence
 */
function fizzBuzz(n: number): string[] {
   let answer: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer.push("FizzBuzz");
        } else if (i % 3 === 0) {
            answer.push("Fizz");
        } else if (i % 5 === 0) {
            answer.push("Buzz");
        } else {
            answer.push(i.toString());
        }
    }
    return answer;
};
