
function query() {
        $.ajax({
            type: "get",
            url: "https://www.xiaojieapi.cn/API/Gourdwelfare.php",
            dataType: "json",
            success: function (data) {
                if(data.data.explanation=="已被过滤！"){
                   data.data.explanation="无"
                   }
                $("#content").append("<p id=" + data.data.title + " class=\"ppp\">" + data.data.title +
                    "<br>活动规则：" + data.data
                    .rule +
                    "<br>参与方式：" + data.data.manner + "<br>其他说明" + data.data.explanation + "</p>")
                $.each(data.data.Picture, function (i, n) {
                    if (i == 4) {
                        return false;
                    }
                    $("#" + data.data.title).after("<img src=" + n + "></img>")
                })
            }
        });
    }
    // function addExpand() {
    //     var imgs = document.getElementsByTagName("img");
    //     imgs[0].focus();
    //     for (var i = 0; i < imgs.length; i++) {
    //         imgs[i].onclick = expandPhoto;
    //         imgs[i].onkeydown = expandPhoto;
    //     }
    // }
$(function () {
        var useragent = navigator.userAgent;
        if (useragent.match(/MicroMessenger/i) != 'MicroMessenger') {
            window.location.href = "wxError.html";//若不是微信浏览器，跳转到温馨error页面
        }
        for (i = 0; i < 2; i++) {
            query();
        }
        // addExpand();
    })
