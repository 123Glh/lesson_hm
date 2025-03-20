// 通用的 request 业务
import { ref, watchEffect } from 'vue';
/**
 * 通用的 request 业务
 * 
 * @param requestFn 异步请求函数
 */
export function useRequest(requestFn: () => void) {
  const data = ref([]); //抽象
  const laoding = ref(true); //抽象
  const error = ref(null); //抽象
  const fetchData = async () => {
    try {
      const response = await requestFn();
      data.value = response.data;
      error.value = null;
    } catch (err) {
      error.value = err;
    } finally {
      laoding.value = false;
    }
  }
  watchEffect(fetchData); // 监听请求函数变化，重新执行请求
  return {
    data,
    laoding,
    error,
    fetchData,
  }
}