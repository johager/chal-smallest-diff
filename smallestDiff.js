/*
Credit: Adapted from a problem in Cracking the Coding Interview, 6th Edition. Gayle Laakmann McDowell, Career Cup (Palo Alto, CA). 2015.

This is a short-length challenge, but requires some clever thinking.

Given two lists, find the smallest difference (subtraction) between any two nums.

For example, given the arrays:

[10, 20, 14, 16, 18]
[30, 23, 54, 33, 96]
The result would be 3, since 23 - 20 = 3 is the smallest difference of any pair of numbers in those lists.

Write a function that determines the smallest difference.
*/

//[20, 3, 40, 17, 78]

function smallestDiff(nums1,nums2) {
    let minVal = Number.MAX_VALUE  // 1.7976931348623157e+308
    for (let i = 0; i < nums1.length; i++) {
        minVal = Math.min(minVal, Math.abs(nums1[i] - nums2[i]))
    }
    return minVal
}

const largestNumber = Number.MAX_VALUE
console.log(largestNumber)
console.log("largestNumber:",largestNumber)

function test(func, inp1, inp2, exp) {
    const res = func(inp1, inp2)
    let passed = false
    if (res === exp) {
        passed = 'true '
    }
    console.log(`func: ${func.name}\ninp1: ${inp1}\ninp2: ${inp2}\n res: ${res}  exp: ${exp}  passed:`, passed)
}

test(smallestDiff,[10, 20, 14, 16, 18],[30, 23, 54, 33, 96],3)