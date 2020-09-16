const countArrayInversions = require('./countArrayInversions')

describe('Count array inversions', () => {
  test('Example #1: [2, 4, 1, 3, 5]', () => {
    expect(countArrayInversions([2, 4, 1, 3, 5])).toBe(3)
  })

  test('Example #2: [5, 4, 3, 2, 1]', () => {
    expect(countArrayInversions([5, 4, 3, 2, 1])).toBe(10)
  })
})