<template>
  <!-- 蒙层 -->
  <Start v-if="showShadow" @click="showShadow = false" />
  <div class="chatPage container h-[calc(100vh-3rem)] relative bg-gradient-to-r from-blue-400 to-blue-200">
    <!-- 顶部 -->
    <div class="chat-header h-[calc(10vh)] w-full flex items-center justify-between bg-transparent px-4 border-b border-white rounded-xl">
      <div class="talk">
        <van-icon name="chat-o" class="text-black" size="1.5rem" />
      </div>
      <div class="title">
        <h2 class="text-black">AI 助手</h2>
      </div>
      <div class="avatar">
        <van-icon name="user-o" class="text-black" size="1.5rem" />
      </div>
    </div>

    <!-- 聊天记录 -->
    <div class="chat_wrapper h-[calc(72vh)] overflow-y-auto mx-auto p-4 z-1">
      <div 
        v-for="(item, index) in messages" 
        :key="index"
        class="chat-item w-full mb-4"
      >
        <component 
          :is="item.type === 'ai' ? AIReply : UserQuery"
          :msg="item.content"
        />
      </div>
    </div>

    <!-- 底部输入栏 -->
    <div class="chat_footer h-16 w-full bottom-0 absolute z-999 border-t border-white rounded-xl">
      <van-search
        v-model="inputMessage"
        placeholder="请输入问题..."
        shape="round"
        background="transparent"
        @search="handleSubmit"
      >
        <template #action>
          <div class="text-blue-500 pl-2" @click="handleSubmit">
            <van-icon name="send-gift-o" size="1.5rem" />
          </div>
        </template>
      </van-search>
    </div>

    <!-- 加载状态 -->
    <van-overlay :show="loading">
      <div class="flex items-center justify-center h-full">
        <van-loading type="spinner" color="#1989fa" size="24px">
          思考中...
        </van-loading>
      </div>
    </van-overlay>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { showToast } from 'vant';
import UserQuery from '@/components/AI/UserQuery.vue';
import AIReply from '@/components/AI/AIReply.vue';
import Start from '@/components/Assistant/Start.vue';

// ========== 类型定义 ==========
type Message = {
  type: 'user' | 'ai';
  content: string;
};

// ========== 常量声明 ==========
const STORAGE_KEY = 'chat_messages_v1';

// ========== 工具函数 ==========
const getInitialMessage = (): Message[] => [
  { type: 'ai', content: '✨ 您好！我是您的AI助手，有什么可以帮您？' }
];

const isValidMessage = (msg: any): msg is Message => {
  return typeof msg === 'object' &&
    ['user', 'ai'].includes(msg?.type) &&
    typeof msg?.content === 'string';
};

const isValidMessages = (data: any): data is Message[] => {
  return Array.isArray(data) && data.every(isValidMessage);
};

// ========== 存储方法 ==========
const loadMessages = (): Message[] => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return getInitialMessage();
    
    const parsed = JSON.parse(saved);
    return isValidMessages(parsed) ? parsed : getInitialMessage();
  } catch (error) {
    console.error('加载消息失败:', error);
    return getInitialMessage();
  }
};

const saveMessages = () => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.value));
  } catch (error) {
    console.error('保存消息失败:', error);
    showToast('消息保存失败，请勿发送过长内容');
  }
};

// ========== 状态初始化 ==========
const showShadow = ref(true);
const inputMessage = ref('');
const loading = ref(false);
const messages = ref<Message[]>(loadMessages());

// ========== 业务逻辑 ==========
const handleSubmit = async () => {
  if (!inputMessage.value.trim()) {
    showToast('请输入有效内容');
    return;
  }

  try {
    loading.value = true;
    const userMessage = inputMessage.value;
    
    messages.value.push({
      type: 'user',
      content: userMessage,
    });

    const response = await fetch('http://localhost:3000/chatai', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: userMessage }),
    });

    if (!response.ok) throw new Error('请求失败');
    
    const { code, content, error } = await response.json();
    
    if (code !== 200) {
      throw new Error(error || '未知错误');
    }

    messages.value.push({
      type: 'ai',
      content: content || '暂时无法回答该问题',
    });

  } catch (error) {
    console.error('请求出错:', error);
    showToast(error.message || '请求失败，请重试');
    messages.value.push({
      type: 'ai',
      content: '⚠️ 服务暂时不可用，请稍后再试',
    });
  } finally {
    inputMessage.value = '';
    loading.value = false;
    saveMessages();
  }
};

onMounted(() => {
  
  // 初始化时，判断是否显示蒙层
  showShadow.value = messages.value.length <= 1;
  console.log('初始消息数量:', messages.value.length);
  console.log('是否显示蒙层:', showShadow.value);
});
</script>

<style scoped>
.chat_wrapper {
  scroll-behavior: smooth;
}

.chat_footer {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(5px);
}

:deep(.van-search__content) {
  background: rgba(255, 255, 255, 0.8) !important;
}
</style>