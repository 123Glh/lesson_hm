<template>
  <div class="mine h-100rem">
    <!-- 背景 -->
    <div
      class="minePage container h-[8rem] relative shadow-md
       bg-[url('https://ts1.cn.mm.bing.net/th/id/R-C.6915dc895f6d7632d56994c1fc0e22c1?rik=d933adnBd4eStg&riu=http%3a%2f%2fimg.pconline.com.cn%2fimages%2fupload%2fupc%2ftx%2fwallpaper%2f1507%2f24%2fc0%2f10192488_1437749078406.jpg&ehk=ynnCK%2brwflNqa%2b0YfeWDdRNppTn%2flrD5FPTPnFzSf2o%3d&risl=&pid=ImgRaw&r=0')] 
       bg-cover bg-center"
    >
      <div class="text-center text-lg text-white font-bold pt-[2rem] ">
        个人中心
      </div>
      <!-- 头像 -->
      <img
        src="https://ts1.cn.mm.bing.net/th/id/R-C.80c76ccbd40866be294c1ff45b70349e?rik=mD%2fbUgUPtoGKlw&riu=http%3a%2f%2fn.sinaimg.cn%2fsinakd20230214s%2f582%2fw732h650%2f20230214%2f9e51-80a1e01852ef7499e3674220db4f5454.jpg&ehk=gOoYknY0i2C9vkOB9nyKMg9YQ%2fowVgqQZdAXn4x4p3U%3d&risl=&pid=ImgRaw&r=0"
        alt=""
        class="rounded-full w-20 h-20 mx-auto border-2 border-white shadow-md shadow-gray-400 absolute bottom-0 left-5 transform translate-y-[3rem]"
      />
    </div>
    <!-- 页面主体 -->
    <main class="mine-main">
      <!-- 登录注册 -->
      <div class="login-register container text-right px-5 pt-2">
        <van-button round type="success" color="#00BFFF" class="font-bold"
          >&nbsp;&nbsp;登录&nbsp;&nbsp;</van-button>
      </div>
      <!-- 菜单栏 -->
      <section
        class="rounded-xl mt-[1rem] pb-[0.5rem] shadow-md bg-gray-90 mx-2 border"
      >
        <div class="topbar flex justify-around mt-[1.5rem]">
          <div
            class="topbar-item flex flex-col items-center"
            v-for="item in topBarState"
            :key="item.title"
          >
            <div class="topbar-item__icon">
              <van-icon
                class="iconfont text-[1.5rem]"
                color="#87CEFA"
                class-prefix="icon"
                :name="item.icon"
              />
            </div>
            <div class="topbar-item__text">{{ item.title }}</div>
          </div>
        </div>
      </section>
      <!-- 运动记录 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="yundongjilu"
          />
          运动记录</div>
        <div class="text-[0.8rem] text-gray-500 mt-4">分享你的运动记忆</div>
        <div class="absolute right-0 top-0 mt-5 mr-3">
          <van-button round type="success" color="#00BFFF">立即发布</van-button>
        </div>
      </section>
      <!-- 训练 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="liliangxunlian"
          />
          训练</div>
        <div class="text-[0.8rem] text-gray-500 mt-4">记录你每天的训练</div>
      </section>
      <!-- 设置 -->
      <section
        class="rounded-xl py-2 pl-4 pt-4 shadow-md bg-gray-90 mx-2 mt-3 border relative"
      >
        <div class="font-bold">
          <van-icon
            class="iconfont text-[1rem] mr-2"
            color="black"
            class-prefix="icon"
            name="shezhi"
          />
          设置
        </div>
        <div class="text-[0.8rem] text-gray-500 mt-4">管理你的个人信息</div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { toRefs } from "vue";
import { useMineStore } from "@/stores/mineStore";

const mineStore = useMineStore();
const { topBarState } = toRefs(mineStore);
</script>

<style lang="scss" scoped></style>
