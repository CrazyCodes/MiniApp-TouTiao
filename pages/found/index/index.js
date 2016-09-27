"use strict";

var root_path = "../../../";
var index_obj = require(root_path+'function/found_index.js')

Page({
  data:{
    // text:"这是一个页面"
  },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
      index_obj.set_title();
  },
  onShow:function(){
      index_obj.set_title();
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})