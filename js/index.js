$(".navbar-default .navbar-nav>li").each(function (index) {
    $(this).click(function () {
        $(".navbar-default .navbar-nav>li").removeClass("liactive");
        $(".navbar-default .navbar-nav>li").eq(index).addClass("liactive")
    })
})

$(".burger2").click(function () {
    $(".burger2").toggleClass("open");
})

app.controller('indexCtrl',
    function ($scope, $http) {
        $http.get('json/index.json')
            .then(function (response) {
                $scope.navs = response.data.navs;
                $scope.navs[0].isclick = true;//首个加样式
                $scope.liactive = function (index) {
                    for (var i = 0; i < $scope.navs.length; i++) {
                        $scope.navs[i].isclick = false;//点击的时候其他的都不加样式
                    }
                $scope.navs[index].isclick = true;//ng-click时当前的添加样式
                }
            })
    })