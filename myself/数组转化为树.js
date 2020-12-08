function buildTree(arr) {
  let tree = arr.shift()
  function insertTree(value, node) {
    function walk(n) {
      if (n.id === value) {
        if (!n.child) n.child = []
        n.child.push(node)
        return
      }
      if (n.child) {
        for (let i of n.child) {
          walk(i)
        }
      }
    }
    walk(tree)
  }
  for (let item of arr) {
    insertTree(item.pid, item)
  }
  return tree
}

var locationList = [
  { id: 0, name: "中国" },
  { id: 1, pid: 0, name: "北京市" },
  { id: 2, pid: 1, name: "昌平区" },
  { id: 3, pid: 1, name: "海淀区" },
  { id: 4, pid: 2, name: "PKU" },
];

console.log(buildTree(locationList));