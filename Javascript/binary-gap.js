/* Find longest sequence of zeros in binary representation of an integer.


A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

    class Solution { public int solution(int N); }

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

    N is an integer within the range [1..2,147,483,647].


*/

const file_stream = require('fs')
var numberLibrary = require('./lib/number-library')


function binaryGap (number) {
    binary_number = numberLibrary.convert.ToBinary(number);
    console.log('Binary number: ' + binary_number);
    let start = null;
    let end = null;
    let max_zero_length = 0;
    for (let i = 0; i < binary_number.length; i++) {
        if (Number(binary_number[i]) === 1) {
            if (start == null && end == null) {
                start = i;
            } else if (start != null && end == null) {
                end = i;
                let zero_length = end - (start + 1);
                if (zero_length > max_zero_length) {
                    max_zero_length = zero_length;
                }
                start = i;
                end = null;
            }
        }
    }
    return max_zero_length;
}

var input_file = 'binary-gap-input.txt';
file_stream.readFile(input_file, (error, data) => {
    if (error) {
        throw error;
    }
    if (numberLibrary.isInt(data)) {
        console.log('Longest sequence of zeros: ' + binaryGap(data));
    }
    else {
        throw "Error! Please input a decimal number"
    }
});
