## 项目背景

作者受到2018年第一届微信小程序开发大赛中的作品《反义词消消乐》的影响，曾经一直想模仿做一款和日语50音相关的消消乐小程序，于是，作者在学习 Nodejs 的时候顺便把这项一直想做的事情做了。[项目日记](https://www.jianshu.com/p/ad354d5d3dc1)

## 项目结构
```
├─client 小程序客户端
│  ├─images 图片资源
│  │  ├─bar 导航栏相关图片
│  │  └─game 游戏相关图片
│  └─pages 各页面
│      ├─game_main 游戏主页
│      ├─note_add 新增笔记页
│      ├─note_detail 笔记详情页
│      └─note_list 笔记列表页(笔记大厅)
└─server 小程序服务
    ├─MVC 各解耦模块
    └─node_modules 包依赖
```

## Client目录

是微信小程序项目，里面的：
1. game_main 是游戏主页，这是一个单机的日语50音消消乐游戏，内含游戏规则弹窗，和用户**微信登录**后的信息获取
2. note_list 是笔记列表页面，可以用户看到所有用户添加的笔记
3. note_detail 是笔记详情页面，用户可以通过点击某个笔记进入（目前界面还很简陋，有兴趣可以完善）
4. note_add 是添加笔记的操作页面，内含多个**弹窗事件**（目前界面还很简陋，有兴趣可以完善）

## Server目录

是用 `Nodejs` 写的与 mysql 数据库进行交互的后端项目；
独立运行于服务器（不发布到小程序腾讯云）；
运用了MVC分层思想；

笔记部分由于不符合相关规定而无法上传，上线版本只有单机的消消乐游戏部分

![小程序上线版二维码](http://qiniu.zengtianyi.top/japan50.jpg)

## 截图展示


![游戏页-初进入](http://qiniu.zengtianyi.top/japan50/gm-enter.png)

![游戏页-开始游戏](http://qiniu.zengtianyi.top/japan50/gm-start.png)

![游戏页-完成游戏](http://qiniu.zengtianyi.top/japan50/gm-end.png)

![笔记大厅](http://qiniu.zengtianyi.top/japan50/note-list.png)

![笔记详情](http://qiniu.zengtianyi.top/japan50/note-detail.png)

![修改笔记](http://qiniu.zengtianyi.top/japan50/note-update.png)

![新增笔记](http://qiniu.zengtianyi.top/japan50/note-add.png)
