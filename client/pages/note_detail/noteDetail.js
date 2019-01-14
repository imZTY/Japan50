// pages/note_detail/noteDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    noteObject:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var noteObject = JSON.parse(options.noteObject);
    this.setData({
      noteObject: noteObject
    })
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
   * 跳转（修改）
   */
  toEdit: function () {
    var noteObject = JSON.stringify(this.data.noteObject)
    wx.navigateTo({
      url: '/pages/note_add/noteAdd?isEdit=1&noteObject=' + noteObject,
    })
  }
})