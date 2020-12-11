
function query() {
    var img='';
    var title;
        $.ajax({
            type: "get",
            url: "https://www.xiaojieapi.cn/API/Gourdwelfare.php",
            dataType: "json",
            success: function (data) {
                img = data.data.Picture;
                title=data.data.title
                if(data.data.explanation=="已被过滤！"){
                   data.data.explanation="无"
                   }
                $("#content").append("<p id=" + data.data.title + " class=\"ppp\">" + data.data.title +
                    "<br>活动规则：" + data.data
                    .rule +
                    "<br>参与方式：" + data.data.manner + "<br>其他说明" + data.data.explanation + "</p>")
                // $.each(img, function (i, n) {
                //     $("#" + title).after("<img src=" + n + "></img>")
                // })   
                for (i = 0; img[i] != null; i++){
                    $("#" + title).after("<img src=" + img[i] + "></img>")
                }
            }
        });
    }
$(function () {
        for (i = 0; i < 20 ; i++) {
            query();
        }
})