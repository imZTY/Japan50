// pages/note_list/noteList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteList: [],
    author:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //获取第一页笔记(20条)
    wx.request({
      url: 'https://www.oathtomylove.top/japan/note/list',
      data:{
        page:1
      },
      header: {
        "Content-Type": "charset=utf-8;"
      },
      method: 'get',
      success: function (res) {
        console.log(res);
        if (res.statusCode == 200) {
          that.setData({
            noteList:res.data.list
          });
        }
      },
      fail: function () {
        console.log("[init] fail")
      },
      complete: function () {
        console.log("[init] complete")
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }, 
  /**
   * 跳转（添加）
   */
  toAdd: function () {
    wx.navigateTo({
      url: '/pages/note_add/noteAdd?isEdit=0',
    })
  },
  /**
   * 跳转（详情）
   */
  toDetail: function (e) {
    var index = e.currentTarget.dataset.indexId;
    var noteObject = JSON.stringify(this.data.noteList[index]);

    wx.navigateTo({
      url: '/pages/note_detail/noteDetail?noteObject=' + noteObject,
    })
  },
  /**
   * 刷新（搜索）
   */
  search: function () {
    var that = this;
    //搜索作者
    wx.request({
      url: 'https://www.oathtomylove.top/japan/note/findByAuthor',
      data:{
        author:this.data.author
      },
      header: {
        "Content-Type": "charset=utf-8;"
      },
      method: 'get',
      success: function (res) {
        console.log(res);
        if (res.statusCode == 200) {
          that.setData({
            noteList: res.data.list
          });
        }
      },
      fail: function () {
        console.log("[search] fail")
      },
      complete: function () {
        console.log("[search] complete")
      }

    })
  },
  /**
   * 刷新署名
   */
  getAuthor: function (e) {
    this.setData({
      author: e.detail.value
    })
  }
  
})