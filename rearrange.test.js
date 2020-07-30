const rearrange = require('./rearrange')

describe('Problem #584: Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same', () => {
  test('Rearrange \'aaabbc\'', () => {
    expect(rearrange('aaabbc')).toBe('ababac')
  })

  test('Rearrange \'aaabbbcccc\'', () => {
    expect(rearrange('aaabbbcccc')).toBe('acbcabcabc')
  })

  test('Rearrange \'aaaabbcccc\'', () => {
    expect(rearrange('aaaabbcccc')).toBe('acacabcabc')
  })

  test('Rearrange \'aabbccddeeffgg\'', () => {
    expect(rearrange('aabbccddeeffgg')).toBe('abcdefgabcdefg')
  })

  test('Do not rearrange (return null) \'aaaab\'', () => {
    expect(rearrange('aaaab')).toBe(null)
  })
})
