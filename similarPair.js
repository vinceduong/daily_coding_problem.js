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
