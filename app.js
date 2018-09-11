var api = require('./utils/api.js')

App({
  api: api,
  onLaunch: function () {
  },
  // 小程序的全局变量
  // 用他来管理全局的路由
  globalData: {
    // tabbarConfig 里面的内容可以copy app.json中tabbar的配置
    tabbarConfig: [
      {
        "active": true, // active是这里独有的，通过它可以判断哪个页面是当前的
        "pagePath": "pages/index/index",
        "text": "首页",
        "iconPath": "/static/icon/icon_home.png",
        "selectedIconPath": "/static/icon/icon_home_active.png"
      },
      {
        "active": false,
        "pagePath": "pages/tag/index",
        "text": "标签",
        "iconPath": "/static/icon/icon_tag.png",
        "selectedIconPath": "/static/icon/icon_tag_active.png"
      },
      {
        "active": false,
        "pagePath": "pages/center/index",
        "iconPath": "/static/icon/icon_plus_big.png",
        "selectedIconPath": "/static/icon/icon_plus_big.png"
      },
      {
        "active": false,
        "pagePath": "pages/notebook/index",
        "text": "日记",
        "iconPath": "/static/icon/icon_notebook.png",
        "selectedIconPath": "/static/icon/icon_notebook_active.png"
      },
      {
        "active": false,
        "pagePath": "pages/mine/index",
        "text": "我的",
        "iconPath": "/static/icon/icon_me.png",
        "selectedIconPath": "/static/icon/icon_me_active.png"
      }
    ],
    isHideTabbar: false
  }
})