/*
This problem was asked by Google.

Given the root to a binary tree, implement serialize(root),
which serializes the tree into a string, and deserialize(s),
which deserializes the string back into the tree.

For example, given the following Node class

class Node:
    def __init__(self, val, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right
The following test should pass:

node = Node('root', Node('left', Node('left.left')), Node('right'))
assert deserialize(serialize(node)).left.left.val == 'left.left'
*/

class Node {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left
    this.right = right
  }
}


function serialize(node, string = "") {
  string += node.val

  if (!node.left && !node.right) {
    return string
  }

  if (node.left) {
    string += '{'
    string = serialize(node.left, string)
  }

  if (node.right) {
    string += ','
    string = serialize(node.right, string)
  }

  return string + '}'
}

function splitLeftRight(string) {
  for(let i = 0, bracketCount = 0; i < string.length; i++) {
    if (string[i] === '{') {
      bracketCount++
    }
    if (string[i] === '}') {
      bracketCount--
    }
    if (string[i] === ',' && bracketCount === 0) {
      return {
        left: string.substr(0, i),
        right: string.substr(i + 1)
      }
    }
  }
  
  return {
    left: string
  }
}

function deserialize(string) {
  const [value] = string.split('{')

  const leftOver = string.substr(value.length + 1, string.length - 2)

  if (leftOver) {
    const { left: leftSubNode, right: rightSubNode = '' }  = splitLeftRight(leftOver)

    if (rightSubNode !== '') {
      return new Node(value,
        deserialize(leftSubNode),
        deserialize(rightSubNode.substr(0, rightSubNode.length - 1))
      )
    } else {
      return new Node(value,
        deserialize(leftSubNode.substr(0, leftSubNode.length - 1))
      )
    }
  } else {
    return new Node(value)
  }
}

module.exports = {
  Node,
  serialize,
  deserialize,
}