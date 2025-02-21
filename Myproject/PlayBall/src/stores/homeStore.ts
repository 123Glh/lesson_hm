import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
  HomeTopBarItem,
  PopularDestinationsItem,
  HomeNavBarItem,
  ShareTourItem
} from "../types/home";

export const useHomeStore = defineStore('home', () => {
  //topBarState 响应式状态 topBarState topBarState.value
  const topBarState = ref<HomeTopBarItem[]>([
    { title: "球场预约", icon: "location-o" },
    { title: "训练营", icon: "cluster-o" },
    { title: "赛事报名", icon: "medal-o" },
    { title: "装备商城", icon: "shop-o" },
    { title: "私教课程", icon: "user-o" }
  ])
  const navBarState = ref<HomeNavBarItem[]>([
    {
      title: "足球专区",
      icon: "fire-o",
      msg: "专业足球训练"
    },
    {
      title: "篮球天地",
      icon: "cluster-o",
      msg: "街头篮球赛事"
    },
    {
      title: "网球学院",
      icon: "medal-o",
      msg: "专业教练指导"
    }
  ])
  // 热门场馆推荐
  const PopularDestinations = ref<PopularDestinationsItem[]>([
    {
      area: "北京",
      type: "足球圣地",
      img: "https://zhonghe-1.oss-cn-beijing.aliyuncs.com/zhonghe/20230131/9e9c89a1259077e0a8a5716b6c745373.jpg"
    },
    {
      area: "上海",
      type: "中超联赛",
      img: "https://api.sh-datastone.com/place_china_api/Public/upload/mainpic/20190610141953_1720050720.jpg"
    },
    {
      area: "广州",
      type: "亚冠主场",
      img: "https://n.sinaimg.cn/sinacn10106/228/w1000h828/20190824/54b8-icqznha4200187.jpg"
    },
    {
      area: "杭州",
      type: "CBA场馆",
      img: "https://ts1.cn.mm.bing.net/th/id/R-C.6cff96ff1980a0f43db26932b9fe0400?rik=%2bLlEISIcxV8AWQ&riu=http%3a%2f%2fo.cztvcloud.com%2f190%2fposts%2f2022%2f04%2f22%2f561428211b349d546b937d7f2424938e.jpg%3fx-oss-process%3dimage%2fresize%2cw_1000%2fquality%2cQ_80&ehk=mjG7GEg4KAvWAS9UYv8bbxnrK57LWlBf9184mnfiWKI%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      area: "厦门",
      type: "中超新馆",
      img: "https://n.sinaimg.cn/sinakd10111/222/w1080h742/20230814/8a57-293ab59b34d313164f5759a58e088eda.jpg"
    }
  ])
  // 运动达人分享
  const ShareTour = ref<ShareTourItem[]>([
    {
      nickName: "足球老炮",
      title: "业余足球训练五大必备技巧",
      img: "https://www.sus.edu.cn/__local/3/34/AF/B4FA9BBFAF8CF1968DA8BD8577C_4316144A_33326.jpg",
      loveNum: 5689
    },
    {
      nickName: "篮下霸主",
      title: "三步提升投篮命中率",
      img: "https://safe.cumt.edu.cn/__local/B/F7/49/D0455C0BFAEBAD7F7950047A304_D12783B7_FC396.jpg",
      loveNum: 3245
    },
    {
      nickName: "网球王子",
      title: "反手击球核心要点解析",
      img: "https://ts1.cn.mm.bing.net/th/id/R-C.41a1f61826487eb5e226d989899a8ee9?rik=59UXERwDHaqdPg&riu=http%3a%2f%2fwww.coollife.asia%2ffiles%2fimages%2f4(703).jpg&ehk=S9RoKtSeQZHLZXO3EQrWRiHarnNyWSld9gSzEcpUzkQ%3d&risl=&pid=ImgRaw&r=0",
      loveNum: 4897
    },
    {
      nickName: "装备控",
      title: "2024最新足球鞋选购指南",
      img: "https://tse1-mm.cn.bing.net/th/id/OIP-C.tBJOQzh5_oa0C0WaFhpHKwHaHa?rs=1&pid=ImgDetMain",
      loveNum: 7852
    },
    {
      nickName: "羽林高手",
      title: "双打战术：如何与搭档完美配合",
      img: "https://ts1.cn.mm.bing.net/th/id/R-C.7d1b1e2e9584b4f1b5a356e03ee7f133?rik=qJ6Y0dwbZDwpRQ&riu=http%3a%2f%2fimg.verodillan.com%2fimage%2f20190814%2f1420351007a49dca2b5138.jpg&ehk=oFvWBrqaymiPLHvhLO2r6njhF3uZ6avSVRJWzoAKdJM%3d&risl=&pid=ImgRaw&r=0",
      loveNum: 3789
    },
    {
      nickName: "波波教练爱乒乓",
      title: "发球绝技：3种迷惑性旋转发球教学",
      img: "https://sns-webpic-qc.xhscdn.com/202502210623/d4f273ba9c743476001d825416d665b3/1040g00831c00011p0u5g5n4v79jk2u2g1cf4mn8!nc_n_webp_mw_1",
      loveNum: 3249
    },
    {
      nickName: "绿茵战术板",
      title: "4-3-3阵型防守反击战术详解",
      img: "https://sns-webpic-qc.xhscdn.com/202502210627/6cf0b1c556ed317812ce4f42dbbf4818/1040g00831dijr0ltgc605oo7fto3ok0plbbmi1o!nc_n_webp_mw_1",
      loveNum: 8456
    },
    {
      nickName: "本垒打王",
      title: "金属棒与木棒的击球差异：旋转与甜蜜点",
      img: "https://sns-webpic-qc.xhscdn.com/202502210628/a6f5683216351b817b40b2f1eba5b92c/1040g008317jtmd8a3u5g45171p53d82vlrpipeg!nc_n_webp_mw_1",
      loveNum: 3124
    },
  ])

  return {
    topBarState,
    navBarState,
    PopularDestinations,
    ShareTour
  }

})