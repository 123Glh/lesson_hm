<template>
  <div class="container px-6 h-full">
    <wc-waterfall :gap="20" :cols="2">
      <div
        class="card boder rounded-lg shadow-lg"
        v-for="(item, index) in items"
        :key="item.title"
      >
        <!-- 图片 ,这里使用 v-lazy 实现图片懒加载-->
        <img v-lazy="item.img" alt="" class="rounded-lg" />
        <!-- 信息 -->
        <div class="text">
          <!-- 标题 -->
          <p class="text-[0.8rem] mb-1 font-bold font-mono">{{ item.title }}</p>
          <div class="flex items-center justify-around">
            <div class="flex items-center mr-2">
              <!-- 作者头像，暂时先硬编码 -->
              <img
                src="https://www.keaitupian.cn/cjpic/frombd/0/253/1152107840/119779555.jpg"
                alt=""
                class="h-6 w-6 rounded-full mr-2"
              />
              <!-- 作者昵称 -->
              <div
                class="text-[0.7rem] text-gray-400 overflow-hidden overflow-ellipsis overflow-auto text-nowrap"
              >
                {{ item.nickName }}
              </div>
            </div>
            <!-- 点赞 -->
            <div class="flex items-center">
              <van-icon name="like-o" />
              <!-- 点赞数 -->
              <div class="text-[0.7rem] text-gray-400 ml-2">
                {{ item.loveNum }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <van-cell v-for="item in items" :key="item" :title="item" />
      <van-back-top right="5vw" bottom="10vh"/>
    </wc-waterfall>
  </div>
</template>

<script setup lang="ts">
import type { ShareTourItem } from "@/types/home";
import { ref, onMounted } from "vue";


//接口定义类型约束
interface Props {
  items: ShareTourItem[];
}
//接收父组件传递的数据
defineProps<Props>();
</script>

<style scoped>
.container {
  grid-template-rows: masonry;
}
</style>
