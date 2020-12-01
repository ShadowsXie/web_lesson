// 给你一个二叉树，请你返回其按 层序遍历 得到的节点值。 （即逐层地，从左到右访问所有节点）。

//  

// 示例：
// 二叉树：[3,9,20,null,null,15,7],

//     3
//    / \
//   9  20
//     /  \
//    15   7
// 返回其层次遍历结果：

// [
//   [3],
//   [9,20],
//   [15,7]
// ]

var levelOrder = function(root) {
  // root.left
  // root.right
  if (!root) return []
  let queue = [root],res = []
  while(queue.length) {
    // 一行
    let rowNodes = queue.splice(0)
    let row = []
    for (let node of rowNodes) {
      row.push(node.val)
      if(node.left) queue.push(node.left)
      if(node.right) queue.push(node.right)
    }
    res.push(row)
  }
  return res
}