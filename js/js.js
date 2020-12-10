

function aler(id,html) {
    $("#" + id).click(function () { 
        iframe.src=html
    });
}
$(function () {
     var useragent = navigator.userAgent;
        if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
            window.location.href = "/html/wxError.html";//若不是微信浏览器，跳转到温馨error页面
        }
    aler("zhideyikan", "../html/lu.html")
    // aler("liaowo","../html/video.html")
})
