function aler(id,html) {
    $("#" + id).click(function () { 
        // iframe.src=html
        location.href=html
    });
}

$(function () {
    aler("video", "../html/video.html")
    aler("tool", "../html/tool.html")
    aler("ruanjian", "../html/ruanjian.html")
    aler("kuaijiejian", "../html/kuaijiejian.html")
    aler("pcruanjian", "../html/pcruanjian.html")
    aler("ppt", "../html/ppt.html")
    aler("wangpansousuo", "../html/wangpansousuo.html")
    aler("zaixianwendang", "../html/zaixianwendang.html")
    aler("ziyuanyizhan", "../html/ziyuanyizhan.html")
})
