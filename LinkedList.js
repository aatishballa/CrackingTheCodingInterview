class Node {
  constructor(data, next) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }

  // Insert at the end
  append(value) {
    const newNode = new Node(value)
    
    if(!this.head) {
      this.head = newNode
    }

    while (newNode.next !== null) {

    }
  }
  // Insert at the top
  prepend(value) {}

  insertAt(value, pos) {}

  deleteAt(pos) {}

  search(value) {}

  reverse() {}

  print() {}
}

function main() {
  const sampleNodes = ['Apple', 'Banana', 'Cucumber']

  const linkedList = new LinkedList()
  sampleNodes.forEach((element) => {
    linkedList.append(element)
  })

  linkedList.print()

  linkedList.search('Cucumber')
}

main()
