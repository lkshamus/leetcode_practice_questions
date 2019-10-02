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