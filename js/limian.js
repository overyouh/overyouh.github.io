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
    aler("zaixianwendang", "../html/zaixianwendang.html")
})
