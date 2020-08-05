const { Node, serialize, deserialize } = require('./serializeNode')

const exampleNode = new Node('root',
  new Node('left',
    new Node('left.left')
  ),
  new Node('right')
)

const advancedNode = new Node('root',
  new Node('left',
    new Node('left.left'),
    new Node('left.right',
      new Node('left.right.left',
        new Node('left.right.left.left'),
        new Node('left.right.left.right')
      )
    )
  ),
  new Node('right')
)

describe('Serialize node', () => {
  test('serialize example node', () => {
    expect(serialize(exampleNode)).toBe('root{left{left.left},right}')
  })

  test('serialize advanced node', () => {
    expect(serialize(advancedNode)).toBe(
      'root{left{left.left,left.right{left.right.left{left.right.left.left,left.right.left.right}}},right}'
    )
  })
})

describe('Deserialize node', () => {
  test('deserialize example node', () => {
    const node = deserialize(serialize(exampleNode))

    expect(node.left.val).toBe('left')
    expect(node.left.left.val).toBe('left.left')
    expect(node.right.val).toBe('right')
  })

  test('deserialize advanced node', () => {
    const node = deserialize(serialize(advancedNode))

    expect(node.left.val).toBe('left')
    expect(node.left.left.val).toBe('left.left')
    expect(node.left.right.val).toBe('left.right')
    expect(node.left.right.left.val).toBe('left.right.left')
    expect(node.left.right.left.left.val).toBe('left.right.left.left')
    expect(node.left.right.left.right.val).toBe('left.right.left.right')
    expect(node.right.val).toBe('right')
  })
})