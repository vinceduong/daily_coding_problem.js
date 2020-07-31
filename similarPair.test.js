const findSimilarPair = require('./similarPair')

describe('Find similar pair', () => {
  test('Problem example k = 1', () => {
    const pairs = [
      ['a', 1], ['a', 3], ['a', 5],
      ['b', 2], ['b', 6],
      ['c', 1], ['c', 2], ['c', 3], ['c', 4], ['c', 5],
      ['d', 4], ['d', 5], ['d', 6], ['d', 7],
      ['e', 1], ['e', 3], ['e', 5], ['e', 6],
    ]

    expect(findSimilarPair(pairs, 1)).toBe('(a,e)')
  })

  test('Problem example k = 2', () => {
    const pairs = [
      ['a', 1], ['a', 3], ['a', 5],
      ['b', 2], ['b', 6],
      ['c', 1], ['c', 2], ['c', 3], ['c', 4], ['c', 5],
      ['d', 4], ['d', 5], ['d', 6], ['d', 7],
      ['e', 1], ['e', 3], ['e', 5], ['e', 6],
    ]

    expect(findSimilarPair(pairs, 2)).toBe('(a,e),(a,c)')
  })

  test('Problem example k = 10', () => {
    const pairs = [
      ['a', 1], ['a', 3], ['a', 5],
      ['b', 2], ['b', 6],
      ['c', 1], ['c', 2], ['c', 3], ['c', 4], ['c', 5],
      ['d', 4], ['d', 5], ['d', 6], ['d', 7],
      ['e', 1], ['e', 3], ['e', 5], ['e', 6],
    ]

    expect(findSimilarPair(pairs, 10)).toBe('(a,e),(a,c),(c,e),(d,e),(a,d),(b,d),(b,e),(c,d),(b,c),(a,b)')
  })
 
})
