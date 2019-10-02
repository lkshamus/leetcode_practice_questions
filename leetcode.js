// remove all vowels from a string

var removeVowels = function(S) {
  let arr = S.split("")
  let x = arr.filter((vowel) => {
    return vowel !== "e"
  })
  let y = x.filter((vowel) => {
    return vowel !== "a"
  })
  let z = y.filter((vowel) => {
    return vowel !== "i"
  })
  let a = z.filter((vowel) => {
    return vowel !== "o"
  })
  let b = a.filter((vowel) => {
    return vowel !== "u"
  })
  return b.join("")
}

// find the IP address. input is "1.1.1.1" output should be "1[.]1[.]1[.]1"
var defangIPaddr = function(address) {
  IP = address.split(".").filter((x) => {
    return x
  })
  return IP.join("[.]")
};

defangIPaddr("1.1.1.1")

// Given an array of integers arr, write a function that returns true if and only if the number of occurrences of each value in the array is unique.

// Input: arr = [1,2,2,1,1,3]
// Output: true
// Explanation: The value 1 has 3 occurrences, 2 has 2 and 3 has 1. No two values have the same number of occurrences.

var uniqueOccurrences = function(arr) {
  const freq = {};
  for (const val of arr) {
    freq[val] = (freq[val] || 0) + 1;
  }
   return Object.keys(freq).length === new Set(Object.values(freq)).size;
}

uniqueOccurrences([1,2,2,1,1,3,2])