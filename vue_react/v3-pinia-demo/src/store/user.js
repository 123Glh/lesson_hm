// 全局共享的用户数据状态
import { defineStore } from "pinia";
import {
  ref,
  reactive,
} from "vue";

// hooks 编程
export const useUserStore = defineStore("user", () => {
  const islogin = ref(false);
  const tologin = () => {
    islogin.value = true;
  }
  const tologout = () => {
    islogin.value = false;
  }

  const userInfo = reactive({
    name: "",
    avatar: "",
    message: 0,
    uid: null,
  })
  const setUserInfo = () => {
    userInfo.name = "answerball";
    userInfo.avatar = "https://p26-passport.byteacctimg.com/img/user-avatar/807eceeb2975bbf82253b9da41735cfe~140x140.awebp",
      userInfo.message = 10,
      userInfo.uid = 209320781557531
  }
  return {
    islogin,
    tologin,
    tologout,
    userInfo,
    setUserInfo
  }
})