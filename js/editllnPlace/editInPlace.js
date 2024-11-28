/**
 * @func 就地编辑
 * @params {id,parent  父节点，value 默认值}
 * @author ysw
 * @date 2024-06-12
 */

function EditInPlace(id, parent, value) {
  this.id = id   //跨函数共享属性
  this.parent = parent || document.body
  this.value = value || '这个家伙很懒，什么都没有留下'
  this.createElement(this.id)
}
EditInPlace.prototype.createElement = function (id) {
  // 相当于创建一个div，id是'id', 父节点是'parent'
  this.containerElement = document.createElement('div')
  this.containerElement.id = this.id
  this.parent.appendChild(this.containerElement)

  this.staticElement = document.createElement('span')
  this.staticElement.innerHTML = this.value
  this.containerElement.appendChild(this.staticElement)
}