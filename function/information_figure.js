// 设置启动页缓存
function set_figure_cookie(){
    wx.setStorage({
        key:"figure",
        data:"1"
    })
}

// 调用启动页缓存
function get_figure_cookie(){
    return wx.getStorageSync('figure');
}


module.exports = {
    set_figure_cookie: set_figure_cookie,
    get_figure_cookie:get_figure_cookie,
}
