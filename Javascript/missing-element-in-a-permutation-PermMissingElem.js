/* Find the missing element in a given permutation.

An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

Your goal is to find that missing element.

Write a function:

    class Solution { public int solution(int[] A); }

that, given an array A, returns the value of the missing element.

For example, given array A such that:
  A[0] = 2
  A[1] = 3
  A[2] = 1
  A[3] = 5

the function should return 4, as it is the missing element.

Write an efficient algorithm for the following assumptions:

        N is an integer within the range [0..100,000];
        the elements of A are all distinct;
        each element of array A is an integer within the range [1..(N + 1)].

*/

const fileStream = require('fs')

function missingIntegerInAPermutation(arrayString) {
  let array = JSON.parse(arrayString);
  return ((array.length + 1) * ((array.length + 1 ) + 1) / 2) - array.reduce((a, b) => a + b, 0)
}

function main() {
  var inputFile = 'missing-element-in-a-permutation-PermMissingElem-input.txt';
  fileStream.readFile(inputFile, 'utf8', (error, data) => {
    if (error) {
      throw error;
    }
    let lines = data.split('\r\n');
    for (let index = 0; index < lines.length; index++) {
      console.log(`Result: ${missingIntegerInAPermutation(lines[index])}\t${lines[index]}`);
    }
  });
}

main();
