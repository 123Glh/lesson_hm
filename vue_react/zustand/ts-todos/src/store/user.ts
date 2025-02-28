import { create } from 'zustand'

interface user {
  name: string;
  age: number;
}

interface userStore {
  users: user[];
  addUser: (name: string, age: number) => void;
  deleteUser: (name: string) => void;
}

const useCounterStore = create<userStore>()((set) => ({
  users: [],
  addUser: (name, age) => set((state) => ({ users: [...state.users, { name, age }] })),
  deleteUser: (name) => set((state) => ({ users: state.users.filter((user) => user.name !== name) })),
}))

export default useCounterStore