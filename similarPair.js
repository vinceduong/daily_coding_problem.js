/*
This problem was asked by Quora.

You are given a list of (website, user) pairs that represent users visiting websites.
Come up with a program that identifies the top k pairs of websites with the greatest similarity.

For example, suppose k = 1, and the list of tuples is:

[('a', 1), ('a', 3), ('a', 5),
 ('b', 2), ('b', 6),
 ('c', 1), ('c', 2), ('c', 3), ('c', 4), ('c', 5)
 ('d', 4), ('d', 5), ('d', 6), ('d', 7),
 ('e', 1), ('e', 3), ('e': 5), ('e', 6)]

Then a reasonable similarity metric would most likely conclude that a and e are the most similar,
so your program should return [('a', 'e')].
*/

function findSimilarPair(tuples, k) {
  const userPerWebsites = tuples.reduce((acc, tuple) => {
    const [website, user] = tuple

    if (!acc[website]) {
      acc[website] = []
    }
    acc[website].push(user)

    return acc
  }, {})

  const websites = Object.keys(userPerWebsites)

  const pairs = []

  for (let i = 0; i < websites.length; i++) {
    for (let j = i + 1; j < websites.length; j++) {
      pairs.push([websites[i], websites[j]])
    }
  }

  const diffs = []

  for (const [website, websiteToCompare] of pairs) {
    const [users, usersToCompare] = [userPerWebsites[website], userPerWebsites[websiteToCompare]]

    let diff = Math.abs(users.length - usersToCompare.length)

    for (const user of users) {
      if (!usersToCompare.find(u => user === u)) {
        diff++
      } else {
        diff--
      }
    }

    diffs.push({
      pair: `(${website},${websiteToCompare})`,
      diff,
    })
  }

  const similarPairs = diffs.sort((diff1, diff2) => diff1.diff - diff2.diff)

  const result = similarPairs.map(({pair}) => pair).slice(0, k).join(',')

  return result
}

module.exports = findSimilarPair
