// virtual node
const vnode = {
  type: 'div',
  props: { id: 'todo-list' }, // 元素属性
  children: [
    {
      type: 'input',
      props: { placeholder: 'Add new todo' }
    },
    {
      type: 'ul',
      children: [
        { type: 'li', props: { class: 'todo-item' }, children: ['Buy groceries'] },
        { type: 'li', props: { class: 'todo-item' }, children: ['Read a book'] }
      ]
    }
  ]
};

<div id="todo-list">

</div>