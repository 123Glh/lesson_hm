import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
  MineTopBarItem
} from "@/types/mine";

export const useMineStore = defineStore('mine', () => {
  //topBarState 响应式状态 topBarState topBarState.value
  const topBarState = ref<MineTopBarItem[]>([
    {
      title: "我的比赛",
      icon: "wodesaishi",
    },
    {
      title: "训练计划",
      icon: "xunlianjihua",
    },
    {
      title: "球队动态",
      icon: "qiuduidongtai",
    },
    {
      title: "成就奖杯",
      icon: "trophy",
    }
  ])

  return {
    topBarState,
  }

})