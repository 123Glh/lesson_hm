import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useProductStore } from './product'
type CartItem = {
  productId: number;
  quantity: number;
};
export const useCartStore = defineStore('cart', () => {
  // <T>
  // vue3 vue2 区别？
  // vue3 全面支持 ts 99% 代码是 ts 编写的

  const items = ref<CartItem[]>([])
  const productStore = useProductStore()
  // const totalPrice = computed(() => {
  //   // 累加和
  //   items.value.reduce((total, item) => {
  //     const product = productStore.products.find(p => p.id === item.productId);
  //     // if (product) {
  //     //   return total + product.price * item.quantity
  //     // }
  //     // es6 可选链 操作符
  //     return total + (product?.price || 0) * item.quantity;
  //   }, 0)
  // })
  const totalPrice = computed(() =>
    items.value.reduce((total, item) => {
      const product = productStore.products.find(p => p.id === item.productId);
      return total + (product?.price || 0) * item.quantity;
    }, 0)
  );

  // 计算属性 计算购物车中某个商品的数量
  const getQuantity = (productId: number) => {
    const item = items.value.find(i => i.productId === productId)
    return item ? item.quantity : 0
  }

  const addToCart = (productId: number) => {
    const product = productStore.products.find(p => p.id === productId)
    if (!product) {
      return
    }
    const currentQuantity = items.value.find(i => i.productId === productId)?.quantity || 0
    // 库存不足
    if (currentQuantity >= product.inventory) {
      return
    }
    // 库存足够 添加到购物车
    const existingItem = items.value.find(i => i.productId === productId)
    if (existingItem) {
      existingItem.quantity++
    } else {
      items.value.push({ productId, quantity: 1 })
    }
  }

  return {
    items,
    totalPrice,
    getQuantity,
    addToCart
  }
})