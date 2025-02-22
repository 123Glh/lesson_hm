<template>
  <div class="ai-message flex justify-start mb-4">
    <div class="max-w-[80%] bg-blue-100 rounded-lg p-3 shadow">
      <!-- 主内容渲染 -->
      <template v-for="(section, index) in parsedContent" :key="index">
        <div v-if="section.type === 'think'" class="think-section">
          {{ section.content }}
        </div>
        <div v-else class="main-content">
          {{ section.content }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  msg: string;
}>();

// 解析内容结构
const parsedContent = computed(() => {
  const sections = [];
  const thinkRegex = /<think>(.*?)<\/think>/gs; // 非贪婪匹配
  
  let lastIndex = 0;
  let match;
  
  while ((match = thinkRegex.exec(props.msg)) !== null) {
    // 添加普通文本
    if (match.index > lastIndex) {
      sections.push({
        type: 'normal',
        content: props.msg.slice(lastIndex, match.index)
      });
    }
    
    // 添加思考内容
    sections.push({
      type: 'think',
      content: match[1].trim() // 移除首尾空白
    });
    
    lastIndex = match.index + match[0].length;
  }
  
  // 添加剩余文本
  if (lastIndex < props.msg.length) {
    sections.push({
      type: 'normal',
      content: props.msg.slice(lastIndex)
    });
  }
  
  return sections;
});
</script>

<style scoped>
/* 主内容样式 */
.main-content {
  @apply text-gray-800 leading-relaxed;
}

/* 思考内容样式 */
.think-section {
  @apply my-2 p-2 bg-gray-50 border-l-4 border-blue-300 italic text-gray-500 text-sm;
  font-family: 'Georgia', serif; /* 使用衬线字体增强区分度 */
}
</style>