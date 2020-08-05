/*
This problem was asked by IBM.

Given a string with repeated characters, rearrange the string so that
no two adjacent characters are the same. If this is not possible, return None.

For example, given "aaabbc", you could return "ababac". Given "aaab", return None.
*/

function rearrange(string) {
  const occurences = [...string].reduce((acc, val) => {
    if (!acc[val]) {
      acc[val] = 0
    }
    acc[val]++

    return acc
  }, {})

  let chars = Object.keys(occurences) 

  let rearrangedString = ''

  for (let i = 0, previousChar = ''; i < string.length; i++) { 
    let currentChar

    if (!previousChar) {
      currentChar = chars[0]
    } else {
      currentChar = chars.find(c => c !== previousChar && occurences[c])

      if (!currentChar) {
        return null
      }
    }

    rearrangedString += currentChar
    occurences[currentChar]--

    chars = Object.keys(occurences).sort((c1, c2) =>
      occurences[c2] - occurences[c1]
    )

    previousChar = currentChar
  }

  return rearrangedString
}

module.exports = rearrange
