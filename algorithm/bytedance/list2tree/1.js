let list = [
  {
    id: '1',
    title: '节点1',
    parentId: ''
  },
  {
    id: '1-1',
    title: '节点1-1',
    parentId: '1'
  },
  {
    id: '1-2',
    title: '节点1-2',
    parentId: '1'
  },
  {
    id: '2',
    title: '节点2',
    parentId: ''
  },
  {
    id: '2-1',
    title: '节点2-1',
    parentId: '2'
  }
];

function listToTree(list, parentId = "") {
  return list.filter(item => item.parentId === parentId)
    .map(item => ({
      ...item,
      children: listToTree(list, item.id)
    }));
}

// 使用 JSON.stringify 来美化输出
console.log(JSON.stringify(listToTree(list), null, 2));