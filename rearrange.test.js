const rearrange = require('./rearrange')

describe('Rearrange string', () => {
  test('\'aaabbc\'', () => {
    expect(rearrange('aaabbc')).toBe('ababac')
  })

  test('\'aaabbbcccc\'', () => {
    expect(rearrange('aaabbbcccc')).toBe('acbcabcabc')
  })

  test('\'aaaabbcccc\'', () => {
    expect(rearrange('aaaabbcccc')).toBe('acacabcabc')
  })

  test('\'aabbccddeeffgg\'', () => {
    expect(rearrange('aabbccddeeffgg')).toBe('abcdefgabcdefg')
  })

  test('Do not rearrange (return null) \'aaaab\'', () => {
    expect(rearrange('aaaab')).toBe(null)
  })
})
