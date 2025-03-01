import { create } from 'zustand'
import axios from 'axios'

// github repo 接口
interface Repo {
  id: number;
  name: string;
  description: string | null;  // 联合类型
  html_url: string;
}

// ts 适合大型项目
// 一定会遵守
// 合作 给队友
interface RepoState {
  repos: Repo[];
  loading: boolean;
  error: string | null;
  fetchRepos: () => void;
}

// hooks 函数
// js 函数式编程 utils 防抖 节流 人民币换美金
// hooks 复用了响应式状态 和 vue/react 等业务 (useEffect ....)
// use 开头标志、很方便
export const useReposStore = create<RepoState>()((set) => ({
  repos: [],
  loading: false,
  error: null,
  fetchRepos: async () => {
    // 更新状态
    set({ loading: true, error: null })
    try {
      // 异步请求
      // 语法检测
      // 静态编译 在编译的时候就会报错
      // 代码的正确性
      // 大型项目、跨语言学习、多人协作
      // 对象属性、方法建议、更快
      const response = await axios.get('https://api.github.com/users/123glh/repos');
      set({
        repos: response.data
      })
    } catch (error) {
      set({ error: 'Failed to fetch repos' })
    } finally {
      set({ loading: false })
    }
  }
}))
export default useReposStore