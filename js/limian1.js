
$(function () {
    $(".item").click(function () {
            alert("若打不开，请在浏览器中打开下面地址，由于技术不够，您可能复制不了🤣"+$(this).children("a").attr("href"))
        })
})