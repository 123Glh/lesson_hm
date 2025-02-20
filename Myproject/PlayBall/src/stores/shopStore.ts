import { defineStore } from "pinia";
// 关键数据要限制类型
import { ref } from "vue";
// 引诱 面试官 es6 module 问题
import type {
  ShopTopBarItem,
  recommendItem
} from "@/types/shop";

export const useShopStore = defineStore('shop', () => {
  //topBarState 响应式状态 topBarState topBarState.value
  const topBarState = ref<ShopTopBarItem[]>([
    {
      title: "球场",
      icon: "fire-o",
    },
    {
      title: "训练营",
      icon: "cluster-o",
    },
    {
      title: "赛事",
      icon: "medal-o",
    },
    {
      title: "装备",
      icon: "bag-o",
    },
    {
      title: "教练",
      icon: "user-o",
    }
  ])
  const recommendItemState = ref<recommendItem[]>([
    {
      title: "足球赛事",
      items: [
        {
          type: '1',
          title: "工人体育场",
          image: "https://tr-osdcp.qunarzz.com/tr-osd-tr-manager/img/c3f72e0439175fe90aef360ff9b2434a.jpg",
          price: "120",
          place: "北京市朝阳区工人体育场北路",
          market: "2350"
        },
        {
          type: '1',
          title: "五人制足球场",
          image: "https://ts1.cn.mm.bing.net/th/id/R-C.df6ec78dec27982b47f0508d31962f46?rik=k8b8mGj0sJWE5Q&riu=http%3a%2f%2fn.sinaimg.cn%2fsinacn10110%2f440%2fw640h600%2f20191227%2fa0ae-imfiehq6628159.jpg&ehk=25SQPS5jxz3PC5JGRC8W5QNMw%2fFrNTl3jhhywoNloA4%3d&risl=&pid=ImgRaw&r=0",
          price: "80",
          place: "北京市海淀区中关村足球公园",
          market: "1568"
        },
        {
          type: '2',
          title: "杭州黄龙体育中心",
          image: "https://hznews.hangzhou.com.cn/chengshi/content/2022-08/08/ef8c1d86-4470-4b70-a6b0-f54240116a30.jpg",
          price: "100",
          place: "杭州市西湖区黄龙路1号",
          market: "1892"
        },
        {
          type: '3',
          title: "厦门白鹭体育场",
          image: "https://bcn.135editor.com/files/users/793/7931841/202204/sVqAZYNK_kaE3.jpg",
          price: "90",
          place: "厦门市翔安区滨海东大道",
          market: "978"
        }
      ]
    },
    {
      title: "篮球活动",
      items: [
        {
          type: '1',
          title: "首钢篮球中心",
          image: "https://qn.saiday.com/matchDay/image/venue/20181210/venue_19c85ad5-1c71-4db7-846d-11d6c8abdba1.jpg",
          price: "60",
          place: "北京市石景山区阜石路159号",
          market: "3245"
        },
        {
          type: '2',
          title: "杭州奥体中心",
          image: "https://www.hangzhou2022.cn/sssg/sscg/202203/W020230314508580476809.png",
          price: "70",
          place: "杭州市萧山区博奥路",
          market: "2134"
        }
      ]
    },
    {
      title: "网球课程",
      items: [
        {
          type: '1',
          title: "国家网球中心",
          image: "https://ts1.cn.mm.bing.net/th/id/R-C.7ed8699c57c5efec51aa8f72ea29114b?rik=uFZxWcQoV9BqQw&riu=http%3a%2f%2fvimage.cn%2fup%2finfo%2f201310%2f20131031103625_76200.jpg&ehk=lYEST7XE9y0oTBpH3ZCLSGoFXvVx1oBEp3gpUCoRiN4%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
          price: "200",
          place: "北京市朝阳区林萃路2号",
          market: "876"
        }
      ]
    },
    {
      title: "运动装备",
      items: [
        {
          type: '1',
          title: "专业足球鞋",
          image: "https://ts1.cn.mm.bing.net/th/id/R-C.1571ffa4b83ed75740ca757147701ebb?rik=ynC1gQ9fxl8PmA&riu=http%3a%2f%2fimg2.enjoyz.com%2f2015%2f06%2f29%2f20150629054505557.jpg&ehk=LSTmvlvmDCXO7HdTCThuqibzgfNsOd%2bg61a7qUgCet0%3d&risl=&pid=ImgRaw&r=0",
          price: "599",
          place: "北京市朝阳区三里屯旗舰店",
          market: "345"
        }
      ]
    }
  ])
  return {
    topBarState,
    recommendItemState
  }
})

