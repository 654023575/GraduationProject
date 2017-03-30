$(".navbar-default .navbar-nav>li").each(function (index) {
    $(this).click(function () {
        $(".navbar-default .navbar-nav>li").removeClass("liactive");
        $(".navbar-default .navbar-nav>li").eq(index).addClass("liactive")
    })
})

$(".burger2").click(function () {
    $(".burger2").toggleClass("open");
})
