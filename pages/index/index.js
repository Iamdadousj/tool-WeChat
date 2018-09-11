// 获取app实例，里面有app.js定义的各个对象
const app = getApp()
// 将公共方法提取出来
import { setRouterConfig } from '../../utils/util.js'
// 将底部导航栏用template方式实现，并把其api引入进来
// 此处是因为小程序对于组件化开发的支持实在太弱了
// 可以考虑下小程序的开发框架: wepy、mpvue
import tabbarApi from '../components/tabbar/tabbar'
// 定义页面自己的js逻辑
const selfApi = {
  // 虽然我们使用了全局变量存储状态，但是他不是响应式的
  // 所以要在本地data中copy一个副本
  data: {
    tabbarConfig: app.globalData.tabbarConfig,
    isHideTabbar: app.globalData.isHideTabbar
  },
  onLoad: function () {
    // 调用hideTabBar方法
    wx.hideTabBar({
      success: () => {
        // 如果成功就将全局的状态修改，此处主要是防止调用失败后出现两个导航栏
        app.globalData.isHideTabbar = true
        this.setData({
          isHideTabbar: app.globalData.isHideTabbar,
          fixTop: '', //区域离顶部的高度
          scrollTop: 0, //滑动条离顶部的距离,
          swiperCon: {
            imgUrls: [
              'http://img04.tooopen.com/images/20130712/tooopen_17270713.jpg',
              'http://img04.tooopen.com/images/20130701/tooopen_20083555.jpg',
              'http://img02.tooopen.com/images/20141231/sy_78327074576.jpg'
            ],
            indicatorDots: true, //是否显示面板指示点
            indicatorColor: "rgba(0, 0, 0, .3)", //指示点颜色
            indicatorActiveColor: "#007aff", //当前选中的指示点颜色
            circular: true, //是否采用衔接滑动
            interval: 5000, //自动切换时间间隔
            duration: 1000, //滑动动画时
            currentSwiper: 0,
            autoplay: true
          }
        })
      }
    })
    // 获取当前页面路由
    let path = this.route
    this.setData({
      tabbarConfig: setRouterConfig(app.globalData.tabbarConfig, path)
    })
  },
  onReady: function () {
  }
  ,
  swiperChange: function (e) {
    var currentSwiper = swiperCon.currentSwiper
    this.setData({
      currentSwiper: e.detail.current
    })
  },
  onShow: function () {
    let self = this;
    wx.createSelectorQuery().select('.static-news').boundingClientRect(function (rect) {
      self.setData({
        fixTop: rect.top,
      })
    }).exec()
  },
  scroll: function (e) {
    let self = this;
    let top = e.detail.scrollTop;
    self.setData({
      scrollTop: top
    });
  }
}
Page(Object.assign({}, tabbarApi, selfApi))







