import { ref, onMounted, onUnmounted } from 'vue'
export function useMouse() {
  const x = ref(0),
    y = ref(0);

  //console.log('use Mouse');
  function update(e) {
    x.value = e.pageX;
    y.value = e.pageY;
  }
  onMounted(() => {
    window.addEventListener('mousemove', update);
  });
  onUnmounted(() => {
    window.removeEventListener('mousemove', update);
  });
  return { x, y };
}

export function useMemo() {
  console.log('Use Memo');
}
export default {
  name: 'useMouse'
}