// use 开头
// store 数据状态从组件中 剥离 共享数据状态
// 复用 响应式业务 自定义 hook 函数
// products search 响应式业务
import {
  useState,
  useCallback,
  useEffect
} from "react";
import {
  getProducts,
  searchProductsByQuery,
} from '@/api/products';
import { debounce } from "@/utils/debounce";
import { useProductStore } from "@/store/product";
export const useProducts = () => {
  const [loading, setLoading] = useState(false);
  const { products, setProducts } = useProductStore();
  const fearchProducts = async () => {
    setLoading(true);
    try {
      const data = await getProducts();
      setProducts(data);
    } finally {
      setLoading(false);
    }
  }
  const searchProducts = useCallback(
    debounce(async (query: string) => {
      setLoading(true);
      try {
        const data = await searchProductsByQuery(query);
        setProducts(data);
      } finally {
        setLoading(false);
      }
    }, 500),
    []
  );
  useEffect(() => {
    fearchProducts();
  }, [])
  return {
    loading,
    products,
    searchProducts,
  }
}