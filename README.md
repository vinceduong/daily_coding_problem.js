# [Daily Coding Problem](https://www.dailycodingproblem.com)

## Install and run tests

```
gcl github.com/vinceduong/daily_coding_problem.js && cd daily_coding_problem.js
npm install && npm run test  
```

Each problem solution is exported as a function in `{problem_name}.js`

---

### Rearrange string

This problem was asked by IBM.

Given a string with repeated characters, rearrange the string so that no two adjacent characters are the same. If this is not possible, return None.

For example, given "aaabbc", you could return "ababac". Given "aaab", return None.

- File: `rearrange.js`
- Test file: `rearrange.test.js`

---

### Find similar pair

This problem was asked by Quora.

You are given a list of `(website, user)` pairs that represent users visiting websites. Come up with a program that identifies the top k pairs of websites with the greatest similarity.

For example, suppose k = 1, and the list of tuples is:

```
[('a', 1), ('a', 3), ('a', 5),
 ('b', 2), ('b', 6),
 ('c', 1), ('c', 2), ('c', 3), ('c', 4), ('c', 5),
 ('d', 4), ('d', 5), ('d', 6), ('d', 7),
 ('e', 1), ('e', 3), ('e': 5), ('e', 6)]
```

Then a reasonable similarity metric would most likely conclude that a and e are the most similar, so your program should return `[('a', 'e')]`.

- File: `similarPair.js`
- Test file: `similarPair.test.js`

---

### Serialize and deserialize a tree

This problem was asked by Google.

Given the root to a binary tree, implement serialize(root), which serializes the tree into a string, and deserialize(s), which deserializes the string back into the tree.

For example, given the following Node class
```
class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
```
The following test should pass:

```
node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
```

- File: `serialize.js`
- Test file: `serialize.test.js`

---

### Count array inversions

This problem was asked by Google.

We can determine how "out of order" an array A is by counting the number of inversions it has.  
Two elements `A[i]` and `A[j]` form an inversion if `A[i] > A[j]` but `i < j`.  
That is, a smaller element appears after a larger element.  

Given an array, count the number of inversions it has. Do this faster than `O(N^2)` time.

You may assume each element in the array is distinct.

For example, a sorted list has zero inversions.  
The array `[2, 4, 1, 3, 5]` has three inversions: (2, 1), (4, 1), and (4, 3).  
The array `[5, 4, 3, 2, 1]` has ten inversions: every distinct pair forms an inversion.  

- File: `countArrayInversions.js`
- Test file: `countArrayInversions.test.js`
