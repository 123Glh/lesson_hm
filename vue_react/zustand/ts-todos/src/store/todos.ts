import { create } from 'zustand'
// ts 是 js 的超集 直接写成 js 也可以运行
// 代码的正确性
// interface 接口
// 分号隔开 不是JSON ， 面向对象接口
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}
// 约束 store
// <T> T 类型参数
interface TodoStore {
  todos: Todo[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}
// 范型 泛指内部的类型
const useCounterStore = create<TodoStore>()((set) => ({
  todos: [],
  addTodo: (text) => set((state) => ({
    todos: [
      ...state.todos,
      {
        id: state.todos.length + 1,
        text,
        completed: false,
      }
    ]
  })),
  toggleTodo: (number) => set((state) => ({
    todos: state.todos.map((todo) =>
      todo.id === number ? { ...todo, completed: !todo.completed } : todo
    )
  })),
  deleteTodo: (number) => set((state) => ({
    todos: state.todos.filter((todo) => todo.id !== number)
  }))
}))
export default useCounterStore